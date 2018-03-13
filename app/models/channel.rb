class Channel < ApplicationRecord

  validates :name, presence: true, uniqueness: true

  has_many :messages

  has_many :channel_memberships
  has_many :users, through: :channel_memberships

end