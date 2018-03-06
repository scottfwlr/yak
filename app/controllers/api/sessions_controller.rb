class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(email: params[:email], password: params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['The email or password you entered isn\'t correct.'], status: 400
    end
  end

  def destroy
    if logged_in?
      logout
      render json: ['You have logged out.']
    else
      render json: ['You can\'t log out when you\'re already logged out.'], status: 400
    end
  end

end
