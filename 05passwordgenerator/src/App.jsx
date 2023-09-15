import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[length, setLength] = useState(8);
  const[numbersAllowed, setNumbersAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("")
  
  const passwordGenerator = useCallback(()=>{ 
    let pass = "" ; 
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const number = "0123456789";
    const char = "!@#$%^&*()-_+=<>?";
    if(numbersAllowed) pass += number;
    if(charAllowed) pass += char;

    for(let i=1; i <= length; i++){
    char = Math.floor((Math.random() * letters.length) + 1);
    pass += letters.charAt(char);
    }
    setPassword(pass);
      
  },[length , numbersAllowed , charAllowed , setPassword]);


  

  return (
    <>
      <div className='w-full  h-screen bg-green-100'>
       
       <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 my-6 text-orange-500 bf-gray-700'>

       
      <h1 className='text-5xl font-extrabold  text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500  ' 
     >Password Generator</h1>
      </div>
    </div>
     
     

    
    </>
  )
}

export default App
