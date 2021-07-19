module GameUtils
  CONFIG_FILE_LOCATION = 'config/game_options.yml'
  CONFIG = YAML.load_file(Rails.root.join(CONFIG_FILE_LOCATION)).freeze
  ALLOWED_NAMES = GameUtils::CONFIG.map { |config| config['name']  }.freeze

  STATUSES = OpenStruct.new(
    won: 'won',
    lost: 'lost',
    tie: 'tie'
  ).freeze
end
