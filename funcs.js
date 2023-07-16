function isFive(num) {
  // Your code here
  return num == 5;
}

function isOdd(number) {
  // Your code here
  if (!(typeof number === 'number')) {
    throw new Error('Unsupported data');
  }
  return number % 2 === 1 || number % 2 === -1;
}

function myRange(min, max, step = 1) {
  // Your code here
  const newArr = [];
  for (; min <= max; min += step) {
    newArr.push(min);
  }
  return newArr;
}

module.exports = { isFive, isOdd, myRange };
