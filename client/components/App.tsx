import { Answers } from './Answers.tsx'
import Header from './Header.tsx'
import Question from './Question.tsx'

function App() {
  // const { data } = useFruits()

  return (
    <>
      <Header />
      <Question />
      <Answers />
      {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
    </>
  )
}

export default App
