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
      <div className="container-question">
        <div className="question-box">{questionObj.question}</div>
      </div>
      <div>
        <div className="container-question-button">
          <button className="next-q-button" onClick={handleNextQuestion}>
            Next Question
          </button>
        </div>

        <Answers
          answer={questionObj}
          setCurrentQuestion={setCurrentQuestion}
          handle={undefined}
        />
      </div>
    </>
  )
}
