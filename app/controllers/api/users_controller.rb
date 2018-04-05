class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render 'api/users/errors', status: 422
    end
  end


  def show
    @user = User.find(params[:id])
    if @user
      render 'api/users/show'
    end
  end

  def index
    @users = User.all
    render 'api/users/index'
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :display_name, :full_name)
  end
end
