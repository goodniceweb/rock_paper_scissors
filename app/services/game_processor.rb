class GameProcessor < BaseService
  def initialize(user_choise:, throw_service: ThrowGetter, decorator: ThrowDecorator, validator: ThrowValidator)
    @user_choise = user_choise
    @throw_service = throw_service
    @decorator = decorator
    @validator = validator
  end

  def call
    return error_result unless validator.valid?(user_choise)

    user_throw = decorator.new(user_choise)
    opponent_throw = decorator.new(throw_service.call)

    OpenStruct.new(
      success: true,
      json: {
        result: user_throw.compare(opponent_throw),
        choise: opponent_throw.name
      }
    )
  end

  private

  attr_reader :user_choise, :throw_service, :decorator, :validator

  def error_result
    OpenStruct.new(
      success: false,
      message: "Your input is invalid",
      json: {
        result: "error"
      }
    )
  end
end
