class ChannelsChannel < ApplicationCable::Channel

  def subscribed
    stream_from channel_name, coder: ActiveSupport::JSON do |data|
      transmit data if current_user.permitted_to_see(data)
    end
  end

  def unsubscribed
  end

  def new_channel(name)
    debugger
  end





end