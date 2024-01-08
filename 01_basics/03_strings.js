const gameName = new String('Red dead')

console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,6)
console.log(newString); 

// const anotherString = gameName.slice(-7,4)
// console.log(anotherString);

const newStringg = "  honey-badger  "

console.log(newStringg.trim()); // trim also has both trimStart() and trimEnd()

console.log(newStringg.replace('d','a')); 

console.log(newStringg.includes('h'));

console.log(newStringg.split('-')); // returns array 

console.log(`${newStringg} + ${newString.charAt[0]}`);