import { useQuery } from '@tanstack/react-query'
import { getQuestions } from '../apis/apiClient.ts'
import Header from './Header.tsx'
import QuestionSection from './QuestionSection.tsx'

function App() {
  // const { data } = useFruits()

  const {
    data: questions,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['questions'],
    queryFn: () => getQuestions(),
  })
  if (isError) {
    return error
  }
  if (isFetching) {
    return <p>...Loading</p>
  }
  if (questions) {
    console.log(questions[1])

    return (
      <>
        <div className="app">
          <Header />
          <QuestionSection questions={questions} />
          {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
        </div>
      </>
    )
  }
}

export default App
