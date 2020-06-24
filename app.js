console.log('Start Group');

let data = 'content'
console.log(data);

function printGreeting(msg, alertGreet) {
    if (msg === 'evening'){
        evening(alertGreet)
    } else if (msg === 'morning'){
        morning(alertGreet)
    } else {
        night(alertGreet)
    }
}

function morning(alertGreet) {
    alert('Good morning');
    alertGreet('Hello World');
}

function evening(alertGreet) {
    alert('Good evening');
    alertGreet('Hello World');
}

function night(alertGreet) {
    alert('Good night');
    alertGreet('Hello World');
}

function alertGreet(msg) {
    alert(msg);
}

printGreeting('Hello World', alertGreet);

let promise = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('new promise');
        resolve();
    }, 1000)
})

promise.then(function(){
    console.log('promise resolve');                                                                   
})

function success() {
    console.log('success');
}

function failure() {
    console.log('failure');
}

function checkUserPromise(userInput) {
    new Promise(function(resolve, reject) {
        if(userInput) {
            resolve()
        } else {
            reject()
        }
    });
}

const anyFunction = () => {
    return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
}

const resolveFunction = () => console.log('success');
const rejectFunction = () => console.log('failure'); 

const result = new Promise((resolve, reject) => {
    setTimeout(() => (anyFunction() ? resolve() : reject()), 2000);
})

result.then(resolveFunction).catch(rejectFunction)