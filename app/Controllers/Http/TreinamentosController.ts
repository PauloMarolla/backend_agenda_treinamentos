import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Treinamento from 'App/Models/Treinamento'

export default class TreinamentosController {
  async index() {
    let treinamentos = await Treinamento.all()

    return treinamentos;
  }

  async store({request}: HttpContextContract) {
    let treinamento = await Treinamento.create(request.all());

    return treinamento;
  }

  async show({params}: HttpContextContract) {
    let treinamento = await Treinamento.findOrFail(params.id);

    return treinamento;
  }

  async update({params, request}: HttpContextContract) {
    let treinamento = await Treinamento.findOrFail(params.id);

    return treinamento;
  }

  async destroy({params}: HttpContextContract) {
    let treinamento = await Treinamento.findOrFail(params.id);

    treinamento.delete()

    return `Treinamento ${treinamento.nome} deletado!`
  }

}
