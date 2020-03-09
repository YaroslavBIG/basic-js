module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1, arrCount = []) {
        let result = 1;
        arrCount.push(count);
        for (const x of arr) {
           const isArr = Array.isArray(x) ? true : false;
            switch(isArr) {
                case(false):
                continue;
            
                case(true):
                for (const flat of arr) {
                    if (Array.isArray(flat)) {
                        result += 1;
                        this.calculateDepth(flat, count += 1, arrCount)
                }
            }
            }
        }
            // console.log(count)
            const res = arrCount.sort();
            const arrLen = res.length - 1;
            // console.log('arrCount[arrLen]', arrCount[arrLen])
           // console.log(res)
            return res.length === 0 ? result : arrCount[arrLen];
    }
        
        
        
    
};