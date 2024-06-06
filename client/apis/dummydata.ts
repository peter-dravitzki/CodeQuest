export interface Question {
  id: number
  question: string
  correctAnswerId: number
  correctAnswer: { id: number; answer: string }
  falseAnswers: { id: number; answer: string }[]
}

export const dummyData: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    correctAnswerId: 1,
    correctAnswer: { id: 1, answer: 'Paris' },
    falseAnswers: [
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'London' },
      { id: 4, answer: 'Madrid' },
    ],
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    correctAnswerId: 5,
    correctAnswer: { id: 5, answer: 'William Shakespeare' },
    falseAnswers: [
      { id: 6, answer: 'Charles Dickens' },
      { id: 7, answer: 'Jane Austen' },
      { id: 8, answer: 'Leo Tolstoy' },
    ],
  },
  {
    id: 3,
    question: 'What is the chemical symbol for water?',
    correctAnswerId: 9,
    correctAnswer: { id: 9, answer: 'H2O' },
    falseAnswers: [
      { id: 10, answer: 'CO2' },
      { id: 11, answer: 'NaCl' },
      { id: 12, answer: 'NH3' },
    ],
  },
]
