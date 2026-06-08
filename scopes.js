let a=10

if(true){
   let a=100
 const b=200
    c=30
}
console.log(a)

//console.log(b)

console.log(c)


function one(){
    const username="anuraj"
    

    function two (){
        const website="yt"
        console.log(username)
    }
   // console.log(website)
    two()


}
one()


if(true){
    const username="anuraj"
    if(username==="anuraj"){
        const website="yt"
        console.log(username+website)
        

    }
   // console.log(website)
}
// console.log(username)


console.log(addone(5))
function addone(num){
    return num+1
}

console.log(addtwo(5))
const addtwo=function(num){
    return num+1
}
