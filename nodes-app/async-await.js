const doWork = () => {
    return new Promise((resolve, reject) => {
        return resolve('anik')
    })
}

doWork().then( result => {
    console.log(result)
}).catch( e => {
    console.log(e)
})