class CreateAttributes < ActiveRecord::Migration[6.0]
  def change
    create_table :attributes do |t|
      t.integer :sleep
      t.string :medication
      t.integer :medication_dosage
      t.boolean :excersize
      t.integer :exccersize_amount
      t.string :other
      t.belongs_to :mood, null: false, foreign_key: true

      t.timestamps
    end
  end
end
