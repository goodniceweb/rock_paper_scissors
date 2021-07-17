class ThrowDecorator
  CONFIG = YAML.load_file(Rails.root.join('config/game_options.yml'))

  attr_reader :name, :beats

  def initialize(name)
    @name = name
    @beats = find_option(name).try(:[], 'beats')
  end

  def beats?(other)
    beats.include?(other.name)
  end

  def compare(other)
    return 'win' if beats?(other)
    return 'lost' if other.beats?(self)
    'tie'
  end

  private

  def find_option(option)
    CONFIG.find { |config_item| config_item['name'] == option }
  end
end
