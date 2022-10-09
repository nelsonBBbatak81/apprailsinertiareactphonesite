class Brand < ApplicationRecord
    has_many :products, dependent: :destroy

    has_one_attached :urlimage
end
