class GuestController < ApplicationController 

    def welcome
        render inertia: 'Welcome'
    end 

    def about
        render inertia: 'About'
    end

    def product 
        render inertia: 'Product'
    end

    def login
        render inertia: "Login"
    end 

    def register
        render inertia: "Register"
    end

    def unauthorize
        render inertia: "Unauthorized"
    end
    

end