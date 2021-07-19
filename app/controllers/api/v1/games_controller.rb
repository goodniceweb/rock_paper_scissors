module Api
  module V1
    class GamesController < ::Api::V1::BaseController
      def create
        result = GameProcessor.call(user_choise: params[:user_choise].downcase)
        if result.success
          render json: result.json
        else
          render json: {}, status: :unprocessable_entity
        end
      end
    end
  end
end
