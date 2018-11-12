//设置配置
exports.get = (key) => {
    let fs = require('fs');
    let filename = '../config.json';
    let config = require(filename);
    return config[key];
    // fs.writeFileSync(filename, JSON.stringify(config));
}