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
      broadcast_message('receiveMessage', message)
    else
      broadcast_error(message.errors.full_messages)
    end
  end

  def edit_message(data)
    message = lookup_message(data['id'])
    if message && message.update(text: data['text'])
      broadcast_message('receiveMessage', message)
    elsif message
      broadcast_error(message.errors.full_messages)
    else
      broadcast_error("You can only edit your own messages.")
    end
  end

  def delete_message(data)
    message = lookup_message(data['id'])
    if message
      message.destroy!
      broadcast_message('deleteMessage', message)
    else
      broadcast_error("You can only edit your own messages.")
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

  def broadcast(data)
    ActionCable.server.broadcast(current_room, data)
  end

  def broadcast_message(action, message)
    broadcast ApplicationController.render(
      partial: 'api/messages/action_message',
      locals: {
        action: action,
        message: message
      }
    )
  end

  def broadcast_error(error)
    broadcast ApplicationController.render(json: {
      action: 'receiveError',
      message: [error]
      })
  end

end
