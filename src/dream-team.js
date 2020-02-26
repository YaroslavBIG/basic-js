module.exports = function createDreamTeam(members) {
  if (members.length === 0) {
    throw Error;
  }
  const sortedArr = members.sort()
  let result = ''.toUpperCase();
  for(const value of sortedArr) {
    if (typeof value === String) {
       if (value[0] !== '') {
         result += value[0];
       } 
       else {
         for (let count = 0; count < value.length; count += 1) {
           if (value[count] !== '' && value[count -1] === '') {
             result += value[count];
             break;
           }
         }
       }
      }
      return result;
    }
    console.log(result);
};