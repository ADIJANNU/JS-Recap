// for In loop

const myObj= {
    VK : "Virat Kohli",
    RS : "Rohit Sharma",
    SG : "Shubman Gill"
}

for (const key in myObj) {   // Object Iteration 
  console.log(`${key} : ${myObj[key]}`);
}

// for Each loop

const coding = ['java','js','python','C','ruby']

coding.forEach( (langs) => {
    console.log(langs)
})

// Access to objects in an Array

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "JS"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "Py"
    }
]

myCoding.forEach( (lang) => {
    console.log(lang.languageFileName);
})


