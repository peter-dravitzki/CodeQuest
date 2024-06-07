import knex from 'knex'
import config from './knexfile.js'
import { CorrectAnswer } from '../../models/questions.js'
import { FalseAnswer } from '../../models/questions.js'
import { Question } from '../../models/questions.js'

type Environment = 'development' | 'production' | 'test'
const env = (process.env.NODE_ENV as Environment) || 'development'

const connection = knex(config[env])
//Correct Answer
//Create

//Read all
export async function getAllCorrectAnswers() {
  const correct_answers: CorrectAnswer[] = await connection('correct_answer')
  return correct_answers
}
//Read by Id
export async function getCorrectAnswerById(id: number) {
  const correct_answer: CorrectAnswer = await connection('correct_answer')
    .where({ id })
    .first()
  return correct_answer
}
//Update

//Delete

//False Answers

//Create

//Read all
export async function getAllFalseAnswers() {
  const false_answers: FalseAnswer[] = await connection('false_answers')
  return false_answers
}
//Read by Id
export async function getFalseAnswerById(id: number) {
  const false_answer: FalseAnswer = await connection('false_answers')
    .where({ id })
    .first()
  return false_answer
}
//Update

//Delete

//Questions

//Create

//Read all
export async function getAllQuestions() {
  const questions: Question[] = await connection('questions')
  return questions
}
//Read by Id
export async function getQuestionById(id: number) {
  const question: Question = await connection('questions')
    .join('false_answers', 'false_answers.id', 'questions.id')
    .where('questions.id', id)
    .select(
      'questions.id',
      'questions.question',
      'questions.correct_answer as correctAnswer',
      'false_answers.answer1 as answer1',
      'false_answers.answer2 as answer2',
      'false_answers.answer3 as answer3',
    )
  //console.log(question)

  return question
}
//Update

//Delete

export default connection
