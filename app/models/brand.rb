class Brand < ApplicationRecord
    has_many :products, dependent: :destroy

    has_one_attached :urlimage

    validates :title, presence: true
    validates :meta_info, presence: true
    validates :urlimage, presence: true

    private
        def make_slug
            self.slug = self.title.downcase.gsub(/[^a-z1-9]+/, '-').chomp('-')
        end
end
