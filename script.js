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



//----------------------------------------------
// ES10 additions to solve problems below
//----------------------------------------------
