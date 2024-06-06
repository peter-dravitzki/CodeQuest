import { useState } from 'react'
import AnswerButton from './AnswerButton'
import { dummyData } from '../apis/dummydata'

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export function Answers() {
  // const [color, setColor] = useState('#E8E8E8')
  // const [answer, setAnswer] = useState(false)
  // const dummyanswers = dummyData.map((el) => {
  //   return el.correctAnswer
  // })
  // console.log(dummyanswers)
  // const arraya = dummyanswers.map((el) => {
  //   return el.answer
  // })
  // console.log(arraya)

  const correct_answer = dummyData.map((el) => {
    return el.correctAnswer.answer
  })

  const first = correct_answer[1]
  // console.log(first)
  // array.push(first)

  const false_Answers = dummyData.map((el) => {
    return el.falseAnswers
  })

  const second = false_Answers[1]
  const arrayFalse = second.map((el) => {
    return el.answer
  })
  const array = [...arrayFalse, first]
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
