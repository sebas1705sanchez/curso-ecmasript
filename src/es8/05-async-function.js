const fnAsync = () => 
    new Promise((resolve) => {
        setTimeout(() => resolve("Async!!"), 2000);
    });

const anotherFn = async () => {
    try {
        const result = await fnAsync();
        console.log(result);
        console.log("Hello");
    } catch (error) {
        console.error("Error:", error);
    }
};  
console.log("before");
anotherFn();
console.log("after");

