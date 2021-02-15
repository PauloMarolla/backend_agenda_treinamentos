import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public empresa: string

  @column()
  public cpfcnpj: string

  @column()
  public nome_razao: string

  @column()
  public email: string

  @column()
  public telefone: string
}
