const arr1 = [1,2,3,4,7,5]
console.log(arr1[3]);
console.log(arr1);

arr1.push(1)
arr1.pop()
arr1.unshift(9)

console.log(arr1);

// SLICE and SPLICE

console.log('A', arr1);

const my1 = arr1.slice(1,3) // Slice  doesnt manipulate original array
console.log(my1);
console.log('B',arr1);

const my2 = arr1.splice(1,3)
console.log(my2);
console.log('C',arr1); // Splice manipulates original array