export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('correct_answer').del()

  // Inserts seed entries
  await knex('correct_answer').insert([
    { id: 1, answer: 'banana' },
    { id: 2, answer: 'apple' },
    { id: 3, answer: 'feijoa' },
  ])
}
