const arr=[10,20,30,40,50,60,]
// delete
arr.splice(1,2)
console.log(arr)
// splice delete the element in original array

// Add
arr.splice(1,0,70,80,90)
console.log(arr)

//replace
const myarr=arr.splice(1,3,99)
console.log(arr)
console.log(myarr)


