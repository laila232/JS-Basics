let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!")
    }, 2000)
    
})
promise.then(result => {
    console.log(result)
})
    .catch(error => {
        console.log(error)
})