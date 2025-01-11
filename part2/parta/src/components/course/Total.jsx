const Total = ({ parts }) => {
  const sum = parts.reduce((calc, currectValue) => calc + currectValue.exercises, 0)

  return (
    <>
      <p>Total of {sum} exercises</p>
    </>
  );
};

export default Total;
