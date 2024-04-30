import { React, useState, useEffect } from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid';


export default function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false)
    
  useEffect(() => {
      const allHeld = dice.every(die => die.isHeld)
      const firstValue = dice[0].value
      const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
          setTenzies(true)
          console.log("You won!")
      }
  }, [dice])



  function generateDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  // Generated Random Array with objects
  function allNewDice() {
    let randomArray = []
    for (let i = 0; i < 10; i++) {
      const x = generateDie()
      randomArray.push(x)
    }
    
    return randomArray
  }

  
  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
    
}
  // Mapping the array to display the dice
  let elements = dice.map((item) => { 
    return (
    <Die 
    key={item.id} 
    id={item.id}
    isHeld={item.isHeld}
    value={item.value}  
    onClick={() => { holdDice(item.id) }} />
  ) 

});


  // Hanldes the on click and sets the dice varaible 
  // to new dice each time the button is clicked
  function handleRoll() {

    
    setDice(oldDice => oldDice.map( die => {
      return die.isHeld ? die : generateDie()
    }));
  }

  return (
    <>
      <div className='flex justify-center items-center border border-black h-screen'>
        <main className='flex flex-wrap flex-row gap-10 justify-center items-center h-[auto] w-96 bg-[#F5F5F5] rounded-[10px] p-4'>
          <div className='flex flex-col justify-center items-center gap-3'>
              <h1 className='text-[25.6px] font-bold'>Tenzies</h1>
              <p className='max-w-[232.96px] text-center text-[13.11px] leading-4 text-[#4A4E74]'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          </div>
          <div className='flex flex-wrap gap-5 justify-center font-bold'>
            { elements }
          </div>
          <button className='w-[92.16px] h-[35.84px] bg-[#5035FF] text-white font-bold rounded-[3.81px]' onClick={handleRoll}>Roll</button>
        </main>
      </div>
    </>
  )
}


