module ThrowValidator
  module_function

  def valid?(input)
    GameUtils::ALLOWED_NAMES.include?(input)
  end
end
