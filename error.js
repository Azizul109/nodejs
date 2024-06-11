const error = new Error("Something went wrong");

// throw new Error("I am error object");

// const {CustomError} = require("./CustomError");

// throw new CustomError("This is a custom error");

// try {
//     doSomething();
// } catch (e) {
//     console.log("Error Occurred");
//     console.log(e);
// }

function doSomething() {
    const data = fetch("localhost:300/api");
    console.log("I am from doSomethingFunction");
}

const promise = new Promise((resolve, reject) => {
    if(true){
        resolve(doSomething());
    } else {
        reject(doSomething());
    }
});

promise.then((val) => {
    console.log(val);
}).catch((err) => {
    console.log("Error Occurred");
    console.log(err);
})