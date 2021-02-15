import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Instrutor from 'App/Models/Instrutore'

export default class InstrutoresController {
  async index() {
    let instrutores = await Instrutor.all();

    return instrutores;
  }

  async store({request}: HttpContextContract) {
    let instrutor = await Instrutor.create(request.all())

    return instrutor;
  }

  async show({params}: HttpContextContract) {
    let instrutor = await Instrutor.findOrFail(params.id);

    return instrutor;
  }

  async update({request, params}: HttpContextContract) {
    let instrutor = await Instrutor.findOrFail(params.id);

    instrutor.nome = await request.input('nome')
    instrutor.email_ss = await request.input('email_ss')
    instrutor.email_ec = await request.input('email_ec')
    instrutor.ativo = await request.input('ativo')

    await instrutor.save()

    return instrutor;
  }

  async destroy({params}: HttpContextContract) {

    let instrutor = await Instrutor.findOrFail(params.id)

    instrutor.delete()
    return `Usuario ${instrutor.nome} deletado com sucesso!`
  }

}
