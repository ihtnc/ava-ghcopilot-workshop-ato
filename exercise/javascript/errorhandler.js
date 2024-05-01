const fs = require('fs');
const path = require('path');

function readConfig(filePath) {
    const rawContent = fs.readFileSync(path.resolve(__dirname, filePath));
    const config = JSON.parse(rawContent);
    return config;
}

// Assume we have a config.json file with proper JSON structure
const configFilePath = 'configs.json'; // correct filename is config.json
const configurations = readConfig(configFilePath);
console.log(configurations);