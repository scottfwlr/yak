class MessagesChannel < ApplicationCable::Channel

  def subscribed
    stream_from "main"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # check if authorised
    # ...

    # check if message saved 
    if message = message_from(data)
      ActionCable.server.broadcast('main', message)
    else

  end

  def message_from(data)
    message = Message.new(text: data['text'], author: current_user)
    if message.save
      ApplicationController.render(
        partial: 'api/messages/message',
        locals: {message: message})
    else
      false
    end
  end
end
