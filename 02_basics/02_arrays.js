const dc_heros = ["superman","batman","flash"]
const marvel_heros = ["spidey","ironman","thor"]


marvel_heros.push(dc_heros)
console.log(marvel_heros[3][1]);

//  CONCAT

const heros =  marvel_heros.concat(dc_heros)
console.log(heros);

// SPREAD 

const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);

//  FLAT  

const arr3 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = arr3.flat(Infinity) // converts into single array
console.log(real_array);


console.log(Array.isArray("varun"))
console.log(Array.from("varun")) // converts to an array 
console.log(Array.from({name: "mumbai"})) // important 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // converts to an array 