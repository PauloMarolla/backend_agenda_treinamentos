import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Instrutore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email_ss: string

  @column()
  public email_ec: string

  @column()
  public ativo: boolean

  @column.dateTime({ autoCreate: true, serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss') })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss') })
  public atualizado_em: DateTime
}
