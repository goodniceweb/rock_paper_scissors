class GameProcessor
  class << self
    def call(options = {})
      new(options).call
    end
  end

  def initialize(user_choise:, throw_service: ThrowGetter, decorator: ThrowDecorator)
    @decorator = decorator
    @user_choise = decorator.new(user_choise)
    @throw_result = decorator.new(throw_service.call)
  end

  def call
    {
      result: user_choise.compare(throw_result),
      choise: throw_result.name
    }
  end

  private

  attr_reader :decorator, :user_choise, :throw_result
end
