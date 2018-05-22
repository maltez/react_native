setTimeout(() => {
    console.log('Hello');
    setTimeout(() => {
        console.log('Hi');
        setTimeout(()=> {
            console.log('Good bye');
        }, 800);
    }, 200);
    console.log(123)
    setTimeout(()=> {
        console.log(123)
    }, 100);
}, 200);

// Plan b
setTimeout(()=> {
    console.log('Hello');
}, 200);

setTimeout(()=> {
    console.log('Hi');
}, 200);

try{
    setTimeout(()=> {
        throw new Error('Something goes wrong');
    }, 800);
} catch (e) {
    console.log(`Error - ${e.message}`)
}


