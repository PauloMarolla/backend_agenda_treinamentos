import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sistema from 'App/Models/Sistema'

export default class SistemaSeeder extends BaseSeeder {
  public async run () {
    await Sistema.createMany([
      {
        empresa: 'SS',
        nome: 'Contabilidade',
        sigla: 'CO'
      },
      {
        empresa: 'EC',
        nome: 'Contabilidade',
        sigla: 'CO'
      },
      {
        empresa: 'SS',
        nome: 'Nota Fiscal Eletronica',
        sigla: 'NFE'
      },
    ])
  }
}
