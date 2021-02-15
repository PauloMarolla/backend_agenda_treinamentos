import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Sistema extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public empresa: string

  @column()
  public sigla: string

  @column()
  public nome: string
}
