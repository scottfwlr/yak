class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.text :text, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :messages, :author_id
  end
end
