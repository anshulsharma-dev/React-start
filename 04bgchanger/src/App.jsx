import { useState } from "react"

function App() {
  const [color , setColor] = useState("black")

  return (
    
     <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 -inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center bg-white px-4 py-2 rounded-3xl gap-3 shadow-xl">

          <button  onClick={() => setColor("red")}
           className="px-4 py-1 outline-none rounded-full shadow-3xl text-white" style={{backgroundColor:"red"}}>red</button>

          <button  onClick={() => setColor("green")}
            className="px-4 py-1 outline-none rounded-full shadow-3xl text-white" style={{backgroundColor:"green"}}>green</button>

          <button onClick={() => setColor("blue")}
            className="px-4 py-1 outline-none rounded-full shadow-3xl text-white" style={{backgroundColor:"blue"}}>blue</button>

          <button onClick={() => setColor("purple")}
          className="px-4 py-1 outline-none rounded-full shadow-3xl text-white" style={{backgroundColor:"purple"}}>purple</button>

          <button onClick={() => setColor("cyan")}
          className="px-4 py-1 outline-none rounded-full shadow-3xl text-black" style={{backgroundColor:"cyan"}}>cyan</button>

          <button onClick={() => setColor("olive")}
          className="px-4 py-1 outline-none rounded-full shadow-3xl text-white" style={{backgroundColor:"olive"}}>olive</button>

          <button onClick={() => setColor("orange")}
          className="px-4 py-1 outline-none rounded-full shadow-3xl text-white" style={{backgroundColor:"orange"}}>orange</button>

          <button onClick={() => setColor("yellow")}
          className="px-4 py-1 outline-none rounded-full shadow-3xl text-black" style={{backgroundColor:"yellow"}}>yellow</button>

        </div>
      </div>

      </div>
  
  )
}

export default App
