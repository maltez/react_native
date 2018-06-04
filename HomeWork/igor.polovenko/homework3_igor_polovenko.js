class RestApi {
    constructor() {
        this.data = ['data0', 'data1', 'error', 'data2', 'data3', 'data7', 'data4', 'data5', 'data6', 'data8'];
    }

    performRequest(optionalData = 'unset') {
        return new Promise((resolve, reject) => {
            console.log(`Performing request with data: ${optionalData}`);
            let rnd = Math.random();
            let timeout = Math.trunc(rnd * 10000); // 0 - 10000 ms
            console.log(`Timeout: ${timeout}`);
            let dataIndex = Math.trunc(rnd * 10); // 0 - 9
            console.log(`Data index picked: ${dataIndex}`);
            setTimeout(() => {
                let data = this.data[dataIndex];
                if (data.includes('error')) {
                    throw new Error('HTTP error!');
                }
                resolve(data);
            }, timeout);
        });
    }
}

let rest = new RestApi();

Promise.all([
    rest.performRequest(),
    rest.performRequest(),
    rest.performRequest(),
    rest.performRequest(),
    rest.performRequest(),
    rest.performRequest(),
    rest.performRequest(),
]).then(results => {
    console.log('First request batch processed!');
    return [results[0], results[3], results[6]];
}).then(data => {
    console.log('Intermediate data processing complete! Racing with 3 requests...')
    return Promise.race([
        rest.performRequest(data[0]),
        rest.performRequest(data[1]),
        rest.performRequest(data[2])
    ])
}).then(data => console.log(`Final data: ${data}`))
.catch(error => console.log(`Encountered an error: ${error.message}`));


