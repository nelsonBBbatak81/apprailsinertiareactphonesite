class Color < ApplicationRecord
    has_many :product_details, dependent: :destroy
end
