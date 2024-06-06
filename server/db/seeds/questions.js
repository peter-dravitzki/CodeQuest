export async function seed(knex) {
  await knex('questions').del()
  await knex('questions').insert([
    { id: 1, question: 'banana', correct_answner_id: 1 },
    { id: 2, question: 'apple', correct_answner_id: 1 },
    { id: 3, question: 'feijoa', correct_answner_id: 1 },
  ])
}
