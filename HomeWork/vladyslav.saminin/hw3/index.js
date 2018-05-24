//1. Fake REST call
function makeFakeCall(requestParameters) {
    return new Promise((resolve, reject) => {
        let callLength = Math.floor(Math.random() * 3) + 1;

        setTimeout(() => {
            let responseBody = requestParameters;

            if (responseBody.includes("error")) {
                reject("Error happended on the server side");
            } else {
                resolve(responseBody);
            }
        }, callLength * 1000);
    })
}

makeFakeCall("generate error response")
    .then(result => console.log(result))
    .catch(error => console.log(error));

//2. 7 requests in parallel
let promisesArray = [];

for (let i = 0; i < 7; i++) {
    promisesArray.push(makeFakeCall("Request #" + i));
}

Promise.all(promisesArray)
    .then(resultArray => makeFakeCall(resultArray.join()))
    .then(joinedString => race(joinedString));

//3. 3 requests race
function race(joinedString) {
    Promise.race([
            makeFakeCall(joinedString + " #0"),
            makeFakeCall(joinedString + " #1"),
            makeFakeCall(joinedString + " #2")
        ])
        .then(result => console.log(result));
}