require 'rails_helper'

describe ThrowFetcher do
  describe ".call" do
    context "when api works well" do
      let(:rest_client) { double("TestRestClient") }

      subject(:service_call) { described_class.call(http_client: rest_client) }

      context "when api returns what we can process" do
        let(:response) { double("DummyResponse", body: '{"statusCode":200,"body":"\"rock\""}') }

        before do
          allow(rest_client).to receive(:get).with(described_class::API_ENDPOINT).and_return(response)
        end

        it "returns api response" do
          is_expected.to eq('rock')
        end
      end
    end

    context "when api works bad" do
      let(:rest_client) { double("TestRestClient") }
      let(:response) do
        double(
          "DummyResponse",
          body: '{"statusCode":500,"body":"Something went wrong. Please try again later."}'
        )
      end

      subject(:service_call) { described_class.call(http_client: rest_client) }

      before do
        allow(rest_client).to receive(:get).with(described_class::API_ENDPOINT).and_return(response)
      end

      it "returns nil" do
        is_expected.to be(nil)
      end
    end

    context "when api fails with time-out" do
      let(:rest_client) { double("TestRestClient") }
      let(:response) do
        double(
          "DummyResponse",
          body: '{"errorMessage":"2021-07-18T12:31:56.314Z 6c82942e-0181-47ca-8779-6e5a8aab2ecf Task timed out after 3.00 seconds"}'
        )
      end

      subject(:service_call) { described_class.call(http_client: rest_client) }

      before do
        allow(rest_client).to receive(:get).with(described_class::API_ENDPOINT).and_return(response)
      end

      it "returns nil" do
        is_expected.to be(nil)
      end
    end
  end
end
