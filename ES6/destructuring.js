var expense = {
    type: 'Business',
    amount: '$45 USD'
};
//ES5
// var type = expense.type;
// var amount =expense.amount;

//ES6
const {type} = expense;
const {amount} = expense;
//const {type,amount}=expense;
console.log(typeof type);

//-----------------------
var saveFiled = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
};

function fileSummary({name, extension, size}, {color}) {
    return `${color} The file ${name}.${extension} is of size ${size}`;
}

console.log(fileSummary(saveFiled, {color: 'red'}));

//-----------------------------------
// Destructuring Arrays
const companies = [
    'Google', 'Facebook', 'Uber'
];

const [length] = companies;  //Google
// const {length} = companies; //3

console.log(typeof length);

const [name, ...rest] = companies;
console.log(rest); //[ 'Facebook', 'Uber' ]
console.log(typeof rest);   //object

//---------------------------------------
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};

function isEngineer({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}

console.log(isEngineer(profile));

//--------------------------------------
// Destructuring Arrays and Objects


//--------------------------------------
// chapter 42. So...When to Use Destructuring?
function signup({username, password, email, birth, city}) {
    //create new user
}

const user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@xample.com',
    birth: '1/1/1990',
    city: 'New York'
};

signup(user);


/*
 * The 'classes' variable holds an array of arrays, where each array represents a single class that a student is enrolled in.
 * Convert this array of arrays into an array of objects,
 * where each object has the keys 'subject', 'time', and 'teacher' and assign the result to 'classesAsObject.
 * Use array destructuring and the map helper.

 An array for a class has the form [subject, time, teacher]

 The resulting data structure should look something like the following:

 const classesAsObject = [{ subject: 'Geography', time: '2PM', teacher: 'Mrs. Larsen' }]
 */
const classes = [
    ['Chemistry', '9AM', 'Mr. Darnick'],
    ['Physics', '10:15AM', 'Mrs. Lithun'],
    ['Math', '11:30AM', 'Mrs. Vitalis']
];

// const classesAsObject = classes.map(function (classTest) {
//     return {subject:classTest[0],time:classTest[1],teacher:classTest[2]};
// });

// const classesAsObject = classes.map(function ([subject,time,teacher]) {
//     return {subject,time,teacher};
// });

const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};    //반드시 return 키워드를 넣어주어야함.
});


console.log(classesAsObject);

//----------------------------------------
//Quiz 34. Recursion with Destructuring
const numbers = [1, 2, 3];

const double = ([num, ...rest]) => rest.length? [ num *2,...double(rest) ] : [ num * 2 ];

console.log(double(numbers));
