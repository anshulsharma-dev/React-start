import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


// const reactElement = {
//     type: "a",
//     props:{
//         href:"https://www.google.com",
//         target:"_blank"
//     },
//     children:"Click me to visit google"
// }


// function App() {
//     return (
//         <>
//       Coffe is ready

//         </>
//     )
//   }


// const anotherElement = (
//       <a href='https://www.google.com' target='_blank'>Click me to visit google </a>
// )

const anotherUser = "This is another variable inside the name anotherUser"

const reactElement = React.createElement(
    'a',
    {href: 'https://www.google.com'},
    'Click me to visit Google!',
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root'))
.render(
    //  <App/>
    // App()
    // anotherElement

    reactElement
    
)
