const doWorkProise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([4,5,6])
            //reject('something went wrong')
        }, 2000)
})


doWorkProise.then((result)=>{
    console.log('Success' + result)
}).catch((error)=>{
    console.log(error)
})