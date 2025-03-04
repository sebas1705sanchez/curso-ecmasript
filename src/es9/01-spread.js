const user = {
    username: 'John',
    email: 'john@gmail.com',
    password: '12345'
}

const {username, ...values} = user;
console.log(username);
console.log(values);