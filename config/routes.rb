Rails.application.routes.draw do
  
  resources :posts do 
    collection do 
      get '/music' => 'posts#music'
      get '/books' => 'posts#books'
      get '/articles' => 'posts#articles'
    end
  end

  get 'home/index'
  root 'home#index'
end
