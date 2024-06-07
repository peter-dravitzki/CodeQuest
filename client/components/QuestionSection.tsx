import { useState } from 'react'
import { Question } from '../../models/questions'
import { Answers } from './Answers'

interface Props {
  questions: Question[]
}

export default function QuestionSection({ questions }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionObj = questions[currentQuestion]

  const handleNextQuestion = () => {
    setCurrentQuestion((currentQuestion + 1) % questions.length)
  }

  return (
    <>
      <div>Question:</div>
      <div>{questionObj.question}</div>
      <button onClick={handleNextQuestion}>Next Question</button>
      <Answers
        answer={questionObj}
        setCurrentQuestion={setCurrentQuestion}
        handle={undefined}
      />
    </>
  )
}
