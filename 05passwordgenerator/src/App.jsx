import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const[length, setLength] = useState(8);
  const[numbersAllowed, setNumbersAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(()=>{ 
    let pass = "" ; 
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; 
    if(numbersAllowed) letters += "0123456789";
    if(charAllowed) letters += "!@#$%^&*()-_+=<>?";

    for(let i=1; i <= length; i++){
    let char = Math.floor((Math.random() * letters.length) + 1);
    pass += letters.charAt(char);
    }
    setPassword(pass);   
  }, [length , numbersAllowed , charAllowed ]);
 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()

    // This setSelectionRange() method is for optimistaion
    passwordRef.current?.setSelectionRange(0 , 50) 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  } , [length , numbersAllowed , charAllowed , passwordGenerator])

  
  return (
    
       <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-800'>

       <h1 className='mt-3 mb-8 text-4xl font-extrabold  text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ' 
     >Password Generator</h1>

     <div className='flex  rounded-lg overflow-hidden mb-6
     '>
      <input 
       type='text'
       value={password}
       className='outline-none w-full py-1 px-3 text-lg'
       placeholder='password'
       readOnly
       ref={passwordRef}
       />
       <button 
       onClick={copyPasswordToClipboard}
       className='border-4 border-indigo-200 border-x-indigo-500
       py-2 px-3  text-white 
       hover:bg-gradient-to-r from-pink-500 to-violet-500
       transition ease-in-out delay-150 hover:-translate-x-0.5 hover:scale-105'>Copy</button>
     </div>

     <div className='flex text-sm gap-x-3'>
      <div className='flex items-center gap-x-1'>
        <input
        type="range"
        min={6}
        max={50}
        value={length}
        className='cursor-pointer accent-emerald-500/25'
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
        </div>

      <div className='flex text-sm gap-x-1 accent-pink-500'>
          <input
           type='checkbox'
           defaultChecked={numbersAllowed}
           id='numberInput'
           onChange={() => { setNumbersAllowed((prev) => !prev) }}
          />
            <label htmlFor='numberInput'>Numbers</label>
      </div>
           
     <div className='flex text-sm gap-x-1  accent-pink-500'>
          <input
           type='checkbox'
           defaultChecked={charAllowed}
           id='characterInput'
           onChange={() => { setCharAllowed((prev) => (!prev)) }}
          />
            <label htmlFor='characterInput'>Character</label>
     </div>

     </div>
      </div>  
    
  )
}

export default App
