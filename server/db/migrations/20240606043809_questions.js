export async function up(knex) {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id')
    table.string('question')
    table.integer('correct_answer_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('questions')
}
