class ChangeSleepToBooleanAddSleepTimeColumn < ActiveRecord::Migration[6.0]
  
  
  def change
    rename_column :attributes, :sleep, :sleep_time
    add_column :attributes, :sleep, :boolean
  end
end
