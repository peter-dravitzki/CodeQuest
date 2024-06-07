import AnswerButton from './AnswerButton'
import { getQuestions } from '../apis/apiClient'
import { Question } from '../../models/questions'

interface Props {
  answer: Question
  setCurrentQuestion: (num) => void
  handle
}

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

// const answers = getQuestions()

export function Answers({ answer }: Props) {
  const correct_answer = answer['correct_answer']
  // IGNORE THIS ERROR ^

  const first = correct_answer
  console.log('Correct:', correct_answer)
  // console.log('answers:', answers)

  // const false_Answers = answers.map((el) => {
  //   return el.falseAnswers
  // })

  // const second = false_Answers[1]
  // const arrayFalse = second.map((el) => {
  //   return el.answer
  // })

  const second = [answer.answer1, answer.answer2, answer.answer3]

  const array = [...second, first]

  const shuffledArray = shuffleArray([...array])

  return (
    <>
      <div className="button-container">
        <div className="button">
          {shuffledArray.map((el, index) => {
            return (
              <AnswerButton answer={el === first} element={el} key={index} />
            )
          })}
        </div>
      </div>
    </>
  )
}
