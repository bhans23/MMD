class Mood < ApplicationRecord
  belongs_to :day
  has_many :mattributes, dependent: :destroy
end
