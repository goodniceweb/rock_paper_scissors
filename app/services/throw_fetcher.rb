class ThrowFetcher < BaseService
  API_ENDPOINT = 'https://5eddt4q9dk.execute-api.us-east-1.amazonaws.com/rps-stage/throw'

  def initialize(http_client: RestClient)
    @http_client = http_client
  end

  def call
    response = parse_response(send_request)
    result(response) if success?(response)
  end

  private

  attr_reader :http_client

  def success?(response)
    response.dig('statusCode') == 200
  end

  def result(response)
    response.dig('body')&.gsub('"', '')
  end

  def parse_response(response)
    JSON.parse(response)
  end

  def send_request
    http_client.get(API_ENDPOINT).body
  end
end
