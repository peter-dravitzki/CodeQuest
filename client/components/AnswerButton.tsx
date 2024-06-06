import { useState } from 'react'

interface Options {
  element: string
  answer: boolean
}

export default function AnswerButton(props: Options) {
  const el = props.element
  const answer = props.answer
  const [selected, setSelected] = useState(false)

  function handleClick() {
    if (answer) {
      setSelected(true)
      // style={{ background: answer ? '#1CAC78' : '#A9A9A9' }}
      console.log('Correct Answer Selected')
    } else {
      setSelected(false)
      console.log('Incorrect Answer Selected')
    }
  }

  return (
    <button
      style={{ background: selected && answer ? '#1CAC78' : '#A9A9A9' }}
      onClick={handleClick}
    >
      {el}
    </button>
  )
}
