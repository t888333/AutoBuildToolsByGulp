// let filename = './config.json';
// let config = require(filename);
// config.cmsL = 'kdkdkd';
// fs.writeFileSync(filename, JSON.stringify(config));


const exec = require('child_process').exec;
exec('gulp run',
    function (error, stdout, stderr) {
        if (stdout)
            console.log(`stdout: ${stdout}`);
        if (stderr)
            console.log(`stderr: ${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
        console.log('Exec finshed');
    }); 
