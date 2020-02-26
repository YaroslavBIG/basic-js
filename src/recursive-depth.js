module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let result = 1;
        for (const x of arr) {
           const isArr = Array.isArray(x) ? true : false;
            switch(isArr) {
                case(false):
                continue;
            
                case(true):    
                result += 1;
                for (const flat of arr) {
                    if (Array.isArray(flat)) {
                        result += 1;
                        calculateDepth(flat);
                }
            }
            }
        }
            return result;
    }
        
        
        
    
};