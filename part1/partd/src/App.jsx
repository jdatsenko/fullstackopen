import React, { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setClicks({...clicks, left: clicks.left + 1})
    setAll(allClicks.concat('L'))
    setTotal(clicks.left + clicks.right)
  }
  const handleRightClick = () => {
    setClicks({...clicks, right: clicks.right + 1})
    setAll(allClicks.concat('R'))
    setTotal(clicks.left + clicks.right)
  }

  return (
    <>
      {clicks.left}
      <button onClick = {handleLeftClick}>left</button>
      <button onClick = {handleRightClick}>right</button>
      {clicks.right}

      {allClicks.join(' ')}
      {/* one less, because of the async */}
      <p>total {total}</p>
    </>
  )
}

export default App