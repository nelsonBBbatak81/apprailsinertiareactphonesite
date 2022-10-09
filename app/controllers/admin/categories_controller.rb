class Admin::CategoriesController < AdminController
    skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
    before_action :set_category, only: [ :update, :destroy ]

    def index 
        @categories = Category.all
        @categoryArray = Array.new 
        @categories.each do |category|
            @categoryObject = Hash.new
            @categoryObject['id'] = category.id 
            @categoryObject['title'] = category.title 
            @categoryObject['meta_info'] = category.meta_info 
            @categoryObject['slug'] = category.slug 
            @categoryObject['urlimage'] = rails_blob_url(category.urlimage) if category.urlimage.attached?

            @categoryArray << @categoryObject
        end

        # render inertia: 'Admin/Category', props: { categories: @categories.as_json() }
        render inertia: 'Admin/Category', props: { categories: @categoryArray }
        # render json:  { categories: @categories}
    end

    def create 
        # render json: { params: category_params}
        @category = Category.new(category_params)

        if @category.save
            redirect_to categories_path, notice: "Category have been successfully created!."
        else 
            redirect_to categories_path, errors: @category.errors
        end
    end 

    def update 
        # render json: { params: params['category']['urlimage'] == 'null' }
        if params['category']['urlimage'] != 'null'
            if @category.update(category_params)
                redirect_to categories_path, notice: "Category have been successfully updated!."
            else
                redirect_to categories_path, alert: "Category failure to update!."
            end
        else 
            if @category.update(category_second_params)
                redirect_to categories_path, notice: "Category have been successfully updated!."
            else
                redirect_to categories_path, alert: "Category failure to update!."
            end
        end
    end

    def destroy
        @category.destroy
        redirect_to categories_path, notice: "Category have been successfully deleted!."
    end

    private 

        def set_category
            @category = Category.find(params[:id])
        end

        def category_params 
            params.require(:category).permit(:title, :meta_info, :urlimage).select {|x,v| v.present?}
        end

        def category_second_params 
            params.require(:category).permit(:title, :meta_info)
        end

end