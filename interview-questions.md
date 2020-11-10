# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a function? Why would you use one?

  Your answer:
 A function is a piece of code that acts on other parts of code to do some action on my code like mathematical operation, built in methods etc.
 I would use one because it's what actually makes my code work and do something rather than just store data.

  Researched answer:

  Functions are reusable pieces of code, they excecute when called and always give an output, the information passed is called an argument and 
  the function can be used as many times as needed. It has a strict syntax with name, parenthes with arguments if needed, fat arrow syntax  and curly braces with instructions inside and a return.

  Functions are useful because I can define the code once, and use it many times with different arguments, to produce different results.

2. What is the difference between .map() and .filter()?

  Your answer:

  They are both built-in methods for javascript, .map scans through an array and gives back an array with the same amount of data.
  .filter scans through an array and not ncesessarly gives back the same amount of data, filtering out what doesn't follow the rules of the conditions of the .filter

  Researched answer:

  .map() and .filter() are two higher-order functions and both have three built-in arguments - the value, index, and array.
  they both scan through an array, .map returns a new array of the same length, .filter gives a subset of the given array containing only the values that satisfy your stated condition.

3. What is the difference between console.log() and return?

  Your answer:
  console.log is a way in javascript to see what is happening to my code in the terminal. I can see how my data are changing and have a reference of what I'm doing or simply get a message when I run my code.
  Return is associated to functions and it's part of its syntax, I can have only one return in a function but there's no limimtations for control.log

  Researched answer:

  console.log() can be called as many times as we want and we can even  inside functions to see what is my output in that specific point
  Return is part of a function syntax and it's needed to call the function, following the instructions to perform a task but itself it will not give an output in the terminal, to see the output I need to console log the function.


4. In regards to functions, what is an argument?

  Your answer:

 argument is the data the function is acting on.

  Researched answer:

  Argument is the external information that a function is accessing and it's often requred to run.
  
  Notice that in the function we created a placeholder called name. This allows us to pass any "data" we want through the function during the function call. the "data" can be a placeholder or can contains other information like variables.  
 



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer:

 In pair programing you have two people working on the same code, the two share the rationale and one writes the code and the second person double checks if it's well written, there are no typos and gives feedback and suggestions. It's a way to mutually help in case of mistakes and doubts.

  Researched answer:

Pair programming consiste of two people the navigator and the driver working on the same code. In pair programming the driver is responsible for entering the code and follow the instructions given by the navigator. the navigator dictate the code and is responsible to check typing errors. proper communication is key as much as balance out the contribution of each person, hold each other accountable to obtain a better code in less time, the typying syntax and problem solving are split between two people making the overall process easier. 


6. What is TDD? Describe the work flow associated with TDD.

  Your answer:
 TDD is a way to check that the code is working and acting as expected.

 the first step is to describe what my function will do, what it is testing and what is the return.
 the syntax is 
 describe: function tested
 "test: describe with your own words what's the scope of your code
 expect: name of the function
 toEqual: output of the function tested

 Followed by the actual code with the function tested
 running in the terminal my js file I will get a message (red/green) describing if test was passed or failed and give indications of the issue

  Researched answer:

TDD stands for Test Driven Development,and it consist in way to code where I write my test first and only after write the code to make the test pass. this way force the coder to break big problems in smaller and more logical ones making the overall code better. it also make future changes easier as well as make your code easier to understand and it's an automated way to quality assurance your code.

the workflow associated is the following:
1) Write the test
2) Run your test  to see a fail
3) Write the code
4) Run your test to see your test pass


7. What is something we did in class this week you found helpful?  

  Your answer:
  most of the lectures we did this week were new to me, it was a really helpful week to initiate the transition to a new field, and get to know more my classmates and teachers. 
  I like how after lunch there's a team building activity, learning online makes bonding with the classmates definitely harder especially with the overall pandemic mood.
  I also found  helpful how Bryan is setting us up for the intership and our future career. I found it extremely reassuring and helps to alleviate the moments of stress ad discouragement especially when code is not working and I don't see progress right awqat.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- Classes : they are particular type of function that contain data and behaviour, their names are capitalized and they have three keywords needed in their syntax: "constructor", "this" and "new".
- React : it's a javascript library to create web pages  (front-end), they allow to create reusable web pages.
- React State : it's an object within a class in react that stores a component's dynamic data and determines the component's behaviour.
- CRUD stands for Create Read Update Delete, it's an acronym that gives guidance to how to manage information in a model, they are the four bacic functions that a model should be   able to do.
