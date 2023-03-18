import { useState } from "react";
import Die from "./Die.js";

function App() {
  const [randomNumbers, setRandomNumbers] = useState(allNewDice)

  function allNewDice(){
    const newDie = []

    for(let i = 0; i < 10; i++){
      newDie.push(Math.floor(Math.random() * 6))
    }

    return newDie
    
  }
  function handleClick(){
    setRandomNumbers(allNewDice())
  }
  const diceElement = randomNumbers.map((item)=>{
    return(
      <Die value={item}/>
    )
  })


  return (
    <main>
      <div className="dice-container">
                {diceElement}
      </div>
      <button className="roll-dice" onClick={handleClick}>Roll Dice</button>
    </main>
  );
}

export default App;
