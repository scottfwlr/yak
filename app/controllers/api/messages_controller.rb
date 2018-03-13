class Api::MessagesController < ApplicationController


  def index
    @messages = Message.order(created_at: :desc)
  end

  # create ?

end
