class Api::ChannelsController < ApplicationController

  def index
    # @channels = Channel.all.includes(:members, :messages)
    @channels = current_user.channels.includes(:messages)
  end

  def show
    @channel = Channel.includes(:messages).find(params[:id])
  end

end