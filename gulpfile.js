const gulp = require('./node_modules/gulp');
// const git = require('./node_modules/gulp-git');
// const gitIf = require('./node_modules/gulp-if'); 
const replace = require('./node_modules/gulp-replace');


let action = 'base';
let data = { name: action };
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


let runData = { fromPath: (clientPath + 'bin\\'), toPath: backupPath, berforce: action };
action = 'copyBin';
require('./bin/copy').run(gulp, { name: action, data: runData, });


runData = { fromPath: (clientPath + 'src\\'), toPath: (backupPath + 'js\\'), berforce: action };
action = 'copyScr';
require('./bin/copy').run(gulp, { name: action, data: runData });


/**
 * 修改文件   
 * C:\JQL\client\src\utilities\GameInit.js
 */
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
    berforce: action
};
action = 'fileOpr';
require('./bin/' + action).run(gulp, { name: action, data: runData });


/**
 * 修改android文件 
 * C:\Users\t888333\Desktop\gulp\client\src\updater\Version.js
 */
let versionPath = backupPath + 'js\\updater\\';
let versionFile = 'Version.js';
fromData = 'this._initScripts = [];';
toData = 'this._platform = utils.platform.ANDROID;\n        this._initScripts = [];';
runData = {
    replace: replace,
    berforce: action,
    fromData: fromData,
    toData: toData,
    Path: versionPath,
    fileName: versionFile,
};
action = 'versionOpr';
require('./bin/fileOpr').run(gulp, { name: action, data: runData });


/**
 * 修改log方式  
 * C:\Users\t888333\Desktop\gulp\client\src\updater\Version.js
 */
versionPath = backupPath + 'js\\updater\\';
versionFile = 'Version.js';
fromData = 'utils.console_log';
toData = 'utils.console_log = 0;///';
runData = {
    replace: replace,
    berforce: action,
    fromData: fromData,
    toData: toData,
    Path: versionPath,
    fileName: versionFile,
};
action = 'versionLogOpr';
require('./bin/fileOpr').run(gulp, { name: action, data: runData });


// /**
//  * @param replace 管道代替文件插件
//  * @param Path 文件目录
//  * @param name 文件名称
//  */
// task.run(gulp, { name: 'fileOpr', data: { replace: replace, Path: gameinitPath, name: gameiniFile, url: gameUrl } });
// //修改文件end


// gulp.task("run", cl);action
gulp.task("run", [action]);