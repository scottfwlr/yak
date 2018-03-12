module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_current_user
    end

    private

    def find_current_user
      if user = User.find_by(session_token: get_session_token)
        user
      else
        reject_unauthorized_connection
      end
    end

    # ActionCable doesn't have access to session, but...
    # it does have access to cookies, where session lives!
    def get_session_token
      cookies.encrypted["_yak_session"]["session_token"]
    end
  end
end
