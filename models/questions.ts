interface CorrectAnswer {
  id: number
  answer: string
}

// Interface for Question
interface Question {
  id: number
  question: string
  correctAnswerId: number
  correctAnswer?: CorrectAnswer
  falseAnswers?: FalseAnswer[]
}

// Interface for FalseAnswer
interface FalseAnswer {
  id: number
  answer: string
  questionId: number
  question?: Question
}
