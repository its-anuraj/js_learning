const user={
username:"hitesh",
prices:999,

welcomemessage:function(){
    console.log(`${this.username},welcome to website`)
    console.log(this)

}
}
user.welcomemessage()
user.username="sam"
user.welcomemessage()

console.log(this)

function chai(){
    console.log(this)

}
chai()


function chai1(){
    let username1="anuraj"    //this only works in object not in function 
    console.log(this.username1)

}
chai1()


const chai2=()=>{
    let username2="anuraj"
    console.log(this.username2)
}
chai2()

const addtwo=(num1,num2)=> {
    return num1+num2
}
console.log(addtwo(3,4))

const add1=(num1,num2)=> num1+num2
console.log(addtwo(3,4))

const add2=(num1,num2)=> (num1+num2)
console.log(addtwo(3,4))

