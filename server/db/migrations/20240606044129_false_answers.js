export async function up(knex) {
  return knex.schema.createTable('false_answers', (table) => {
    table.increments('id')
    table.string('answer')
    table.integer('question_id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('false_answers')
}
