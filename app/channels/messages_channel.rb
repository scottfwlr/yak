class MessagesChannel < ApplicationCable::Channel

  def subscribed
    stream_from current_room
  end

  def unsubscribed
  end
  # data['action']
  # data['text'] etc
  # params[:room]

  def new_message(data)
    message = Message.new(message_from(data))
    if message.save
      broadcast('receiveMessage', message)
    end
  end

  def edit_message(data)
    message = lookup_message(data['id'])
    if message && message.update(text: data['text'])
      broadcast('receiveMessage', message)
    end
  end

  def delete_message(data)
    message = lookup_message(data['id'])
    if message
      message.destroy!
      broadcast('deleteMessage', message)
    end
  end
  
  private

  def current_room
    params[:room].to_s
  end

  def message_from(data)
    {text: data['text'], author: current_user}
  end

  def lookup_message(id)
    message = Message.find(id)
    message if message.author == current_user
  end

  def broadcast(action, message)
    ActionCable.server.broadcast(current_room,
      ApplicationController.render(
        partial: 'api/messages/action_message',
        locals: {
          action: action,
          message: message
        }
      )
    )
  end

end
