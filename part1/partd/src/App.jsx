import React, { useState } from 'react'
import Statistics from './Statistics'

const App = () => {
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0})

  const handleGoodClick = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }

  const handleNeutralClick = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const handleBadClick = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neurtal</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </>
  )
}

export default App