class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.float :price
      t.integer :stock
      t.belongs_to :department, foreign_key: true

      t.timestamps
    end
  end
end
