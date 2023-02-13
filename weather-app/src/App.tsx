import { useState } from 'react'
import './index.css'

function App() {
  const [color,setColor] = useState(`rgb(255,255,255)`)
  const RandomColor = ():void =>{
    let r:number = Math.floor(Math.random()*255);
    let g:number = Math.floor(Math.random()*255);
    let b:number = Math.floor(Math.random()*255);
    setColor(`rgb(${r},${g},${b})`)
  }

  return (
    <div className="app" style={{backgroundColor:color}}>
      <button onClick={RandomColor}>Generate</button>
      <p>Current color is: {color}</p>
    </div>
  )
}

export default App
