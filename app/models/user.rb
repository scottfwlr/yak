class User < ApplicationRecord

  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :messages,
    foreign_key: :author_id,
    class_name: :Message

  has_many :channel_memberships
  has_many :channels, through: :channel_memberships

  after_initialize :ensure_session_token



  def self.find_by_credentials(email:, password:)
    @user = User.find_by(email: email)
    return @user if @user && @user.is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  attr_reader :password

  def password=(pass)
    @password = pass
    self.password_digest = BCrypt::Password.create(pass)
  end

  def is_password?(pass)
    BCrypt::Password.new(password_digest).is_password?(pass)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
