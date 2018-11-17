module.exports.run = (mGulp, mData) => {
    console.log(
        '\nmData.fromPath   : ', mData.data.fromPath,
        '\ntoPath           : ', mData.data.toPath,
        '\nname             : ', mData.name);
    mGulp.task(mData.name, () => {
        console.log('\nvs\n');
        return mGulp
            .src(mData.data.fromPath + '**\\*')
            .pipe(mGulp.dest(mData.data.toPath));
    });
}