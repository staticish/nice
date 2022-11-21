import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import CountUp from 'react-countup';

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        // let a = [".", "..", "...", "....", ".....", "......"]
        // let b = Math.floor(Math.random() * 6)  
    
        return {
            value: Math.floor(Math.random() * 6) + 1 ,
            isHeld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    const [rollCount, setRollCount] = React.useState(0)
    function rollDice() {

        if(!tenzies) {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setRollCount(-1)
            
        }
      
        console.log(rollCount)
            setRollCount(prev => prev + 1)
    }
    const counter = { 
     
    }
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    localStorage.setItem("Best Roll Count", rollCount)
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
           
        />
    ))
    
    return (
        <main>
        <div>
        { tenzies === false &&
         <CountUp 
       end={1000} 
       duration = {1300}
          prefix = "Timer: "
          suffix = " sec"

      />
        }
    
      </div>
        
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. 
            Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            Number of Rolls: {rollCount}
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
           
                {tenzies ? "New Game" : "Roll"}
            </button>
            
        </main>
    )
}