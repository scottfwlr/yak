class Api::ChannelsController < ApplicationController

  def index
    # @channels = Channel.all.includes(:members, :messages)
    @channels = current_user.channels.includes(:members, :messages)
  end

  def show
    @channel = Channel.includes(:members, :messages).find(params[:id])
  end

end