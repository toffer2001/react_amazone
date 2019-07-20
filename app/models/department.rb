class Department < ApplicationRecord
  belongs_to :user, optional: true
  has_many :products
end
