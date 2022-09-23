class CreateColors < ActiveRecord::Migration[7.0]
  def change
    create_table :colors do |t|
      t.string :title
      t.string :slug
      t.text :meta_info

      t.timestamps
    end
  end
end
