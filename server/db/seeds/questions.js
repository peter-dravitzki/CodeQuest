import * as fs from 'node:fs/promises'

export async function seed(knex) {
  const questions = JSON.parse(
    await fs.readFile('../storage/questions.json', 'utf8'),
  )

  await knex('questions').del()
  for (let el of questions.questions) {
    await knex('questions').insert([
      {
        question: el.question,
        correct_answer: el.correct_answer,
        answer1: el.answer1,
        answer2: el.answer2,
        answer3: el.answer3,
      },
      // { id: 1, question: 'banana', correct_answer_id: 1 },
      // { id: 2, question: 'apple', correct_answer_id: 1 },
      // { id: 3, question: 'feijoa', correct_answer_id: 1 },
    ])
  }
}
