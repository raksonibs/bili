class AddPageNumberAndTypeAndAudioFileToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :audio_file, :string
    add_column :posts, :type, :string
    add_column :posts, :page_number, :integer
  end
end
