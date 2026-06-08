const array=[0,1,2,3,4,5]
const  array1=[0,1,2,"anu","raj",20.22,36.22,true,false]
const array2=new Array(1,2,3,4)

console.log(array)
console.log(array1)


array.push(6)
array.push(7)
console.log(array)

array.pop()
console.log(array)


array.unshift(9)
console.log(array)

array.shift()
console.log(array)


console.log(array.includes(9))

const newarr=array.join()
console.log(array)
console.log(typeof newarr)

const myarray=array.slice(1,4)
console.log(myarray)
console.log(array)


const myarray1=array.splice(1,4)
console.log(myarray1)
console.log(array)











