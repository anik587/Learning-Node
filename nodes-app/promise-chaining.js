const add = (a, b)=>{
    return new Promise(( resolve, reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        }, 2000)
    })
}


add(1,2).then( res => {
    console.log(res)
    return add(res, 5)
}).then( res2 => {
    console.log(res2)
}).catch(e => {
    console.log(e)
})