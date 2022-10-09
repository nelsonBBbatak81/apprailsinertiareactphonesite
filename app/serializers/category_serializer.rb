class CategorySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :meta_info, :slug, :urlimage 

  def urlimage
    Rails.application.routes.default_url_options[:host] = 'localhost:3000'
    rails_blob_url(object.urlimage)
  end
end
