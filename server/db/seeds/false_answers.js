export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('false_answers').del()

  // Inserts seed entries
  await knex('false_answers').insert([
    {
      id: 1,
      answer1: 'banaasdna',
      answer2: 'banana',
      answer3: 'banana',
      question_id: 1,
    },
    {
      id: 2,
      answer1: 'banasada',
      answer2: 'banana',
      answer3: 'banaasdna',
      question_id: 1,
    },
    {
      id: 3,
      answer1: 'banana',
      answer2: 'baasdnana',
      answer3: 'banana',
      question_id: 1,
    },
    {
      id: 4,
      answer1: 'banasdna',
      answer2: 'banana',
      answer3: 'banana',
      question_id: 1,
    },
  ])
}
