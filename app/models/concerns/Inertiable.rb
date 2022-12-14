require 'active_support/concern'

module Inertiable
  extend ActiveSupport::Concern

  included do
    before_action :set_csrf_cookies

    inertia_share errors: -> {
      session.delete(:errors) || []
    }
    inertia_share flash: -> {
      {
        notice: flash.notice,
        alert: flash.alert
      }
    }
  end

  def redirect_to(options = {}, response_options = {})
    if (errors = response_options.delete(:errors))
      session[:errors] = errors
    end

    super(options, response_options)
  end

  private

    def set_csrf_cookies
      cookies['XSRF-TOKEN'] = {
        value: form_authenticity_token,
        same_site: 'Strict'
      }
    end
end