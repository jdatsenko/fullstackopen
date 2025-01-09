import React, { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

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
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />
    </>
  )
}

export default App