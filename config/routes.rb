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
    get '/admin/category' => "home#category"
    get '/admin/product' => "home#product"
  end
end
