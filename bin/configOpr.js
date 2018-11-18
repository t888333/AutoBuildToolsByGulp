//设置配置
let fs = require('fs');
let autoPath = '../config.json';

let set = (key, value, to, from) => {

    let config = require(from || autoPath);
    config['' + key] = value;
    fs.writeFileSync(to || autoPath, JSON.stringify(config));
}

let get = (key, from) => {

    let config = require(from || autoPath);
    return config[key];
}

module.exports = {
    set: set,
    get: get
};