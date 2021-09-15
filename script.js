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

