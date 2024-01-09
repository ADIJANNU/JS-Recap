const mySym = Symbol("key1") // symbol declaration

const jsUser = {
        name: "Ironman",
        [mySym]: "mykey1" ,
        "real name": "Tony Stark",
        age: 18,
        location: "New York",
        mail: "ironman@marvel.com",
        isLoggedIn: false,
        lastLoginDays: ["Monday","Thursday"]
}

console.log(jsUser.mail);
console.log(jsUser["mail"]);
console.log(jsUser["real name"]);
console.log(jsUser[mySym]);

jsUser.mail = "avengers@marvel.com"
// Object.freeze(jsUser)
// jsUser.mail = "avengers@marvelteam.com"
// console.log(jsUser.mail);

jsUser.greeting = function() {
    console.log("Hello Avenger");
}

jsUser.greetings = function() {
    console.log(`Hello Avenger, ${this.name}` );
}

console.log(jsUser.greeting());
console.log(jsUser.greetings());
