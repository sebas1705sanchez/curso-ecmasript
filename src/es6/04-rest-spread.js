// arrays destructuring
let fruits = ['Apple', 'Banana'];

let [a, b] =  fruits;
console.log(a, b);

console.log(fruits[1]);

// Object destructuring
let user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 5
}

let {firstName, lastName, age} = user;
console.log(firstName, lastName, age);
console.log(user.firstName);

// spead operator
let person = {name: 'John', age: 3};
let country = 'Colombia';

let data = {id: 1,...person, country};
console.log(data)

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(3, 5, 3, 2, 1)