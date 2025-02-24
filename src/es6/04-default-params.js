function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 25;
    var country = country || 'Colombia';
    console.log(name, age, country);
}


newUser();
newUser('Maria', 24, 'Col');

function newAdmin(name='Sebastian', age=20, country='Colombia') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 24, 'Colombia');