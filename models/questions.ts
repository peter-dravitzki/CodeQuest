export interface CorrectAnswer {
  id: number
  answer: string
}

// Interface for Question
export interface Question {
  id: number
  question: string
  correctAnswer: CorrectAnswer
  answer1: string
  answer2: string
  answer3: string
}

// Interface for FalseAnswer
export interface FalseAnswer {
  id: number
  answer1: string
  answer2: string
  answer3: string
  question: Question
}
