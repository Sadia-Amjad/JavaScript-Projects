// promise 1 resolve
let promise = new Promise((resolve, reject) => {
    alert("I am an alert in promise");
    resolve(true);
});
console.log("Hello");
setTimeout(function () {
    console.log("Hello in 2 sec");
}, 5000);
console.log("My name is " + "Sadia");
console.log(promise);
// promise 2 reject
let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("Promise is rejected");
        reject(new Error("I am an error"));
    }, 5000);
});
console.log(p);
