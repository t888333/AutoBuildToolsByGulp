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
let basePath = 'C:\\Users\\Administrator\\Desktop\\gulp\\';
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

let taskName = 'copyBin';
cl.push('copyBin');
let data = { name: taskName, data: { fromPath: (clientPath + 'bin\\'), toPath: backupPath } };
require('./bin/copy').run(gulp, data);

taskName = 'copyScr';
cl.push(taskName);
require('./bin/copy').run(gulp, { name: taskName, data: { fromPath: (clientPath + 'src\\'), toPath: (backupPath + 'js\\') } });


/**
 * 修改文件
 */


// //修改文件start      GameInit.js  C:\JQL\client\src\utilities\GameInit.js
// let actionName = 'fileOpr';
// let gameinitPath = toPath + '\\'
// let gameiniFile = 'GameInit.js'
// let gameUrl = 'Laya.URL.basePath = \"http://192.168.0.191:pppp\";///'
// cl.push(actionName);
// let task = require('./bin/' + actionName);


// /**
//  * @param replace 管道代替文件插件
//  * @param Path 文件目录
//  * @param name 文件名称
//  */
// task.run(gulp, { name: 'fileOpr', data: { replace: replace, Path: gameinitPath, name: gameiniFile, url: gameUrl } });
// //修改文件end


gulp.task("run", cl);