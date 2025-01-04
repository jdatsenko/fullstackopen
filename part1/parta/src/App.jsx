import Hello from './Hello'

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  const array = ['No', 'whitespace']
  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <p>{a} + {b} = {a + b}</p>
      <Hello name='Dmytro' />
      <p>{array}</p>
    </>
  )
}

export default App