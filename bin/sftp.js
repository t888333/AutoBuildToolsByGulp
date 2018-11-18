
module.exports.run = (mGulp, mData) => {

    console.log(
        '\nmData.name       : ', mData.name,
        '\nberforce         : ', mData.data.berforce,
        '\nsftp             : ', mData.data.sftp,
        '\nsftpData         : ', mData.data.sftpData);

    mGulp.task(mData.name, [mData.data.berforce], function () {

        console.log('\nsftp\n');

        return mGulp.src('/*')
            .pipe(mData.data.sftp(mData.data.sftpData));
    });

}


// module.exports = {
//     devTest: { //部署到测试服务器上
//         remotePath: '/root/app/', //部署到服务器的路径
//         host: 'xx.xxx.xxx.xx', //ip地址
//         user: 'root', //帐号
//         pass: "******", //密码
//         port: 22 //端口
//     },
//     devDist: { //部署正式服务器上
//         remotePath: '/root/app/', //部署到服务器的路径
//         host: 'xx.xx.xxx.xxx', //ip地址
//         user: 'root', //帐号
//         pass: '******', //密码
//         port: 22 //端口
//     },
//     publicPath: '/dist/' //程序编译好路径
// }

// mData.data.sftpData =
//     {
//         host: 'XXXXXX',
//         user: 'user',
//         pass: 'passsword',
//         remotePath: "pathtodeploy"
//     }