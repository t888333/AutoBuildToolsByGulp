module.exports.run = (mGulp, mData) => { 
    mGulp.task(mData.name, () => {
        console.log('\nbase\n');  
    }); 
}