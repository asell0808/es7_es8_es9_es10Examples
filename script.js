//----------------------------------------------
// ES7 additions to solve problems below
//----------------------------------------------

// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.includes('John') // false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.filter(name => name.includes('John')) // ['Johnathan']


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
power100(10000) // Infinity

//----------------------------------------------
// ES8 additions to solve problems below
//----------------------------------------------

// examples of new additions
// .padStart();
 'Turtle'.padStart(10); 
// .padEnd();
'Turtle'.padEnd(10); 
// useful for strings

// trailing commas in functions, parameters and calls
const fun = (a,
             b,
             c, 
             d,
             ) => {
    console.log(a);
}
fun(1,2,3,4,);

// next example

Object.values
Object.entries
Object.keys

let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username2: 'Mr.Grinch'
}

Object.keys(obj).forEach((key, index) =>{
    console.log(key, obj[key]);
})

Object.values(obj).forEach(value =>{
    console.log(value);
})

Object.entries(obj).forEach(value =>{
    console.log(value);
})

Object.entries(obj).map(value =>{
    return value[1] + value[0].replace('username', '');
})

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '||🐢';
let rabbit = '||🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

console.log(startLine);
turtle.padStart(9);// basically just add spaces to the beginning of our string containing our animal emojis
rabbit.padStart(9);

// when you do:

console.log(startLine);
console.log(turtle);
console.log(rabbit);
//answer
console.log(startLine);
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// When running this line of JS, you will essentially be adding characters of '=' 
// to the end of the turtle emoji string until it reaches a value of 9

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
//answer
Object.entries(obj).map(value => value.join(" ")).join(' ')


//----------------------------------------------
// ES9 additions to solve problems below
//----------------------------------------------

// Async + Await will be covered at a future time when I learn about AJAX in a future section

//----------------------------------------------
// ES10 additions to solve problems below
//----------------------------------------------
// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
//Solution:
console.log(array.flat(2))


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
//Solution:
console.log(userEmail3.trimEnd().trimStart())


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
//Solution
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
//Solution
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)

