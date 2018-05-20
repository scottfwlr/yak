class Api::StateController < ApplicationController

  def index
    @users = User.all
    @channels = current_user.channels.includes(:messages)
    @messages = @channels.flat_map(&:messages)
    render 'api/state/index'
  end
end