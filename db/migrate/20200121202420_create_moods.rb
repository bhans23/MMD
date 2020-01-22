class CreateMoods < ActiveRecord::Migration[6.0]
  def change
    create_table :moods do |t|
      t.integer :over_all
      t.integer :sad
      t.integer :happy
      t.integer :depressed
      t.time :mood_time
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
