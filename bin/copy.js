exports.run = (mGulp, mData) => {
    mGulp.task(mData.name, () => {
        console.log('\nvs\n');
        return mGulp
            .src(mData.data.fromPath)
            .pipe(mGulp.dest(mData.data.toPath));
    });
}