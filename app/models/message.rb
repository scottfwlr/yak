class Message < ApplicationRecord
  
  validates :text, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  

end
