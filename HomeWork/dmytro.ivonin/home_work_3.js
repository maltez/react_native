/*
 * Autor: Dmytro Ivoin
 * Task: Create fake rest api based on setTimeout or  setInterval. It obtains data and after random time send promise response.
 *      - If obtained string contains world error promise rejected
 *      - Create 7 requests in parallel. Then aggregate them and push them to another request
 *      - After last request obtain result and push them to 3 different request and get the fastes response.
 */

'use strict'

var requestId = 0;

function randomMillisecomds() {
    const minSecs = 500;
    const maxSecs = 4000;

    let random = minSecs + Math.random() * (maxSecs + 1 - minSecs);
    return Math.floor(random);
}

function fakeAPI (attr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (String(attr).toLowerCase().includes('error')) {
                return reject('error');
            }
            
            return resolve({ 'requestId' : requestId++, 'attr' : attr });
        }, randomMillisecomds());
    });
}

Promise.all([                           // seven requests in parallel
        fakeAPI('test value'),          
        fakeAPI('test erro4r value'),
        fakeAPI('test value 3'),
        fakeAPI('test string'),
        fakeAPI('erro7R'),
        fakeAPI('test value'),
        fakeAPI('some string'),
    ])
    .then((data) => {
        console.log(data);
        fakeAPI(data)                   // another request
            .then((data) => {
                console.log(data);
                Promise.race([ fakeAPI(data), fakeAPI(data), fakeAPI(data) ])  // three different requests to get the fastest
                .then((data) => {
                    console.log(data);
                })
                .catch((e) => {
                    console.log(e);
                });
            })
            .catch((e) => {
                console.log(e);
            });
    })
    .catch((e) => {
        console.log(e);
    });