module.exports.run = (mGulp, mData) => {

    console.log(
        '\nmData.fromPath   : ', mData.data.fromPath,
        '\ntoPath           : ', mData.data.toPath,
        '\nname             : ', mData.name,
        '\nberforce         : ', mData.data.berforce);

    mGulp.task(mData.name, [mData.data.berforce], () => {

        console.log('\ncopy\n' + mData.name);

        return mGulp
            .src(mData.data.fromPath + '**\\*')
            .pipe(mGulp.dest(mData.data.toPath));


    });
}