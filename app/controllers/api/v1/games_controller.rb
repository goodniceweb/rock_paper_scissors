module Api
  module V1
    class GamesController < ::Api::V1::BaseController
      def create
        sleep 2
        user_choise = params[:user_choise]
        arr = ['paper', 'rock', 'scissors']
        puts user_choise
        arr.reject! { |i| i == user_choise.downcase }
        render json: { choise: arr.sample }
      end
    end
  end
end
