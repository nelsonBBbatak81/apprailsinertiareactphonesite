class ApplicationController < ActionController::Base
    protect_from_forgery with: :null_session
    include Inertiable

    # inertia_share errors: -> {
    #   session[:errors] || []
    # }

    inertia_share user: -> { current_user }

    # inertia_share flash: -> {
    #   {
    #     message: flash.notice
    #   }
    # }


    inertia_share logo: -> {ActionController::Base.helpers.image_url('logo.webp')}
    inertia_share url: -> { request.path}

    protected
      def authenticate_user!
        redirect_to unauthorized_path, notice: "You must login" unless user_signed_in?
      end

end
