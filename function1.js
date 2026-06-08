function calculatecartprice(...num1){
    return num1
}

console.log(calculatecartprice(200,400,500))


const user={
    username:"anuraj",
    prices:"2000"
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}
handleobject(user)
handleobject({
    username:"anu",
    prices:"546"
})

const mynewarray=[20,24,60,80]

function returnsecondvalue (getArray){
    return getArray[2]

}

console.log(returnsecondvalue(mynewarray))
console.log(returnsecondvalue([20,24,89,75]))