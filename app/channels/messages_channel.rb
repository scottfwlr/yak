class MessagesChannel < ApplicationCable::Channel

  def subscribed
    stream_from current_channel.name
  end

  def unsubscribed
  end
  
  def new_message(data)
    message = message_from(data)
    if message.save
      broadcast type: 'RECEIVE_MESSAGE', 
        message: partial('api/messages/message', message: message)
    else
      broadcast type: 'RECEIVE_ERRORS',
        errors: message.errors.full_messages
    end
  end

  def edit_message(data)
    message = lookup_message(data['id'])
    if message && message.update(text: data['text'])
      broadcast type: 'RECEIVE_MESSAGE',
        message: partial('api/messages/message', message: message)
    elsif message
      broadcast type: 'RECEIVE_ERRORS',
        errors: message.errors.full_messages
    else
      broadcast type: 'RECEIVE_ERRORS',
        errors: ["You can only edit your own messages."]
    end
  end

  def delete_message(data)
    message = lookup_message(data['id'])
    if message
      message.destroy!
      broadcast type: 'DELETE_MESSAGE',
        id: message.id
    else
      broadcast type: 'RECEIVE_ERRORS',
        errors: ["You can only delete your own messages."]
    end
  end

  private

  def current_channel
    Channel.find_by(name: params[:room])
  end

  def message_from(data)
    Message.new(text: data['text'], author: current_user, channel: current_channel)
  end

  def lookup_message(id)
    message = Message.find_by(id: id)
    message if message.author == current_user
  end

  def broadcast(data)
    ActionCable.server.broadcast(current_channel.name, 
      ApplicationController.render(json: data))
  end

  def partial(partial, locals)
    JSON.parse ApplicationController.render(partial: partial, locals: locals)
  end

end
