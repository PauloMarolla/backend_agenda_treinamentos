import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sistemas extends BaseSchema {
  protected tableName = 'sistemas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('empresa', ['SS', 'EC'])
      table.string('sigla')
      table.string('nome')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
