class GamesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
  end

  def create
    sleep 2
    user_choise = params[:user_choise]
    arr = ['paper', 'rock', 'scissors']
    puts user_choise
    arr.reject! { |i| i == user_choise.downcase }
    render json: { choise: arr.sample }
  end
end
