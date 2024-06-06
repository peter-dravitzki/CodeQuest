export async function up(knex) {
  return knex.schema.createTable('correct_answer', (table) => {
    table.increments('id')
    table.string('answer')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('correct_answer')
}
