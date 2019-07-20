class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :subject
      t.string :body
      t.integer :stars
      t.date :date
      t.belongs_to :product, foreign_key: true

      t.timestamps
    end
  end
end
