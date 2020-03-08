module.exports = function transform(arr) {
    if(!Array.isArray(arr)) {
        throw Error;
    }
    if (arr.length === 0) {
        return [];
    }

    const result = arr;

    const controlSequence = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

    for(const value of arr) {
        let controlSw = '';
        let indexControl = '';
        
        switch (value) {
            case '--discard-next': 
                // console.log('--discard-next');
                controlSw = '--discard-next';
                indexControl = arr.indexOf(controlSw);
                result.splice(indexControl, indexControl + 1);
                // console.log(indexControl);
                continue;
            case '--discard-prev':
                console.log('--discard-prev');
                controlSw = '--discard-prev';
                indexControl = arr.indexOf(controlSw);
                result = arr.splice(indexControl, indexControl - 1);
                // console.log(indexControl);
                continue;
            case '--double-next':
               // console.log('--double-next')
                controlSw = '--double-next';
                indexControl = arr.indexOf(controlSw)
                result[indexControl] = result[indexControl + 1];
                // console.log(indexControl)
                continue;
            case '--double-prev':
               // console.log('--double-prev')
                controlSw = '--double-prev';
                result[indexControl] = result[indexControl - 1];
                indexControl = arr.indexOf(controlSw)
                // console.log(indexControl)
                continue;
            default:
                continue;
        }
    }
    
    const resultNum = [];
    for(const value of result) {
        // const isNum = ``;
        if(controlSequence.includes(value)) {
            
        }else { resultNum.push(value); }

    }

    return result;
};
