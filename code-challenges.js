// ASSESSMENT 1: Coding practical questions

const { attempt } = require("lodash")

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Psuedo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212


// write a function that contains an if/else statement that ewill satisfy the 3 conditions for the 3 variables
// log the 3 variables as a remainder
//log function for the 3 variables

const tempera = (far) => {
  if (far === 212){
    console.log("212 is at the boling point")
}   else if (far > 212) {
    console.log("350 is above boiling point")
}   else if (far < 212) {
    console.log("35 is below boiling point")
}
}
//just a reminder of the three variables
console.log(`temp1 = ${temp1}, temp2 = ${temp2}, temp3 = ${temp3}`);

//log the function for the 3 variables
tempera(temp1)
tempera(temp2)
tempera(temp3)



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

//I will write a basic loop that will do a basic math function (*5) to each element of the array

for(let i=0; i<myNumbers1.length; i++){
  console.log(myNumbers1[i] * 5)
}





// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

//I can use the .map syntax to simplify the code, just gett the array values and puty the math operator
const multi = myNumbers2.map(value => value*5)


console.log(multi)





// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


//create a new array from called split1 and split2
//from strings stringWithVowels1 and stringWithVowels2

var split1 = stringWithVowels1.split("")
var split2 = stringWithVowels2.split("")

//set a function that scan my array and removes vowels
//function has an If with logical operators for the five vowels to remove them

const onlyVow = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    if(
       array [i] !== "a"
    && array [i] !== "e"
    && array [i] !== "i"
    && array [i] !== "o"
    && array [i] !== "u"
   ){
      newArray.push(array[i])
    }
  }
  return newArray
}

// run my function "onlyVow" for the two variables and add a .join accessors to convert it to a strings
// i can also define a variable and write the .join in a new line
var combined1 = onlyVow(split1).join("")
var combined2 = onlyVow(split2).join("")

//log the two variables to see the result in the terminal
console.log(combined1);
console.log(combined2);




// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string"

console.log("Question 5: Unfinished");

var notAString1 = true
var notAString2 = 42

var split3 = [notAString1]
var split4 = [notAString2]

//define a test variable with multiple type of data 
var test = [true, false, 42, "HeyThereLearnStudent", 'H', 'e', 'y', 'T', 'h','e', 'r', 'e', 'L', 'e','a', 'r', 'n', 'S', 't','u', 'd', 'e', 'n', 't', ]

//I removed all the conditions for the vowels because I wansn't able to make it work, I tried many possible solutions with no success.
// I haven't been able to add an else if or else or get the newArray to work as in question 4.
const hmw5 = (array) => {
  let newArray = []
  for(let i=0; i<array.length; i++){
    if(
       array [i] !== 42
    || array [i] !== true
    
   ){
      newArray.push(array[i])
    }
  }
  return `${newArray} is not a string`
}

console.log(hmw5(notAString1));
console.log(hmw5(notAString2));



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

var toonimals =
  [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" }
  ]

  var cat = toonimals.filter(value => value.animal === "cat")
  console.log(cat)



// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


var toonsDes =
  [
  { name: "Itchy", animal: "mouse" },
  { name: "Stimpy", animal: "cat" },
  { name: "Daffy", animal: "duck" },
  { name: "Scratchy", animal: "cat" },
  { name: "Ren", animal: "dog" },
  { name: "Felix", animal: "cat" }
  ]

  //trying to run an array destructring to write a function to get only
  console.log("destru:");
  var destru =  { name, animal } = toonsDes
  console.log(destru);
  
  // 1st attempt
  // const trio = () => {
  //   if (animal === "duck"){
  //     console.log(animal)
  // }   else if (far > 212) {
  //     console.log("350 is above boiling point")


//  2nd attempt, it doesn't filter out the cats
// const trio = (array) => {
//   array.map(value => {
//     console.log(value.name);
//   })
// }

console.log(trio(destru))

//  3rd attempt,not working
const trio = (array) => {
  array.map(value => { if
    (animal !== "cat"){
    console.log(value.name);
  }
}}

console.log(trio(destru))

