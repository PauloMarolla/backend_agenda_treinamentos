import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Agendamentos extends BaseSchema {
  protected tableName = 'agendamentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('status', ['finalizado', 'cancelado', 'pendente'])
      table
      .integer('treinamento_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('treinamentos')
      table
      .integer('cliente_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('clientes')
      table.string('observacao')
      table.string('agendado_por').nullable()
      table.dateTime('agendado_em')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
