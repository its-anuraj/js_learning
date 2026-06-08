// falsey
// 0,"",null,undefined,Nan,false,-0,BigInt => 0n


//truthy
//1," ",[],{},true,'false',function(){} => empty function


// how to chech array empty or not
if(useremail.length===0){
    console.log("array is empty")
}


//how to chech object is empty or not
const user={}
if(Object.keys(user).length===0){
    console.log("object is empty");
    
}


//nullish coalescing operator (??): null undefined

let val1;
//val1=5??10
//val1=null??10
//val1=undefined??10
//val1=null??undefined
val1=null??5??10
console.log(val1);


// ternary operator 
//condition ?  true : false

let iceteaprice=100
iceteaprice <= 80 ? console.log("less than 80"):console.log("more than 80")


