const myobj={
    "game1":"nfs",
    "game2":"spiderman"
}

// for (const [key,value] of myobj) {
//     console.log(key,":-",value);
    
// } //it not works ,

for (const key in myobj) {
    console.log(key)
}
for (const key in myobj) {
    console.log(myobj[key])
}


const programming=["js","rb","html"]
for (const key in programming) {
    console.log(key);
    
    
    
}
for (const key in programming) {
    console.log(programming[key]);
    
    
    
}