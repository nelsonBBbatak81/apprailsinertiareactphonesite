class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.belongs_to :category, null: false, foreign_key: true
      t.belongs_to :brand, null: false, foreign_key: true
      t.text :description
      t.text :meta_info
      t.string :slug
      t.decimal :price, precision: 10, scale: 2
      t.decimal :amount, precision: 10, scale: 2

      t.timestamps
    end
  end
end
