const gulp = require('./node_modules/gulp');
// const git = require('./node_modules/gulp-git');
// const gitIf = require('./node_modules/gulp-if'); 
const replace = require('./node_modules/gulp-replace');

/**
 * 目录结构
 * base 
 * |
 * |___client （客户端文件夹）
 * |
 * |___project（最终出货文件夹）
 * |
 * |___backup  （备用文件夹） 
 *  */

//将文件放在这个目录
let basePath = 'C:\\Users\\t888333\\Desktop\\gulp\\';
let clientPath = basePath + 'client\\';
let projectPath = basePath + 'project\\';
let backupPath = basePath + 'backup\\';
let cl = [];


/**
 * 
 * 1.复制文件夹
 * 
 * a.bin文件夹
 * b.src文件夹
 * 
 *  */

let actionName = 'copyBin';
cl.push('copyBin');
let copyData = { fromPath: (clientPath + 'bin\\'), toPath: backupPath };
let data = { name: actionName, data: copyData };
require('./bin/copy').run(gulp, data);

actionName = 'copyScr';
let copyScrData = { fromPath: (clientPath + 'src\\'), toPath: (backupPath + 'js\\') };
cl.push(actionName);
require('./bin/copy').run(gulp, { name: actionName, data: copyScrData });


/**
 * 修改文件
 */


//修改文件start      GameInit.js  C:\JQL\client\src\utilities\GameInit.js
actionName = 'fileOpr';
let gameinitPath = backupPath + 'js\\utilities\\';
let gameiniFile = 'GameInit.js';
let fromData = 'Laya.URL.basePath';
let toData = 'Laya.URL.basePath = \"http://192.168.0.191:www\";///'
cl.push(actionName);
let fileOprData = {
    name: actionName,
    data: {
        replace: replace,
        fromData: fromData,
        toData: toData,
        Path: gameinitPath,
        fileName: gameiniFile
    }
}
require('./bin/' + actionName).run(gulp, 'copyBin',fileOprData);


/**
 * 修改android文件 
 * C:\Users\t888333\Desktop\gulp\client\src\updater\Version.js
 */
// actionName = 'versionOpr';
// let versionPath = backupPath + 'src\\updater\\';
// let versionFile = 'Version.js';
// fromData = 'this._platform = utils.platform.TEST;';
// toData = '//this._platform = utils.platform.TEST; \n this._platform = utils.platform.ANDROID;";///'
// cl.push(actionName);
// let versionData = {
//     name: actionName,
//     data: {
//         replace: replace,
//         fromData: fromData,
//         toData: toData,
//         Path: versionPath,
//         fileName: versionFile
//     }
// }
// require('./bin/' + actionName).run(gulp, versionData);


// /**
//  * @param replace 管道代替文件插件
//  * @param Path 文件目录
//  * @param name 文件名称
//  */
// task.run(gulp, { name: 'fileOpr', data: { replace: replace, Path: gameinitPath, name: gameiniFile, url: gameUrl } });
// //修改文件end


gulp.task("run", cl);