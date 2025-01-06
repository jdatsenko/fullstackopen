import { useState } from 'react'
import Button from './Button'

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <>
      <div>{counter}</div>
      <Button onClick = {increaseByOne} text="plus" />
      <Button onClick = {decreaseByOne} text="minus" />
      <Button onClick = {setToZero} text="to zero" />
    </>
  )
}

export default App