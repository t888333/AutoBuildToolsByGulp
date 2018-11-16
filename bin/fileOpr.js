
exports.run = (mGulp, mData) => {
    mGulp.task(mData.name, () => {
        
        mGulp.src([mData.data.Path+mData.data.name])
        //修改文件    
        .pipe(mData.data.replace(/Laya.URL.basePath/g,mData.data.url))
        //保存文件   
        .pipe(mGulp.dest(mData.data.Path));

        console.log('\nfileOpr\n',mData.data.Path,mData.data.name, );
    });
}