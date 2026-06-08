let randomNumber = parseInt(Math.random()*100+1)

const submit=document.querySelector("#subt")
const guessSlot=document.querySelector(".guesses")
const lowOrhi=document.querySelector(".lowOrHi")
const remaining=document.querySelector(".lastResult")
const  userInput=document.querySelector("#guessField")
const startOver=document.querySelector(".resultParas")
const p=document.createElement("p")

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1 || guess>100){
        alert("please enter a number betweebn 1 to 100")

    }
    else{
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game over : Radnow number is ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage("your guess is correct")
        endGame()
    }
    else if(guess <randomNumber){
        displayMessage("your guess is less than random number")
    }
    else if(guess>randomNumber){
        displayMessage("your guess is greater than random number")

    }
    else{
     
    }
}
function displayGuess(guess){
    userInput.value=""
    guessSlot.innerHTML+=`${guess}, `    
    numGuess++
    remaining.innerHTML=Math.max(11-numGuess,0)
    prevGuess.push(guess)
}
function displayMessage(message){
    lowOrhi.innerHTML= `<h3>${message}</h3>`
    
}

function endGame(){
    userInput.value=""
    userInput.setAttribute("disabled","")
    p.classList.add("button")
    p.innerHTML=`<h2 id="startGame">start a new game</h2>`
    startOver.appendChild(p)
    playGame=false
    startGame()

    
}
function startGame(){
    const newgame=document.querySelector("#startGame")
    newgame.addEventListener("click" ,function(e){
     // e.preventDefault()
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    userInput.removeAttribute("disabled")
    guessSlot.innerHTML=""
    playGame=true

    startOver.removeChild(p)
    })
    
}