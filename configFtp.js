module.exports = {
    devTest: { //部署到测试服务器上
        remotePath: '/root/app/', //部署到服务器的路径
        host: 'xx.xxx.xxx.xx', //ip地址
        user: 'root', //帐号
        pass: "******", //密码
        port: 22 //端口
    },
    devDist: { //部署正式服务器上
        remotePath: '/root/app/', //部署到服务器的路径
        host: 'xx.xx.xxx.xxx', //ip地址
        user: 'root', //帐号
        pass: '******', //密码
        port: 22 //端口
    },
    publicPath: '/dist/' //程序编译好路径
}