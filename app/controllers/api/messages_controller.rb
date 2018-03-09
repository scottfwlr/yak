class Api::MessagesController < ApplicationController


  def index
    @messages = Message.all
  end

  # create ?

end
