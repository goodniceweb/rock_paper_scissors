require 'rails_helper'

describe GameUtils do
  describe "STATUSES" do
    subject(:statuses_const) { described_class::STATUSES }

    it "has won status" do
      expect(statuses_const.won).to eq('won')
    end

    it "has lost status" do
      expect(statuses_const.lost).to eq('lost')
    end

    it "has tie status" do
      expect(statuses_const.tie).to eq('tie')
    end

    it "can't be changed" do
      expect { statuses_const.pending = 'pending' }.to raise_error(FrozenError)
    end
  end
end
