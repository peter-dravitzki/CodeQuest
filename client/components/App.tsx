import { useQuery } from '@tanstack/react-query'
import { getQuestions } from '../apis/apiClient.ts'
import { Answers } from './Answers.tsx'
import QuestionSection from './QuestionSection.tsx'
import { useState } from 'react'

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
          <h1>CodeQuest!</h1>
          <QuestionSection questions={questions} />
        </div>
      </>
    )
  }
}

export default App
