// ASSESSMENT 1: Testing practical questions

// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.


describe("addThemUpNo", () => {
    test( "add two numbers" , () => {
      expect(addThemUp()).toEqual(16)
        })
})

var numb1 = 10
var numb2 = 5

const addThemUpNo =  () => {
    { return numb1 + numb2} 
}



// --------------------1b) See the test fail. THEN write the code to make the test pass.

//previous code just have a wrong return to make sure the function is working

describe("addThemUp", () => {
    test( "add two numbers" , () => {
      expect(addThemUp()).toEqual(15)
        })
})

var numb1 = 10
var numb2 = 5

const addThemUp =  () => {
    { return numb1 + numb2} 
}



// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.



describe("triAreaNo", () => {
    test ("calculate a triangle area", () => {
      expect(triAreaNo()).toEqual(50)
    })        
      
})

//it wil fail, the var babNo has the wrong value

var babNo = 100
var height = 10

const triAreaNo = () => {
    { return ((babNo * height)/2)} 
}


// --------------------2b) See the test fail. THEN write the code to make the test pass.

describe("triArea", () => {
    test ("calculate a triangle area", () => {
      expect(triArea()).toEqual(50)
    })        
      
})

var bab = 10
var height = 10

const triArea = () => {
    { return ((bab * height)/2)} 
}