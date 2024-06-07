export async function up(knex) {
  return knex.schema.createTable('false_answers', (table) => {
    table.increments('id')
    table.string('answer1')
    table.string('answer2')
    table.string('answer3')
    table.string('question')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('false_answers')
}
