class UsersController < ApplicationController
  before_action :authorized?, except: [:new, :create]
  def new
    @user = User.new 
  end
  def create
    @user = User.create(user_params)
    session[:user_id] = @user.id
    redirect_to rappers_path
  end

  def edit
  end
  def update
  end

  def delete
  end

  private 

  def user_params
    params.require(:user).permit(:name, :password, :username)
  end

end
