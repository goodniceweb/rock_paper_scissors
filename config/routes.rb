Rails.application.routes.draw do
  root to: 'games#index'
  resources :games, only: %i[index new create]
end
