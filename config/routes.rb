Rails.application.routes.draw do
  root to: 'games#index'
  resources :games, only: %i[index]

  namespace :api do
    namespace :v1 do
      resource :game, only: %i[create]
    end
  end
end
