async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hola");

async function arrayOfNames(names) {
    for await (const item of names) {
        console.log(item);
    }
}

const names = arrayOfNames(['Sebastian', 'Ana', 'Maria']);
console.log('after');