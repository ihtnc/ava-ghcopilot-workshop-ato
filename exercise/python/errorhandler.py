import json

def read_config(file_path):
    with open(file_path, 'r') as file:
        config = json.load(file)
    return config

# Assume we have a config.json file with proper JSON structure
config_file_path = 'configs.json' # correct filename is config.json
configurations = read_config(config_file_path)
print(configurations)
