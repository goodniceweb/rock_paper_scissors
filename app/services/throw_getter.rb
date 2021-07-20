class ThrowGetter < BaseService
  def initialize(api_service: ThrowFetcher, validator: ThrowValidator)
    @api_service = api_service
    @validator = validator
  end

  def call
    api_result = api_service.call
    return api_result if validator.valid?(api_result)

    generate_fallback_result
  end

  private

  attr_reader :api_service, :validator

  def generate_fallback_result
    GameUtils::ALLOWED_NAMES.sample
  end
end
