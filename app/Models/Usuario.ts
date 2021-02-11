import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'


export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public email_secundario: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public ativo: boolean

  @column()
  public empresa: string

  @column()
  public grupo: string

  @column()
  public avatar: string

  @column.dateTime({ autoCreate: true, serialize: (value) => value.toFormat('dd/MM/yyyy HH:mm:ss') })
  public criado_em: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true})
  public atualizado_em: DateTime


  @beforeSave()
  public static async hashPassword (usuario: Usuario) {
    if(usuario.$dirty.password) {
      usuario.password = await Hash.make(usuario.password)
    }
  }
}
