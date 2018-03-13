class CreateChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.text :purpose

      t.timestamps
    end

    add_index :channels, :name, unique: true
  end
end
