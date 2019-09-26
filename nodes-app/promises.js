const doWorkProise = new Promise((resolve, reject)=>{
        setTimeout(()=>{

            reject('something went wrong')
            resolve([4,5,6])
        }, 2000)
})


doWorkProise.then((result)=>{
    console.log('Success' + result)
}).catch((error)=>{
    console.log(error)
})