/* 
Next Nearest Greatest numberGiven an array of numbers and an index, fin dthe nearest greater number and the distance between the given index and the index where the value was found

** example:

array [3,4,6,3,2,4,8]
index 2

result
return a tuple
array [8, 4]
*/

const exerciseArr = [100, 2, 3, 4, 3, 4, 6, 3, 2, 4, 8];

const incrementBy1 = (num, bool) => (bool ? num + 1 : num);

const findNearestGreatestNumb = (numbArr, idx) => {
  const currentNumber = numbArr[idx];
  const nearestGreatest = {
    value: 0,
    idx: 0,
    distance: numbArr.length,
  };

  numbArr.forEach((number, index) => {
    let shouldIncrement = false;

    if (!(index < idx)) shouldIncrement = true;

    // sorting
    const toBeSortedidx = [incrementBy1(index, shouldIncrement), idx];
    const sortedIndexes = toBeSortedidx.sort((a, b) => a - b);
    const distance = numbArr.slice(sortedIndexes[0], sortedIndexes[1]).length;

    if (number > currentNumber && distance < nearestGreatest.distance) {
      nearestGreatest.value = number;
      nearestGreatest.idx = index;
      nearestGreatest.distance = distance;
    }
  });

  return [nearestGreatest.value, nearestGreatest.distance];
};

console.log(findNearestGreatestNumb(exerciseArr, 2));
