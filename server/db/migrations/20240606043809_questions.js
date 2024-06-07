export async function up(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id')
    table.string('question')
    table.string('correct_answer')
    table.string('answer1')
    table.string('answer2')
    table.string('answer3')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('questions')
}
