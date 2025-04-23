import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar } from './Components/Navbar';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {List} from './Components/List'
 

function App() {
  

  return (

    <div>
      <div>
        <Navbar/>
      </div>
      
      <div>
        <Header/>
      </div>

      <div> <List/> </div>
      
      <div>
        <Footer/>
      </div>

    </div>
    
    
    
  )
}

export default App
