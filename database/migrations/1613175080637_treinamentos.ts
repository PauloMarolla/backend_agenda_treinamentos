import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Treinamentos extends BaseSchema {
  protected tableName = 'treinamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      table.increments('id').primary()
      table.boolean('ativo').defaultTo(true)
      table.string('nome')
      table
      .integer('sistema_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('sistemas')
      .onDelete('CASCADE')
      table
      .integer('instrutor_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('instrutores')
      .onDelete('CASCADE')
      table.time('inicio')
      table.integer('duracao').comment('em minutos').nullable()

      table.timestamp('criado_em').nullable()
      table.timestamp('atualizado_em').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
