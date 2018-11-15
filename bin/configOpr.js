
//设置配置
let fs = require('fs');
let autoPath = '../config.json';
let writePath = './config.json';

let set = (key, value) => {
    let config = require(autoPath);
    config['' + key] = value;
    fs.writeFileSync(writePath, JSON.stringify(config)); 
}

let get = (key) => {
    let config = require(autoPath);
    return config[key];
}

module.exports = {
    set: set,
    get: get
};
