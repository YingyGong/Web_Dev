import { useState } from 'react'
import './App.css'
import  BaristaFrom from './Components/BaristaForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="title-container">
        <h1 className='title'> On My Grind </h1>
        <p> So you think you can barista? Let's put that to the test ...</p>
      </div>
      <BaristaFrom />
    </div>

  )
}

export default App
