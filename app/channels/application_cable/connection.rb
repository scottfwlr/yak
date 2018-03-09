module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      current_user
    end

    def current_user
      @current_user ||= User.find_by(session_token: session_token)
    end

    private

    # ActionCable doesn't have access to session, but...
    # it does have access to cookies, where session lives!
    def session_token
      cookies.encrypted["_yak_session"]["session_token"]
    end
  end
end
