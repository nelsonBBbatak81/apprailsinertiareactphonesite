class Admin::HomeController < AdminController 
   
    def home_admin 
        render inertia: 'Admin/Home'
    end 

    def category
        render inertia: 'Admin/Category'
    end 

    def product 
        render inertia: 'Admin/Product'
    end

end