function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function firstFakeAPI () {
    return new Promise((resolve, reject) => {
        let num = getRandomInt(40);
        if (num === 5 || num ===17) {
            throw new RangeError("ooops. error!")
        }
        setTimeout(() => {
            return resolve(`data${num}`);
        }, (num%4) * 1000);
    });
}

function secondFakeAPI () {
    return new Promise((resolve, reject) => {
        let num = getRandomInt(35);
        if (num === 3 || num === 12) {
            throw new RangeError("ooops. error again!")
        }
        setTimeout(() => {
            return resolve(`resolved race data${num}`);
        }, (num%4) * 1000);
    });
}

let apiOne = firstFakeAPI;
let apiTwo = secondFakeAPI;

Promise.all([apiOne(), apiOne(), apiOne(), apiOne(), apiOne(), apiOne(), apiOne()])
    .then((data) => {
        console.log("received data:");
        console.log(data);
        console.log("Starting the race!");
        return Promise.race([apiTwo(), apiTwo(), apiTwo()])
    })
    .then((data) => {
        console.log("here comes first");
        console.log(data);        
    })
    .catch((err) => {
        console.log(err.message);
    });


    