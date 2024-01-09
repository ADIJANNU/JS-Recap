const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "xyz@yahoo.com",
    fullname: {
        userfullname: { 
            firstname: "Tony",
            lastname: "Stark"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b"}

const obj3 =  Object.assign({},obj1,obj2,obj4) // assign
console.log(obj3);

const obj6 = {...obj1, ...obj2} // spread
console.log(obj6);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "java",
    price: "999",
    courseInstructor: "Milan"
}

const {courseInstructor: teacher} = course

// console.log(courseInstructor);
console.log(teacher);