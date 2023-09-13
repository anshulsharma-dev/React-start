import Chai from "./chai"

function App() {
  const username = `"This is a variable inside{...}"`
  return (
    <>
    <Chai/>  
    <h1>The username is {username} </h1>
    </>
  )
}

export default App
