import { useState } from "react"

const useWorld = (solution) => {

const [turn, setTurn] = useState(0)
const [currentGuess, setCurrentGuess] = useState('')
const [guesses, setGuesses] = useState([]) // each guess is an array
const [history, setHistory] = useState(['hello', 'ninja']) // each guess is a string
const [isCorrect, setIsCorrect] = useState(false)


//format a new guess into an array of letter objects
const formatGuess = () => {
let solutionArray = [...solution]
let formattedGuess = [...currentGuess].map((l) => {
return {key: l, color: 'grey'}
})

// find any green letters 
formattedGuess.forEach((l, i) => {
    if (solutionArray[i] === l.key){
        formattedGuess[i].color = 'green'
        solutionArray[i] = null
    }
})

formattedGuess.forEach((l, i) => {
   if (solutionArray.includes(l.key) && l.color !== 'green'){
    formattedGuess[i].color = 'yellow'
    solutionArray[solution.indexOf(l.key)] = null
    
   }
})

return formattedGuess

}

// add a new guess to the guesses state
// update the isCorrect state if the guess is correct
//add one to the turn state
const addNewGuess = () => {

}

//handle keyup event and track current guess
//if user presses enter, and the new guess.

const handleKeyUp = ({ key }) => {
if (key === 'Enter') {
    if(turn > 5) {
    console.log('You have used all your guesses.')
    return 
    }
    if(history.includes(currentGuess)){
        console.log('You already tried that word')
        return
    }
    if(currentGuess.length !== 5){
        console.log('Word must be 5 chars long')
        return
    }
    const formatted = formatGuess()
    console.log(formatted)
}
if(key === 'Backspace') {
    setCurrentGuess((prev) => {
        return prev.slice(0, -1)
    })
    return
}
if (/^[A-Za-z]$/.test(key)){
    if(currentGuess.length < 5){
        setCurrentGuess((prev) => {
        return prev + key
        })
    }
}
}

return {turn, currentGuess, guesses, isCorrect, handleKeyUp}

}


export default useWorld