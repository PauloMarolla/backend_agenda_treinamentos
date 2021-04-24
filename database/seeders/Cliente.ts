import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class ClienteSeeder extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        cpfcnpj: "393.393.393.00",
        email: 'paasdsadulao.mdsadsadsadla@hotmail.com',
        empresa: 'SS',
        nome_razao: "paulo construcoes",
        telefone: "19 (99648-9155)"
      }
    ])
  }
}
