import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'
// import Hash from '@ioc:Adonis/Core/Hash'

export default class UsuarioSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Usuario.createMany([{
      nome: 'Paulo',
      ativo: true,
      email: 'paulo.ricardo.marolla@hotmail.com',
      empresa: 'SS',
      grupo: 'admin',
      password: 'Abc102030*',
      email_secundario: 'asd'
    },{
      nome: 'Marolla',
      ativo: false,
      email: 'marolaum@hotmail.com',
      empresa: 'EC',
      grupo: 'lider',
      password: 'Abc102030*',
    }])
  }
}
