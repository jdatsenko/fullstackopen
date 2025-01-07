const History = ({allClicks}) => {
  if (allClicks.length == 0) {
    return (
      <>
        <p>The app is used by pressing buttons</p>
      </>
    );
  }
  return (
    <>
        button press history: {allClicks.join(' ')}
    </>
  )
};

export default History;
