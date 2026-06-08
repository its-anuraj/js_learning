const numbers=[1,2,3,4,5,6,7,8,9,10]

const newNums=numbers.map((num)=>num+10)
console.log(newNums);


const newNums1=numbers
                      .map((num)=>num*10)
                      .map((num)=>num+1)
                      .filter((num)=> num>40)
console.log(newNums1);



// map() always new array return karta hai
// ✔ original array change nahi hota
// ✔ har element pe same logic apply hota hai


// left to right execution
// Ek complete hota hai → fir next start hota hai
// ✔ Har step previous step ka output use karta hai

// 🔥 Ek line me:
// 👉 Left to right = pehla method complete → uska output next method ko → phir next…