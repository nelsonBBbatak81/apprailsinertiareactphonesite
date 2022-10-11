class Admin::BrandsController < AdminController
    skip_before_action :verify_authenticity_token, only: [:create, :update, :destroy]
    before_action :set_brand, only: [ :update, :destroy ]

    def index
        @brands = Brand.all
        @brandArr = Array.new 
        @brands.each do |brand|
            @brandObj = Hash.new
            @brandObj['id'] = brand.id 
            @brandObj['title'] = brand.title 
            @brandObj['meta_info'] = brand.meta_info 
            @brandObj['slug'] = brand.slug 
            @brandObj['urlimage'] = rails_blob_url(brand.urlimage) if brand.urlimage.attached?

            @brandArr << @brandObj
        end

        render inertia: 'Admin/Brand', props: { brands: @brandArr }
    end 

    def create 
        @brand = Brand.new(brand_params)

        if @brand.save
            redirect_to brands_path, notice: "Brand have been successfully created!."
        else 
            redirect_to brands_path, errors: @brand.errors
        end
    end 

    def update 
        if params['brand']['urlimage'] != 'null'
            if @brand.update(brand_params)
                redirect_to brands_path, notice: "Brand have been successfully updated!."
            else
                redirect_to brands_path, alert: "Brand failure to update!."
            end
        else 
            if @brand.update(brand_second_params)
                redirect_to brands_path, notice: "Brand have been successfully updated!."
            else
                redirect_to brands_path, alert: "Brand failure to update!."
            end
        end
    end 

    def destroy 
        @brand.destroy
        redirect_to brands_path, notice: "Brand have been successfully deleted!."
    end 

    private 

        def set_brand
            @brand = Brand.find(params[:id])
        end
        
        def brand_params 
            params.require(:brand).permit(:title, :meta_info, :urlimage).select {|x,v| v.present?}
        end

        def brand_second_params 
            params.require(:brand).permit(:title, :meta_info)
        end

end