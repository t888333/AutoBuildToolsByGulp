exports.run = (mGulp, mData) => {
    mGulp.task(mData.name, () => {
        console.log('\nvs\n');
    });
}