module.exports = function countCats(matrix) {
    let counter = 0;
    for (count = 0; count < matrix.length; count += 1) {
      const subArr = matrix[count]
      for (count2 = 0; count2 < subArr.length; count2 += 1) {
        const cats = '^^';
        subArr[count2] === cats ? counter += 1 : counter += 0
      }
    };
  return counter;
};
