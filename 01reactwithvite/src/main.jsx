import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {

    return (
     <h1>
        Chai aur React - function h in main file
     </h1>
    )
  }

//   const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank'

//     },
//     children : 'You can Visit google from here !'
// }
const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)
const Name =  'Avika Chauhan'
const reactElement = React.createElement(
    'a',
    {
        href:"https://google.com",
        target : '_blank'
    },
    'You can visit google',
    Name
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
   <App/>
  
)
