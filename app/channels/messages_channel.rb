class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "main"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    ActionCable.server.broadcast('main', message_from(data))
  end

  def message_from(data)
    message = Message.new(text: data['text'], author: current_user)
    if message.save
      ApplicationController.render(partial: 'api/messages/message', locals: {message: message})
    end
  end
end
