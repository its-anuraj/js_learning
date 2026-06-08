let mydate=new Date()
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toJSON())
console.log(mydate.toLocaleString())


let mycreateddate= new Date(2026,0,23)
console.log(mycreateddate.toDateString())


let mycreateddate1=new Date("01-14-2023")
console.log(mycreateddate1.toLocaleString())


let mytimestamp=Date.now()

console.log(mytimestamp)
console.log(mycreateddate.getTime())
console.log(Math.floor(Date.now()/1000))


let newdate=new Date()
console.log(newdate)
console.log(newdate.getDate())
console.log(newdate.getDay())
console.log(newdate.getHours())
console.log(newdate.getMonth()+1)

