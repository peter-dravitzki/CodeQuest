import { useState } from 'react'
import { getQuestions } from '../apis/dummydata'

const questions = getQuestions()

// export default function Question() {
//   return (
//     <>
//       <div>
//         {questions.map((question) => (
//           <div key={question.id}>{question.question}</div>
//         ))}
//       </div>
//     </>
//   )
// }

export default function Question() {
  // Initialize the state for the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleNextQuestion = () => {
    // Move to the next question if available, otherwise loop back to the first question
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length)
  }

  return (
    <>
      <div className="container-question">
        <div className="question-box" key={questions[currentQuestionIndex].id}>
          {questions[currentQuestionIndex].question}
        </div>
      </div>
      <div className="container-question-button">
        <button className="next-q-button" onClick={handleNextQuestion}>
          Next Question
        </button>
      </div>
    </>
  )
}
