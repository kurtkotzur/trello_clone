TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit] do
      resources :lists, only: [:index]
      resources :board_memberships, only: [:index]
    end
    
    resources :lists, only: [:create, :update, :destroy, :show] do
      resources :cards, only: [:create]
    end
      
    resources :cards, only: [:update, :destroy]

    # resources :items
    resources :board_memberships, only: [:create, :destroy, :show]
    # resources :card_assignments
  end
end
