//设置配置
exports.set = (fs,key, value) => {
    // const fs = require('fs');
    let filename = '../config.json';
    let config = require(filename);
    config[''+key] = value;
    console.log(key, value);
    fs.writeFileSync(filename, JSON.stringify(config));
}