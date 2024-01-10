// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromGithub = true

// if(userLoggedIn && debitCard && 2==2) {
//     console.log("Allow to Buy");
// }

// if (loggedInFromGoogle || loggedInFromGithub ) {
//     console.log("User Logged In");
// }


// // const month = 3

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;
//     case 5:
//         console.log("May");
//         break;

//     default:
//         console.log("Hola");
//         break;
// }


// // Truthy and Falsy 

// // FALSY values: 
// // false, 0, -0, BigInt 0n, "", null, undefined, NaN

// // Truthy:
// // "0", 'false', " ", [], {}, function(){}, 


// // Check Empty Objects

// const newObj = {}

// if(Object.keys(newObj) == 0) {
//     console.log("Object is Empty");
// }


// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 2
val1 = undefined ?? 10
console.log(val1);


// Terniary Operator
// Condition ? true : false 

const iceTeaPrice = 120

iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");