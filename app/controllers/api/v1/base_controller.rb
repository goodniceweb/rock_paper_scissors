module Api
  module V1
    class BaseController < ::ApplicationController
      skip_before_action :verify_authenticity_token, only: [:create]
    end
  end
end

