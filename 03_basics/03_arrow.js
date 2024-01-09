const user = {
    username: "Jack",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} ,Welcome lad`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Dan"
user.welcomeMessage()

console.log(this);

function chai() {
    console.log(this.username);
}
chai()

const chai1 = () => {
    let user = "Ben"
    console.log(this);
}
chai1()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addThree = (num1, num2) => (num1 + num2 )

console.log(addThree(3,5));

//  IIFE -> Immediately invoked function

(function chai() { // Named IIFE
    console.log('Connected');
}) ();

((name) => { // Simple IIFE
    console.log(`Connected ${name}`);
})('DB');



