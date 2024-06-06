import { useFruits } from '../hooks/useFruits.ts'
import { Answers } from './Answers.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <Answers />
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
