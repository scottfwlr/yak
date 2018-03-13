class AddChannelIdToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :channel_id, :integer, null: false

    add_index :messages, :channel_id
  end
end
