export interface CorrectAnswer {
  id: number
  answer: string
}

// Interface for Question
export interface Question {
  id: number
  question: string
  correctAnswerId: number
  correctAnswer?: CorrectAnswer
  falseAnswers?: FalseAnswer[]
}

// Interface for FalseAnswer
export interface FalseAnswer {
  id: number
  answer: string
  questionId: number
  question?: Question
}
