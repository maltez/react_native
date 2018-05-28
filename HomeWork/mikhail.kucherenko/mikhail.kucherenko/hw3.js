/* 
 * Home work 3  
 * Autor: Mikhail Kucherenko
 * Task: Create fake rest api based on setTimeout or  setInterval. 
 *       It obtains data and after random time send promise response.
 *      - If obtained string contains world error promise rejected
 *      - Create 7 requests in parallel. Then aggregate them and push them to another request
 *      - After last request obtain result and push them to 3 different request and get the fastes response.
 */

function analizeString(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.includes('error')) {
                reject(new Error('error found!'));
            } else {
                resolve(data);
            }
            }, Math.random()*1000);
    });
}

const requests = [];
const requestsNum = 7;
const errorRequestNum = Math.round(Math.random()*requestsNum);

for (let i = 0; i < requestsNum; i++) {
    if (i == errorRequestNum) {
        requests.push(analizeString('Request error - ' + i));  // adding random request with arror
    } else {
        requests.push(analizeString('Request OK - ' + i));
    }
}

Promise.all(requests)
    .then(result => analizeString(result))
    .then(result => {
        console.log("result of parallel requests : " + result);
        const anotherRequests = [];
        for (let i = 0; i < 3; i++) {
            anotherRequests.push(analizeString(result + ' -> ' + i));
        }

        Promise.race(anotherRequests)
            .then(result => console.log("The fastest is : " + result))
            .catch(error => console.log(error));
    })
    .catch(error => console.log(new Error(error)));
