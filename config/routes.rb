Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :user do
      resources :days
    end

    resources :days do
      resources :moods do
        resources :attributes
      end
    end
  end
end
