const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){

        console.log("Promise One Resolved")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise one consumed ");
    
})



new Promise(function(resolve,reject){
 setTimeout(function(){
 console.log("Async task 2");
 resolve()
},1000)
}).then(function(){
    console.log("promise two consumed");
})


const prmoiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
    resolve({name:"Anuraj", age:25})
},1000)
})
prmoiseThree.then(function(data){
    console.log(data);
})

const promiseFour=new Promise(function(resolve,reject){
 setTimeout(function(){
    let error=false
    if(!error){
        resolve({name:"Anuraj singh", age:22})
    }
    else{
        reject("Something went wrong")
    }

    
 },1000)
})

promiseFour
.then(function(data){
    console.log(data);
    return data.name
})
.then(function(name){
    console.log(name);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise four is either resolved or rejected");
})


const promiseFive=new Promise(function(resolve,reject){
 setTimeout(function(){
    let error=false
    if(!error){
        resolve({name:"Anuraj indolia", age:23})
    }
    else{
        reject("Something went wrong")
    }

    
 },1000)
})

async function consumepromisefive(){
    try{
        const data=await promiseFive
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

consumepromisefive()


async function getAllUsers(params) {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await response.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
