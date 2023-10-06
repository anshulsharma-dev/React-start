
import './App.css'

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  
  console.log(import.meta.env.VITE_APPWRITE_URL);
 

  return (
    <>
      <h1>This is a meta blog project</h1>
    </>
  )
}

export default App
