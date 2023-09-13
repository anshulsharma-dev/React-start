import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] =  useState(15)

  //  let counter = 5;

   const addValue = () => {

    if(counter >= 20){

      setCounter(counter)
    }else{

      // setCounter(counter + 1) 

        // This will only update the value by 1 because useState sends the updates on the variable as batches so as Fibre Algo can check that all the updates are same so it only updates it once
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 
      // setCounter(counter + 1) 
 
      // By this method we can update the value of counter by 4 times by clicking it just once , although this approach should not be used , as you have to figure out the main update to send
      // setCounter(() => {})
         setCounter(prevCounter => prevCounter+1)
         setCounter(prevCounter => prevCounter+1)
         setCounter(prevCounter => prevCounter+1)
         setCounter(prevCounter => prevCounter+1)
    }
    console.log("Added", counter)
   }

   const removeValue = () => {
    if(counter === 0){
      setCounter(counter)
    }else{
      setCounter(counter - 1)
    }
    console.log("Removed", counter)
   }

  return (
    <>
     <h1>Chai and React{counter}</h1>
     <h2>Counter value: {counter}</h2>

     <button 
     onClick={addValue}
     >Add Value{counter}</button>
     <br/> <br/>
     <button
     onClick={removeValue}
     >Remove value{counter}</button>
     
    </>
  )
}

export default App
