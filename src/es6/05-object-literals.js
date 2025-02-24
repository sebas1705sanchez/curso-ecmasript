function newUser(user, age, country, uId) {
    return {
        id: uId,
        user,
        age,
        country
    }
}
console.log(newUser('Sebastian', 25, 'COL', 1));