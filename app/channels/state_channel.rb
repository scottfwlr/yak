class StateChannel < ApplicationCable::Channel

  def subscribed
    stream_from channel_name
  end

  def unsubscribed
  end

  def speak(text)
    ActionCable.server.broadcast(channel_name, text)
  end

  def new_message(text)
    ActionCable.server.broadcast(channel_name, text)
  end

  def secret_method(foo)
    ActionCable.server.broadcast(channel_name, foo)
  end

  def RECEIVE_MESSAGE(foo)
    ActionCable.server.broadcast(channel_name, foo)
  end

end