//singleton 
//object.create

//object literals


const mysym=Symbol("key1")

const user={
    name:"anuraj",
    age:18,
    location:"jaipur",
    [mysym]:"mykey1",
    "full name":"anuraj singh indolia",
    email:"ajsinghindolia@gmail.com",
    isloggedin:false,
    lastlogindays:["mondays","saturday"]

}

console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user[mysym])
console.log(typeof mysym)

//Object.freeze(user)
user.email="sysrirudsfsudi@gamil.com"

console.log(user)


user.greetings=function(){
    console.log(`hello js user , ${this.name}`)

}

console.log(user.greetings())










