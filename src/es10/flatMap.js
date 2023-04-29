//Flat
const arr = [1,2,56,[3,6,2,[2,56,3]]]
console.log(arr.flat(3))

//flat map
const arr2 = [1,4,7,8,3,6,3]
console.log(arr2.flatMap(value => [value, value*2]));