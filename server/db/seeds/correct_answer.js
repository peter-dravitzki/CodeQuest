import * as fs from 'node:fs/promises'

export async function seed(knex) {
  // Deletes ALL existing entries
  const questions = JSON.parse(
    await fs.readFile('../storage/questions.json', 'utf8'),
  )
  await knex('correct_answer').del()

  // Inserts seed entries
  for (let el of questions.questions) {
    await knex('correct_answer').insert({
      answer: el.correct_answer,
    })
  }
}
