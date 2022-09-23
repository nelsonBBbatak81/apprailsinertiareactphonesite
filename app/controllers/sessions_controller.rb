class SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token, only: [:create]
  
    # POST /v1/login
    def create
      # render json: params.require(:user).permit(:email, :password)
      @user = User.find_by_email(user_params[:email])
      return invalid_login_attempt unless @user
  
      if @user.valid_password?(user_params[:password])
        sign_in :user, @user
        redirect_to admin_home_path, notice: "You have successfully sign in!"
      else
        invalid_login_attempt
        
      end
    end
  
    def destroy
      sign_out(@user)
      redirect_to signin_path, notice: 'Sign out successfully'
    end
  
  
      private
  
      def invalid_login_attempt
        warden.custom_failure!
        redirect_to signin_path, alert: "Email or password there is no in database, please enter valid credential!"
      end
  
      def user_params
         params.require(:user).permit(:email, :password)
      end
  
end
  