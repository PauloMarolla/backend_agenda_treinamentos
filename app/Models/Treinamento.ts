import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Treinamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ativo: boolean

  @column()
  public nome: string

  @column()
  public sistema_id: number

  @column()
  public instrutor_id: number

  @column.dateTime({serialize: (value) => value.toFormat('HH:mm:ss') })
  public inicio: DateTime

  @column()
  public duracao: number

  @column.dateTime({ autoCreate: true, serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss') })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss') })
  public atualizado_em: DateTime
}
