import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Agendamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: string

  @column()
  public treinamento_id: number

  @column()
  public cliente_id: number

  @column()
  public observacao: string

  @column()
  public agendado_por: string

  @column.dateTime({ autoCreate: true, serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss') })
  public agendado_em: DateTime
}
