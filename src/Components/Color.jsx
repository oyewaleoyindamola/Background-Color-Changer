import React, { useState } from 'react'

const Color = () => {
    const [color, changeBgcolor] = useState(["blue","pink","brown","aqua"])

const getRandom = ()=>{
    return Math.floor(Math.random()*color.length)
}
    const colorLooper = ()=>{
      changeBgcolor((prev)=>([...prev, color[getRandom()]]))
      changeBgcolor(color[getRandom()])
      console.log(color[getRandom()])
    }

  return (
    <div className="con" style={{backgroundColor : `${color}`}}>
        <p className='colorName'></p>
        <button onClick={colorLooper} className='changeColor'>change</button>
    </div>
  )
}

export default Color