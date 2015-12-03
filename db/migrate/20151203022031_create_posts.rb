class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.text :english_text
      t.text :spanish_text

      t.timestamps null: false
    end
  end
end
