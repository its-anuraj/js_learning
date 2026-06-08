function saymyname(){
    console.log("a")
    console.log("n")
    console.log("u")
    console.log("r")
    console.log("a")
    console.log("j")
}

saymyname()

function addtwonumbers(a,b){
    console.log(a+b)
}

addtwonumbers(3,8)


function addtwonumbers1(a,b){
 //let result =a+b
 console.log("anuraj")
 return a+b
 //console.log("anuraj")
}

const result=addtwonumbers1(3,8)
console.log("result:" ,result)




function loginusermessage(username="sam"){
    if(!username){
        console.log("please enter a username")
            return
        
    }
    return `${username} just logged in`

}
console.log(loginusermessage())