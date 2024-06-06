import { Question } from '../../models/questions'

export const dummyData: Question[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    correctAnswerId: 1,
    correctAnswer: { id: 1, answer: 'Paris' },
    falseAnswers: [
      { id: 2, answer: 'Berlin', questionId: 1 },
      { id: 3, answer: 'London', questionId: 1 },
      { id: 4, answer: 'Madrid', questionId: 1 },
    ],
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    correctAnswerId: 5,
    correctAnswer: { id: 5, answer: 'William Shakespeare' },
    falseAnswers: [
      { id: 6, answer: 'Charles Dickens', questionId: 2 },
      { id: 7, answer: 'Jane Austen', questionId: 2 },
      { id: 8, answer: 'Leo Tolstoy', questionId: 2 },
    ],
  },
  {
    id: 3,
    question: 'What is the chemical symbol for water?',
    correctAnswerId: 9,
    correctAnswer: { id: 9, answer: 'H2O' },
    falseAnswers: [
      { id: 10, answer: 'CO2', questionId: 3 },
      { id: 11, answer: 'NaCl', questionId: 3 },
      { id: 12, answer: 'NH3', questionId: 3 },
    ],
  },
]
