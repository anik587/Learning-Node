// const square = function(x){
//     return x*x;
// }


// const square = (x)=>{
//     return x*x
// }


// const square = (x) => x * x

// console.log(square(3));


const event  = {
    name: 'BDay Party',
    guestList: ['anik', 'islam', 'shojib'],
    printGuest(){ 
        console.log('Guest List For '+ this.name);
        this.guestList.forEach((d,i)=>{
            console.log(d + ' is attending ' + this.name);
        })
    }
}

event.printGuest();