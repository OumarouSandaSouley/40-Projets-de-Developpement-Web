//  JavaScript Rock, Paper, Cisor Game by Oumarou Sanda Souley 
// Github: https://github.com/OumarouSandaSouley
// Tel: +237690726925
// All rights reserved 


const launchBtn = document.querySelector('#btn')
const launchBox = document.querySelector('#launch')
const options = document.querySelector('#options')
const tips = document.querySelector('#tips')
const results = document.querySelector('#results')
const result = document.querySelector('#result')
const meChoice = document.querySelector('#me')
const pcChoice = document.querySelector('#pc')
const startGame = () =>{
    launchBox.style.display = "none"
    options.style.display = "flex"
    tips.style.display = "block"
    results.style.display = "none"
}


const handlePCChoice = () =>{
    let choices = ["rock", "paper", "cisor"]
    let pos = Math.floor(Math.random()*3)
    return choices[pos]
}


const handleResults = (res) =>{
    if (res == "win") {
        result.innerHTML = "Bravo, Vous avez gagné !!!"
        result.classList.add('success')
        console.log("first")
    } else if (res == "null") {
        result.innerHTML = "Match null, pas de chance !"
        result.classList.add('null')
        console.log("second")
    } else {
        result.innerHTML = "Oh non vous avez perdu !"
        result.classList.add('fail')
        console.log("third")
    }
    results.style.display = "block"
    launchBox.style.display = "flex"
}

const handleChoices = (choise) =>{
    options.style.display = "none"
    results.style.display = "block"
    let res = ""
    let pc = handlePCChoice()
    meChoice.innerHTML = choise
    pcChoice.innerHTML = pc
    if ((choise == 'rock' && pc == 'cisor') || (choise == 'paper' && pc == 'rock') || (choise == 'cisor' && pc == 'paper')) {
        res = "win"
    } else if (choise == pc) {
        res = "null"
    } else {
        res = "lost"
    }
    handleResults(res)
    console.log(choise)
    console.log(pc)
    console.log(res)
}


launchBtn.addEventListener('click', ()=>{
    startGame()
})