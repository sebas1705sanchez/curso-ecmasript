const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("valido");
        } else {
            reject("error");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("FINALIZADO"));