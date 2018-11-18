
exports.run = (mGulp, mData) => {

    mGulp.task(mData.name, [mData.data.berforce],() => {

        console.log(
            '\nname         : ', mData.name,
            '\nmData.Path   : ', mData.data.Path,
            '\nfromData     : ', mData.data.fromData,
            '\ntoData       : ', mData.data.toData,
            '\nfileName     : ', mData.data.fileName,
            '\nfile         : ', mData.data.Path + mData.data.fileName);

        console.log('\nfileOpr :', mData.data.Path + mData.data.fileName);

        return mGulp.src([mData.data.Path + mData.data.fileName])
            //修改文件    
            .pipe(mData.data.replace(mData.data.fromData, mData.data.toData))
            //保存文件   
            .pipe(mGulp.dest(mData.data.Path));


    });
}