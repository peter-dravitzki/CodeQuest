import * as fs from 'node:fs/promises'

export async function seed(knex) {
  const questions = JSON.parse(
    await fs.readFile('../storage/questions.json', 'utf8'),
  )
  // Deletes ALL existing entries
  await knex('false_answers').del()

  // Inserts seed entries
  for (let el of questions.questions) {
    await knex('false_answers').insert({
      question: el.question,
      answer1: el.answer1,
      answer2: el.answer2,
      answer3: el.answer3,
    })
  }
}
