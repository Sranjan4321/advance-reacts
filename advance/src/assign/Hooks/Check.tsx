import React from 'react'
import useTimer from './useTimer'
const Check = () => {
    const {time,start,stop,reset}=useTimer(5)
  return (
    <div>
        <h1>Use Time Custom Hooks</h1>
        <h2>{time}</h2>
       <button onClick={start}>start timer</button>
       <button onClick={stop}>stop timer</button>
       <button onClick={reset}>Reset timer</button>
    </div>
  )
}

export default Check