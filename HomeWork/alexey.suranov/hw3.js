let requestId = 0,
    promises = [];

const createFakeCall = (data = "data") => {
    return new Promise((resolve, reject) => {
        let delay = Math.random() * 1000;
        if (delay > 900) data += "error";
        setTimeout(() => {
            requestId++;
            if (data.includes("error")) {
                reject(`request #${requestId} has an error`);
            }
            return resolve((data += requestId));
        }, delay);
    });
};

for(let i=0; i < 7; i++){
    promises.push(createFakeCall());
}

Promise.all(promises)
    .then(data => {
        console.log("#1 Received data is:", data);
        return Promise.race([
            createFakeCall(), 
            createFakeCall(), 
            createFakeCall()
        ]);
    })
    .then(data => console.log("#2 result data is:", data))
    .catch(e => console.log("Error: " + e));