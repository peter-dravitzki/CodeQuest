import request from 'superagent'
import { Question } from '../../models/questions'

const rootUrl = '/api/v1/'

// const dummyData: Question[] = [
//   {
//     id: 1,
//     question: 'What is the capital of France?',
//     correctAnswerId: 1,
//     correctAnswer: { id: 1, answer: 'Paris' },
//     falseAnswers: {
//       id: 1,
//       answer1: 'London',
//       answer2: 'Mashhad',
//       answer3: 'Rome',
//       question_id: 1,
//     },
//   },
//   {
//     id: 2,
//     question: "Who wrote 'Romeo and Juliet'?",
//     correctAnswerId: 5,
//     correctAnswer: { id: 5, answer: 'William Shakespeare' },
//     falseAnswers: {
//       id: 2,
//       answer1: 'writer1',
//       answer2: 'writer2',
//       answer3: 'writer3',
//       question_id: 2,
//     },
//   },
//   {
//     id: 3,
//     question: 'What is the chemical symbol for water?',
//     correctAnswerId: 9,
//     correctAnswer: { id: 9, answer: 'H2O' },
//     falseAnswers: {
//       id: 3,
//       answer1: 'C02',
//       answer2: 'NACL',
//       answer3: 'ZR',
//       question_id: 2,
//     },
//   },
// ]

export async function getQuestions(): Promise<Question[]> {
  const response = await request.get(rootUrl + 'questions')
  return response.body
}
