
//设置配置
let fs = require('fs');
// let autoPath = '../config.json';
// let writePath = './config.json';

let set = (key, value, to ,from ) => {
     
    let config = require(from);
    config['' + key] = value;
    fs.writeFileSync(to, JSON.stringify(config)); 
}

let get = (key,form) => { 
    let config = require(form);
    return config[key];
}

module.exports = {
    set: set,
    get: get
};
