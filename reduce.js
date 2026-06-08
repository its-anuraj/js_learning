const mynums=[1,2,3]

const mytotal=mynums.reduce(function(acc,currval){
    return acc+currval
},0)
console.log(mytotal);

const mytotal1=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal1);


const shoppingcart=[
    {
        itemname:"py course",
        price:2999
    },
    {
        itemname:"js course",
        price:999
    }
]

const pricetopay =shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);

const arr=[3,7,2,9,5]
const max=arr.reduce((max,val)=>val>max? val:max,arr[0])
console.log(max);


// Math.max(...arr);

//👉 Ye bhi same kaam karega 😎