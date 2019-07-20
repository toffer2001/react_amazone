Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  root 'api/departments#index'
  namespace :api do
    resources :users
    resources :departments do
      resources :products
    end
    resources :products do
      resources :reviews
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
end
