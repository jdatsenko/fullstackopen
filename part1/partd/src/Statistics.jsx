import React, { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const positivePercentage = all > 0 ? (good * 100) / all : 0;

  return (
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {good * 1 + bad * -1}</p>
      <p>positive {positivePercentage.toFixed(1)}</p>
    </>
  );
};

export default Statistics;
