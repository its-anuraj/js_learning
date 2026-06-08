// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
    
}

const greetings="hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}


// maps -- holds key value pair,uniuqe value,remains the  order

const map=new Map()
map.set("in","india")
map.set("usa","united states of ameraica")
map.set("fr","france")
console.log(map);

for (const [key] of map) {
    console.log(key);
    
}
for (const [key,value] of map) {
    console.log(key,":-",value);
    
}
// for in not work for map == map is not iteratable


