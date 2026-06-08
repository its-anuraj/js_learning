for (let i = 0; i < 10; i++) {
    const element = i;

    console.log(element);
    
    
}


for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j}=${i*j}`);
        
        
        
    }
}


let myarray=["flash","batman","superman"]
console.log(myarray.length);

for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
    
    
}


for (let i = 0; i < 20; i++) {
   if(i==5) {
    console.log("5 detected");
    break
    
   }
   console.log(`value of i ${i}`);
   
    
}

for (let i = 0; i < 20; i++) {
   if(i==5) {
    console.log("5 detected");
    continue
    
   }
   console.log(`value of i ${i}`);
   
    
}