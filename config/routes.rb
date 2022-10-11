Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "guest#welcome"

  # Guest url
  get "/about" => "guest#about"
  get "/product" => "guest#product"
  get "/login" => "guest#login", as: :signin
  get "/register" => "guest#register", as: :signup
  get "/unauthorize" => "guest#unauthorize", as: :unauthorized

  scope module: 'admin' do 
    get '/admin/home' => "home#home_admin", as: :admin_home

    # url for category admin
    get '/admin/category' => "categories#index", as: :categories
    post '/admin/category/store' => "categories#create"
    post '/admin/category/update/:id' => "categories#update"
    delete '/admin/category/delete/:id' => "categories#destroy"

    # url for brand admin
    get '/admin/brand' => "brands#index", as: :brands
    post '/admin/brand/store' => "brands#create"
    post '/admin/brand/update/:id' => "brands#update"
    delete '/admin/brand/delete/:id' => "brands#destroy"

    get '/admin/product' => "home#product"
  end
end
