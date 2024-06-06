import { useState } from 'react'
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
  // const [color, setColor] = useState('#E8E8E8')
  const [answer, setAnswer] = useState(false)
  const dummyanswers = answers.map((el) => {
    return el.correctAnswer
  })
  // console.log(dummyanswers)
  const arraya = dummyanswers.map((el) => {
    return el.answer
  })
  // console.log(arraya)

  const shuffledArray = shuffleArray([...arraya])

  return (
    <>
      <div>
        {shuffledArray.map((el, index) => {
          return <AnswerButton answer={answer} element={el} key={index} />
        })}
      </div>
    </>
  )
}
