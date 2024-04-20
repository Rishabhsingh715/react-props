import { useState } from 'react'
import './App.css'
import Cars from './components/cars'

function App() {
  const [count, setCount] = useState(0)

  let car1={
    name: 'AMG',
    link: '	https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
  let car2={
    name: 'DODGE CHARGER',
    link: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=600'
  }

  return (
   <>
   <Cars car={car1}></Cars>
   <Cars car={car2}></Cars>
   </>
  )
}

export default App
