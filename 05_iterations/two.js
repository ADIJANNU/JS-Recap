//  for of

const greetings = "Hello"

for (const greet of greetings) {
    //console.log(`Each character is ${greet}`);
}

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

// MAPS

const map = new Map()
map.set('IN',"India")
map.set("UK", "United Kingdom")
map.set("FR","France")
// console.log(map);

for (const [key,value] of map) {   //Iteration of maps
    console.log(key,": " ,value);
}

