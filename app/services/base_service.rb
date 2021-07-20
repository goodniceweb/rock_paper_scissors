class BaseService
  class << self
    def call(options = {})
      new(options).call
    end
  end
end
