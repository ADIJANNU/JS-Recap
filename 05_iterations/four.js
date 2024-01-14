// FILTER

const coding = ["java", "python", "cpp", "js", "rust"];

// const values = coding.forEach( (items) => {
//     // console.log(items);
//     return items
// })

// console.log(values); // returns undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//         return num > 5
// } )
// console.log(newNums);

//  Using ForEach

// const newNums = []

// myNums.forEach((num)=> {
//         if(num >= 4) {
//             newNums.push(num)
//         }
// })

// console.log(newNums);

const fabFive = [
  {
    name: "Virat Kohli",
    country: "India",
    hundreds: 79,
    avg: 50.0,
  },
  {
    name: "Steve Smith",
    country: "Aussie",
    hundreds: 41,
    avg: 49.6,
  },
  {
    name: "Joe Root",
    country: "England",
    hundreds: 40,
    avg: 48.22,
  },
  {
    name: "Kane W",
    country: "Kiwis",
    hundreds: 35,
    avg: 49.65,
  },
  {
    name: "Babar Azam",
    country: "Pakistan",
    hundreds: 19,
    avg: 47.64,
  },
];

let Stats = fabFive.filter((fab) => fab.avg >= 49);

Stats = fabFive.filter((fab) => {
  return fab.country === "India";
});

// console.log(Stats);

//  MAPS

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map ((num) =>  num + 10)
// console.log(newNums);

// CHAINING

// const newNums = myNumbers
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter((num) => num >= 40)

//     console.log(newNums)

