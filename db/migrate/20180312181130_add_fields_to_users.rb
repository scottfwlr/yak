class AddFieldsToUsers < ActiveRecord::Migration[5.1]
  def change
    change_table :users do |t|
      t.string :full_name
      t.string :display_name
      t.text :description
      t.string :profile_pic_url
    end
  end
end
