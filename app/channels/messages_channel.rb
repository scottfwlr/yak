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
    {
      text: data['text'],
      author_id: current_user.id
    }
  end
end
