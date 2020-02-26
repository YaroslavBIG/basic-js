module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  if (members.length === 0) {
    throw Error;
  }
  const sortedArr = members.sort()
  let result = '';
  for(const value of sortedArr) {
    if (typeof value === 'string') {
      let noSpase = value.split(' ').join('');
      result += noSpase[0];
      }
      else {
        continue;
      } 
    }
    return result.toUpperCase().split('').sort().join('');
};