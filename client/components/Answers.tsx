import AnswerButton from './AnswerButton'
import { getQuestions } from '../apis/dummydata'

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const answers = getQuestions()

export function Answers() {
  const correct_answer = answers.map((el) => {
    return el.correctAnswer.answer
  })

  const first = correct_answer[0]

  // const false_Answers = answers.map((el) => {
  //   return el.falseAnswers
  // })

  // const second = false_Answers[1]
  // const arrayFalse = second.map((el) => {
  //   return el.answer
  // })

  const false_answer1 = answers.map((el) => {
    return el.falseAnswers.answer1
  })
  const false_answer2 = answers.map((el) => {
    return el.falseAnswers.answer2
  })
  const false_answer3 = answers.map((el) => {
    return el.falseAnswers.answer3
  })
  const second = [false_answer1[0], false_answer2[0], false_answer3[0]]

  console.log(second)

  const array = [...second, first]
  console.log(array)

  const shuffledArray = shuffleArray([...array])

  return (
    <>
      <div>
        {shuffledArray.map((el, index) => {
          return <AnswerButton answer={el === first} element={el} key={index} />
        })}
      </div>
    </>
  )
}
