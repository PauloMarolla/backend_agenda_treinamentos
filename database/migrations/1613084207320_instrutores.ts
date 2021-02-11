import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Instrutores extends BaseSchema {
  protected tableName = 'instrutores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('senha')
      table.boolean('ativo').defaultTo(true)
      table.string('email_ss')
      table.string('email_ec')
      table.string('nome_completo')
      table.timestamp('criado_em').nullable()
      table.timestamp('atualizado_em').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
