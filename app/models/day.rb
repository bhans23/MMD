class Day < ApplicationRecord
  belongs_to :user
  has_many :moods, dependent: :destroy
end
