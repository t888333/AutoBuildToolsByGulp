const gulp = require('./node_modules/gulp');
// const git = require('./node_modules/gulp-git');
// const gitIf = require('./node_modules/gulp-if'); 
const replace = require('./node_modules/gulp-replace');


let actionName = 'base';
let data = { name: actionName };
require('./bin/base').run(gulp, data);

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


/**
 * 
 * 1.复制文件夹
 * 
 * a.bin文件夹
 * b.src文件夹
 * 
 *  */


let runData = { fromPath: (clientPath + 'bin\\'), toPath: backupPath, berforce: actionName };
actionName = 'copyBin';
require('./bin/copy').run(gulp, { name: actionName, data: runData, });


runData = { fromPath: (clientPath + 'src\\'), toPath: (backupPath + 'js\\'), berforce: actionName };
actionName = 'copyScr';
require('./bin/copy').run(gulp, { name: actionName, data: runData });


/**
 * 修改文件
 */


//修改文件start      GameInit.js  C:\JQL\client\src\utilities\GameInit.js

let gameinitPath = backupPath + 'js\\utilities\\';
let gameiniFile = 'GameInit.js';
let fromData = 'Laya.URL.basePath';
let toData = 'Laya.URL.basePath = \"http://192.168.0.191:ddddddd\";///';
runData = {
    replace: replace,
    fromData: fromData,
    toData: toData,
    Path: gameinitPath,
    fileName: gameiniFile,
    berforce: actionName
}
actionName = 'fileOpr';
require('./bin/' + actionName).run(gulp, { name: actionName, data: runData });


/**
 * 修改android文件 
 * C:\Users\t888333\Desktop\gulp\client\src\updater\Version.js
 */

// let versionPath = backupPath + 'src\\updater\\';
// let versionFile = 'Version.js';
// fromData = 'this._platform = utils.platform.TEST;';
// toData = '//this._platform = utils.platform.TEST; \n this._platform = utils.platform.ANDROID;";///';

// runData = {
//     replace: replace,
//     fromData: fromData,
//     toData: toData,
//     Path: versionPath,
//     fileName: actionName
// }

// actionName = 'versionOpr';
// require('./bin/' + actionName).run(gulp, { name: actionName, data: runData });

// /**
//  * @param replace 管道代替文件插件
//  * @param Path 文件目录
//  * @param name 文件名称
//  */
// task.run(gulp, { name: 'fileOpr', data: { replace: replace, Path: gameinitPath, name: gameiniFile, url: gameUrl } });
// //修改文件end


// gulp.task("run", cl);actionName
gulp.task("run", [actionName]);