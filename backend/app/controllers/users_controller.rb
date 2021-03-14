class UsersController < ApplicationController
    
  def create
    user = User.create(user_params)
    if user.valid?
        payload = {user_id: user.id}
        token = encode_token(payload)
        render json: {user: user, jwt: token}
    else
        render json: {errors: user.errors.full_messages}, status: :not_acceptable}
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # authenticate is provided by bcrypt
      payload = {user_id: user.id}
      token = encode_token(payload)
      # encode_token is a method from application controller
      render json: {user: user, jwt: token, success: "Welcome back, #{user.username}!"}
    else
      render json: {failure: "Log in failed! Please check username and password."}
    end
  end

  private
    
    def user_params
      params.require(:user).permit(:username, :email, :password, :password_confirmation)
    end
end
    