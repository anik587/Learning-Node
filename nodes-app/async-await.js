const add = (a, b)=>{
    return new Promise(( resolve, reject)=>{
        setTimeout(()=>{
            if(a < 0 || b < 0)
            reject('Only positive number required')
            resolve(a+b)
        }, 2000)
    })
}

const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 20)
    return await add(sum, -sum2)
}

doWork().then( result => {
    console.log(result)
}).catch( e => {
    console.log(e)
})