import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Usuarios extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.string('email').unique()
      table.string('email_secundario').nullable().defaultTo(null)
      table.string('password').notNullable()
      table.boolean('ativo').defaultTo(true)
      table.enum('empresa', ['SS', 'EC'])
      table.enum('grupo', ['admin', 'usuario', 'lider', 'convidado']).defaultTo('usuario')
      table.string('avatar').nullable().defaultTo(null)
      table.string('remember_me_token').nullable()
      table.timestamp('criado_em').nullable()
      table.timestamp('atualizado_em').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
