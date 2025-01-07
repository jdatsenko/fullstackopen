import React, { useState } from 'react'
import History from './History'

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1})
    setAll(allClicks.concat('L'))
  }
  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})
    setAll(allClicks.concat('R'))
  }

  return (
    <>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <History allClicks={allClicks} />
    </>
  )
}

export default App