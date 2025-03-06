const array = [1, 2, 3, 4, 5, [1, 2, 3, [2, 5]]];
// console.log(array);
// console.log(array.flat(2));

// flatMap

const array2 = [1, 2, 3, 4];
console.log(array2.flatMap(value => [value, value*2]));