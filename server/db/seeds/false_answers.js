export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('false_answers').del()

  // Inserts seed entries
  await knex('false_answers').insert([
    { id: 1, answer: 'banana', question_id: 1 },
    { id: 2, answer: 'apple,', question_id: 1 },
    { id: 3, answer: 'feijoa', question_id: 1 },
  ])
}
