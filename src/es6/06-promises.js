const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("valido");
        } else {
            reject("error");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const promise1 =  new Promise((resolve => setTimeout(() => resolve("Resultado 1"), 1000)))
const promise2 =  new Promise((resolve => setTimeout(() => resolve("Resultado 1"), 2000)))
const promise3 =  new Promise((resolve => setTimeout(() => resolve("Resultado 1"), 1000)))

Promise.all([promise1, promise2, promise3])
.then(response => console.log(response))
.catch(error => console.log(error));