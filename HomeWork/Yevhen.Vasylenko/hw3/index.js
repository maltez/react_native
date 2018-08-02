// Part 1.
// Create fake rest api based on setTimeout or setInterval.
// It obtains data and after random time send promise response.
// If obtained string contains world error promise rejected.
const RACERS = ["OLIVER", "JACK", "HARRY",
    "JACOB", "CHARLIE", "THOMAS",
    "GEORGE", "OSCAR", "JAMES",
    "WILLIAM", "NOAH", "ALFIE",
    "JOSHUA", "MUHAMMAD", "HENRY",
    "LEO", "ARCHIE",
];

const CARS = ["Honda CR-V", "Honda Accord", "Honda Civic",
    "Toyota Highlander", "Dodge Challenger", "Jeep Wrangler",
    "Ford F-150", "Toyota Camry", "Toyota Tacoma",
    "Jeep Grand Cherokee", "Mazda CX-5", "Honda Pilot",
    "Toyota RAV4", "Subaru Outback", "Ram 1500",
    "Nissan Rogue", "Subaru Forester", "Ford Mustang",
    "Subaru Crosstrek", "Honda Odyssey", "Chevrolet Traverse",
    "Jeep Cherokee", "Ford Explorer", "Volkswagen Tiguan",
    "Honda HR-V", "Chevrolet Silverado 1500", "Ford Escape",
    "Chevrolet Camaro", "Jeep Compass", "Nissan Murano",
    "Toyota 4Runner",
];

function fakeRestApi(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = getResponse(url);
            if (isResponseValid(response)) {
                resolve(response);
            } else {
                reject();
            }
        }, getTimeoutDelay());
    });
}

function getTimeoutDelay() {
    return Math.round(Math.random() * 2 * 1000);
}

function getResponse(url) {
    if (Math.round(Math.random() * 5) > 0) {
        const localArray = ("/car" == url) ? CARS : RACERS;
        return localArray[Math.floor(Math.random() * localArray.length)];
    } else {
        return "error";
    }
}

function isResponseValid(response) {
    return !response.includes("error");
}

function getRacer() {
    return fakeRestApi("/racer");
}

function getCarForRacer(racer) {
    return fakeRestApi("/car").then((car) => {
        return {
            car,
            racer
        };
    }, errorHandler);
}

function errorHandler() {
    alert("Oops! Fake request returns fake error.");
}
// Part 2.
// Create 7 requests in parallel.
// Then aggregate them results and push them to another request.
const racerRequests = Array.from({
    length: 7
}, () => getRacer());

Promise.all(racerRequests)
    .then(prepareCarsForRacers, errorHandler);

// Part 3.
// After last request obtain results 
// and push them to 3 different request and get the fastest response.
function prepareCarsForRacers(racers) {
    const carRequests = racers.map((v) => getCarForRacer(v));
    return Promise.all(carRequests)
        .then(startRace);
}

function startRace(racersInCars) {
    return Promise.race(racersInCars)
        .then((obj) => alert(`${obj.racer} in ${obj.car} is the fastest!`), errorHandler);
}