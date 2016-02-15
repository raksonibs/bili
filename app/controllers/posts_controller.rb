class PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def music
    render json: Post.where(type: 'Music')
  end

  def books
    render json: Post.where(type: 'Book')
  end

  def articles
    render json: Post.where(type: 'Article')
  end
end
