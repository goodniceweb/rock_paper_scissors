class ThrowGetter
  API_ENDPOINT = 'https://5eddt4q9dk.execute-api.us-east-1.amazonaws.com/rps-stage/throw'

  class << self
    def call(options = {})
      new(options).call
    end
  end
  
  def initialize(_)
  end

  def call
  end
end
