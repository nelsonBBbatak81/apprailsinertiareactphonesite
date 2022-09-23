class CreateProductDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :product_details do |t|
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :size, null: false, foreign_key: true
      t.belongs_to :color, null: false, foreign_key: true
      t.decimal :amount, precision: 10, scale: 2

      t.timestamps
    end
  end
end
