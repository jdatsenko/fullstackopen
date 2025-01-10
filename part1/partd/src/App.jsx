import { useState } from 'react'
import Button from './Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  ]
  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

  // const points = { 0: 0, 1: 0, 2: 0, 3: 0 };

  const voteAnecdote = () => {
    const copy = { ...points };
    copy[selected] += 1;
    setPoints(copy);
  };

  const changeAnecdote = () => {
    const random = Math.floor(Math.random() * 4);
    setSelected(random)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has points: {points[selected]}</p>
      <Button handleClick={changeAnecdote} text="next anecdote" />
      <Button handleClick={voteAnecdote} text="vote" />
    </div>
  );
}

export default App