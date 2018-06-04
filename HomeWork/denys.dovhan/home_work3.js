/*
    #HW 3
    - Create fake rest API based on setTimeout or setInterval. It receives data and after random moment send Promise response.
    If resultt string contains word error promise rejected.
    - Create 7 requests in parallel. Then aggregate the results and push them to another request.
    - After last request obtain results and push them to 3 different requests and get the fastest response
*/

function FakeAPI() {

    this.fetchData = function (callback) {
        processRequest(callback);
    };

    this.modifyDataArray = function (dataArray, modificator, callback) {
        processRequest((error, response) => {
            var result = null;
            if (!error) {
                result = Array.from(dataArray, (item => item + modificator));
            }
            callback(error, result);
        });
    };

    function processRequest(callback) {
        let duration = randomDuration();
        setTimeout(() => {
            let error = duration > 700 ? `Timeout error (duration=${duration})` : null;
            let response = error ? null  : "data";
            callback(error, response);
        }, duration);
    }

    function randomDuration() {
        const min = 200;
        const max = 800;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

let api = new FakeAPI();

function sendRequest() {
    return new Promise((resolve, reject) => {
        api.fetchData((error, response) => {
            if (error) {
                return reject(error);
            }
            return resolve(response);
        });
    });
}

function sendModifyParamsRequest(paramsArray, modificator) {
    return new Promise((resolve, reject) => {
        api.modifyDataArray(paramsArray, modificator, (error, response) => {
            if (error) {
                return reject(error);
            }
            return resolve(response);
        });
    });
}

let promises = [];
for (let i = 0; i < 7; i++) {
    promises.push(sendRequest());
}
Promise.all(promises)
    .then((data) => {
        console.log("7 requests: " + data); // data,data,data,data,data,data,data
        return sendModifyParamsRequest(data, "-#1");
    })
    .then((data) => {
        console.log("request with modified params: " + data); // data-#1,data-#1,data-#1,data-#1,data-#1,data-#1,data-#1
        let promises = [
            sendModifyParamsRequest(data, "-#2"), 
            sendModifyParamsRequest(data, "-#3"), 
            sendModifyParamsRequest(data, "-#4")];
        return Promise.race(promises)
    })
    .then ((data) => {
        console.log("fastest request with modified params: " + data); //data-#1-#3,data-#1-#3,data-#1-#3,data-#1-#3,data-#1-#3,data-#1-#3,data-#1-#3
    })
    .catch((error) => {
        console.log("catch: " + error); // Timeout error (duration=679)
    });
