const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)
// but using push is bad habit ,not prefer
console.log(marvel_heroes)
//console.log(marvel_heroes[3][1])



// concat can be usefull but also we use another method 
//concat return new array
const allheroes =marvel_heroes.concat(dc_heroes)
console.log(allheroes)


//prefer this one for concatinate
const all_new_heros=[...marvel_heroes,...dc_heroes]
console.log(all_new_heros)



const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array)

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("anuraj"))

console.log(Array.from("anuraj"))


let score=100
let score1=200
let score2=300
console.log(Array.of(score1,score,score2))




