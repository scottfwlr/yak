class AddTopicToChannels < ActiveRecord::Migration[5.1]
  def change
    add_column :channels, :topic, :string
  end
end
