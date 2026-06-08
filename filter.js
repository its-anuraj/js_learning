const mynums=[1,2,3,4,5,6,7,8,9,10]

const newNums=mynums.filter ( (num)=> num>4)
console.log(newNums);

const filteredarr=mynums.filter((num)=> num%2==0)
console.log(filteredarr);


const newNums1=mynums.filter ( (num)=> {
   return num>4   // with scope spacing we need to use return keyword 
})
console.log(newNums);


const newnums2=[]
mynums.forEach( (num) => {
    if(num>5){
        newnums2.push(num)
    }
    
});

console.log(newnums2);

// for string filter 
//let/const (//try to use both) userbooks=books.filter((bk)=>bk.genre==="history")
//console.log("userbooks")