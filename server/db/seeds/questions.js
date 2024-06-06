export async function seed(knex) {
  await knex('questions').del()
  await knex('questions').insert([
    { id: 1, question: 'banana', correct_answer_id: 1 },
    { id: 2, question: 'apple', correct_answer_id: 1 },
    { id: 3, question: 'feijoa', correct_answer_id: 1 },
  ])
}
