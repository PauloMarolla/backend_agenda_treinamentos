import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Clientes extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('empresa', ['SS', 'EC'])
      table.string('cpfcnpj')
      table.string('nome_razao')
      table.string('email')
      table.string('telefone')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
