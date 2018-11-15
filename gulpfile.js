const gulp = require('./node_modules/gulp');

let fromPath = 'C:\\Users\\t888333\\Desktop\\NodeBase\\res\\atlas\\hall\\2_lobby\\**.*';
let toPath = 'C:\\Users\\t888333\\Desktop\\HTML';
let coptData = { fromPath: fromPath, toPath: toPath };

var action = [
    { name: 'base', },
    { name: 'vs', },
    { name: 'copy', data: coptData },
];//command List 命令list

let cl = [];

for (let i = 0; i < action.length; i++) {
    cl.push(action[i].name);
    let task = require('./bin/' + action[i].name);
    task.run(gulp, action[i]);
}

gulp.task("run", cl);