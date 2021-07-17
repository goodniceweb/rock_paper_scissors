require 'rails_helper'

describe ThrowDecorator do
  describe "#name" do
    subject(:name) { ThrowDecorator.new('rock').name }

    it "list those it beats" do
      is_expected.to eq('rock')
    end
  end

  describe "#beats" do
    subject(:beats) { ThrowDecorator.new('rock').beats }

    it "list those it beats" do
      is_expected.to match_array(['scissors'])
    end
  end

  describe "#beats?" do
    context "when use scissors to compare" do
      let(:scissors) { ThrowDecorator.new('scissors') }
      subject(:beats?) { ThrowDecorator.new('rock').beats?(scissors) }

      it "return true" do
        is_expected.to be(true)
      end
    end

    context "when use paper to compare" do
      let(:paper) { ThrowDecorator.new('paper') }
      subject(:beats?) { ThrowDecorator.new('rock').beats?(paper) }

      it "return false" do
        is_expected.to be(false)
      end
    end

    context "when use rock to compare" do
      let(:rock) { ThrowDecorator.new('rock') }
      subject(:beats?) { ThrowDecorator.new('rock').beats?(rock) }

      it "return false" do
        is_expected.to be(false)
      end
    end
  end

  describe "#compare" do
    context "when use scissors to compare" do
      let(:scissors) { ThrowDecorator.new('scissors') }
      subject(:compare) { ThrowDecorator.new('rock').compare(scissors) }

      it "return win" do
        is_expected.to eq('win')
      end
    end

    context "when use paper to compare" do
      let(:paper) { ThrowDecorator.new('paper') }
      subject(:compare) { ThrowDecorator.new('rock').compare(paper) }

      it "return lost" do
        is_expected.to eq('lost')
      end
    end

    context "when use rock to compare" do
      let(:rock) { ThrowDecorator.new('rock') }
      subject(:compare) { ThrowDecorator.new('rock').compare(rock) }

      it "return tie" do
        is_expected.to eq('tie')
      end
    end
  end
end
