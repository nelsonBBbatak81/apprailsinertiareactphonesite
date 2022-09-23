class RegistrationsController < Devise::RegistrationsController

    def create
      user = User.new(user_params)
      if user.save
        redirect_to signin_path, notice: "You have successfully register and please sign in!"
      else
        # warden.custom_failure!
        redirect_to signup_path, errors: user.errors 
        # render json: { errors: @user.errors }
        # render json: { error: 'signup error' }, status: :unprocessable_entity
      end
    end
  
    def update
      @user = User.find_by_email(user_params[:email])
  
      if @user.update_attributes(user_params)
        render json: @user
      else
        warden.custom_failure!
        render :json=> @user.errors, :status=>422
      end
   end
  
    def destroy
      @user = User.find_by_email(user_params[:email])
      if @user.destroy
        render :json=> { success: 'user was successfully deleted' }, :status=>201
      else
        render :json=> { error: 'user could not be deleted' }, :status=>422
      end
    end
  
    private
  
    def user_params
       params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
  