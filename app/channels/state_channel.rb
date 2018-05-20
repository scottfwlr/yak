class StateChannel < ApplicationCable::Channel

  def subscribed
    stream_from channel_user
  end

  def unsubscribed
    stop_all_streams
  end

  def blast(text)
    ActionCable.server.broadcast(channel_name, text.to_json)
  end

  def speak(text)
    ActionCable.server.broadcast(channel_user, text.to_json)
  end

  def new_message(data)
    ActionCable.server.broadcast(channel_user, data.to_json)
  end

  def secret_method(foo)
    ActionCable.server.broadcast(channel_user, foo)
  end

  def RECEIVE_MESSAGE(foo)
    ActionCable.server.broadcast(channel_user, foo)
  end

  private 

  def channel_user
    "#{channel_name}:#{current_user.id}"
  end

  # def broadcast(foo)
  #   ActionCable.server.broadcast(channel_name, {
  #     type: 'STATE_CHANGE',

  #   })
  # end

end