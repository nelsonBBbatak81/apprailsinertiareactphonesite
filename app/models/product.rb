class Product < ApplicationRecord
  belongs_to :category
  belongs_to :brand

  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings, dependent: :destroy

  has_many :product_details, dependent: :destroy

  def tag_list=(tags_string)
    tag_titles = tags_string.split(/[,\s]+/).collect{|s| s.strip.downcase}.uniq
    new_or_found_tags = tag_titles.collect { |title| Tag.find_or_create_by(title: title) }
    self.tags = new_or_found_tags
  end

end
