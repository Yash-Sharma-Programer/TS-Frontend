import React from 'react'
import { useState, useRef } from 'react'

const Player = () => {
  const palyerName = useRef("")


  const [enteredPlayerName, setEnteredPlayerName] = useState(null)


  function handleClick() {
    setEnteredPlayerName(palyerName.current.value)
    palyerName.current.value = ''
  }


  return (
    <>
     
      <section id="player">
        <h2>Welcome {enteredPlayerName ?? "Unknown entity"}</h2>
        <p>
          <input ref={palyerName} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    </>
  )
}

export default Player
