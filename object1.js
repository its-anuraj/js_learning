const tinderuser=new Object() // singleton object
const tinderuser1={} //non singleton object

console.log(tinderuser)
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin=false
console.log(tinderuser)


const user={
    email:"ajsingindolia@gmail.com",
    fullname:{
         userfullname:{
            firstname:"anuraj",
            lastname:"singh"
         }
    }
}
console.log(user.fullname)
console.log(user.fullname.userfullname)

const obj={1:"a",2:"b",3:"c"}
const obj1={4:"d",5:"e"}

console.log({...obj,...obj1}) //here we using spread operator

const obj3=Object.assign({},obj,obj1)
console.log(obj3)

const user1=[
    {
        id:1,
        email:"ajfdew"
    },
    {
       id:2,
       email:"duyerejn"
    }
]


console.log(user1[1].email)

console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("isloggedin"))
 

//++++++++++++Object DeStructure+++++++++++++++++++

const course={
    courseanme:'js in hindi',
    price:"999",
    courseinstructor:"hitesh"
}


const {courseinstructor}=course
console.log(courseinstructor)

const {courseinstructor: instructor}=course
console.log(instructor)