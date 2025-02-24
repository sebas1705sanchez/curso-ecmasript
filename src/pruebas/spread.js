let user = {
    id: 1,
    firstName: 'Sebastian',
    lastName: 'Sanchez Bedoya',
    email: 's.sanchez@gmail.com',
}
console.log(user);

let user2 = {...user, firstName: 'SEBASTIAN'};
console.log(user2);

let animals = {
    id: 1,
    name: 'mateo',
    age: 10
}
console.log(animals);

let data = {...user, ...animals};
console.log(data)

const val = "Hello World!"
const val1 = [...val]
console.log(val1)