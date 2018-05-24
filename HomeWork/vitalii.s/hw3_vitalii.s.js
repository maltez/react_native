// Create fake rest API based on setTimout or setInterval.
// It retriev data and after random tme send promise response. If string contains word error promise rejected.
// Create 7 request in parallel. Then aggreagate them results and push them to another request.
// After last request obtain results and push them to 3 different request and get the fastest response.

let requestId = 0;

const fakeApi = (data = "data") => {
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

Promise.all([fakeApi(), fakeApi(), fakeApi(), fakeApi(), fakeApi(), fakeApi(), fakeApi()])
    .then(data => {
        console.log("#1 result data is:", data);
        return Promise.race([fakeApi(), fakeApi(), fakeApi()]);
    })
    .then(data => {
        console.log("#2 result data is:", data);
    })
    .catch(e => {
        console.log("Error: " + e);
    });
