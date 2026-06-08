const coding=["js","ruby","html"]
coding.forEach(
    function (item) {
        console.log(item);
        
    }  //callback function and callback function have no name
)


coding.forEach( (item)=>{
    console.log(item);
    
})


function printme(item){
    console.log(item);
    
}
coding.forEach(printme)  //here we have to give reference not function call


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
    
})

const mycoding=[
    {
        languagename:"javascript",
        languagefilename:'js'
    },
    {
        languagename:"python",
        languagefilename:'py'
    },
    {
        languagename:"javs",
        languagefilename:'java'
    }
]

mycoding.forEach( (item)=>{
    console.log(item.languagename);
    
})


// forEach loop return undefined
// it iterates only 
// we can't use break or continue here
// don't handle async or await property
