Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :messages, only: [:index]
    resources :channels, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    get 'state' => 'state#index'
  end

  get '/', to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
end
