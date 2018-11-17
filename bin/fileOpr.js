
exports.run = (mGulp, mData) => {
    mGulp.task(mData.name, () => {
        console.log(
            '\nname         : ', mData.name,
            '\nmData.Path   : ', mData.data.Path,
            '\nfromData     : ', mData.data.fromData,
            '\ntoData       : ', mData.data.toData,
            '\nfileName     : ', mData.data.fileName,
            '\nfile         : ', mData.data.Path + mData.data.fileName);
        mGulp.src([mData.data.Path + mData.data.fileName])
            //修改文件    
            .pipe(mData.data.replace(mData.data.fromData, mData.data.toData))
            //保存文件   
            .pipe(mGulp.dest(mData.data.Path));

        console.log('\nfileOpr :', mData.data.Path, mData.data.fileName);
    });
}