export interface CorrectAnswer {
  id: number
  answer: string
}

// Interface for Question
export interface Question {
  id: number
  question: string
  correctAnswerId: number
  correctAnswer: CorrectAnswer
  falseAnswers: FalseAnswer
}

// Interface for FalseAnswer
export interface FalseAnswer {
  id: number
  answer1: string
  answer2: string
  answer3: string
  question_id: number
}
