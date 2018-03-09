module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      current_user
    end

    def current_user
      session_token = cookies.encrypted["_yak_session"]["session_token"]
      @current_user ||= User.find_by(session_token: session_token)
    end
  end
end
