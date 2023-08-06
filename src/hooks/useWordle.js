import { useState } from "react"

const useWorld = (solution) => {

const [turn, setTurn] = useState(0)
const [currentGuess, setCurrentGuess] = useState("")
const [guesses, setGuesses] = useState([]) // each guess is an array
const [history, setHistory] = useState([]) // each guess is a string
const [isCorrect, setIsCorrect] = useState(false)


//format a new guess into an array of letter objects
const formatGuess = () => {

}

// add a new guess to the guesses state
// update the isCorrect state if the guess is correct
//add one to the turn state
const addNewGuess = () => {

}

//handle keyup event and track current guess
//if user presses enter, and the new guess.

const handleKeyUp = () => {

}

}


export default useWorld