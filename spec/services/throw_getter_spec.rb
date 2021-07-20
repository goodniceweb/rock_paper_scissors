require 'rails_helper'

describe ThrowGetter do
  describe ".call" do
    subject(:service_call) { described_class.call(api_service: fetcher) }

    context "when api returns what we can process" do
      let(:api_result) { 'paper'.freeze }
      let(:fetcher) { double("TestFetcher", call: api_result) }

      it "returns api response" do
        is_expected.to equal(api_result)
      end
    end

    context "when api returns what we can not process" do
      let(:fetcher) { double("TestFetcher", call: 'hummer') }

      it "returns fallback response" do
        is_expected.not_to eq('hummer')
        is_expected.to satisfy { |v| GameUtils::ALLOWED_NAMES.include?(v) }
      end
    end
  end
end
