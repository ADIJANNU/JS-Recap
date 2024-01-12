for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);

}

console.log(element);

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myArray = ['Batman','Superman','Flash']
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//BREAK -> terminates the loop 

//CONTINUE -> skips that particular specified line and prints other lines

// WHILE and DoWhile

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}


let  score = 11
do {
    console.log(`${score}`);
    score++
} while (score <= 10);