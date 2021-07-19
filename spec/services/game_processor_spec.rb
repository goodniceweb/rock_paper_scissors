require 'rails_helper'

describe GameProcessor do
  describe ".call" do
    context "when user_choise is rock and program response is paper" do
      let(:throw_service) { double('TestThrowService', call: 'paper') }
      let(:user_decorator_instance) { double('TestThrowDecorator instance', name: 'rock') }
      let(:computed_decorator_instance) { double('TestThrowDecorator instance', name: 'paper') }
      let(:decorator_klass) { double('TestThrowDecorator') }

      subject(:processor) do
        described_class.call(
          user_choise: 'rock',
          throw_service: throw_service,
          decorator: decorator_klass
        )
      end

      before do
        allow(decorator_klass).to receive(:new).and_return(user_decorator_instance, computed_decorator_instance)
        allow(user_decorator_instance).to receive(:compare).with(computed_decorator_instance).and_return('won')
      end

      it "generates lost result" do
        expect(throw_service).to receive(:call)
        expect(user_decorator_instance).to receive(:compare).with(computed_decorator_instance)
        expect(processor.json).to include(:result, :choise)
      end
    end
  end
end
