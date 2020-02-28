class AddMeditationYogaToAttributes < ActiveRecord::Migration[6.0]
  def change
    add_column :attributes, :yoga, :boolean
    add_column :attributes, :yoga_time, :integer
    add_column :attributes, :meditation, :boolean
    add_column :attributes, :meditation_time, :integer
  end
end
