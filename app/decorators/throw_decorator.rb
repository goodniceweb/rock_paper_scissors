class ThrowDecorator
  attr_reader :name, :beats

  def initialize(name)
    @name = name
    @beats = find_option(name).try(:[], 'beats')
  end

  def beats?(other)
    beats.include?(other.name)
  end

  def compare(other)
    return GameUtils::STATUSES.won if beats?(other)
    return GameUtils::STATUSES.lost if other.beats?(self)

    GameUtils::STATUSES.tie
  end

  private

  def find_option(option)
    GameUtils::CONFIG.find { |config_item| config_item['name'] == option }
  end
end
