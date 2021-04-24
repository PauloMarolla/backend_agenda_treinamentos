import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { treinamentoSchema } from '../Request/treinamento/storeTreinamento'
import { messages } from '../validation/messages'
import Treinamento from 'App/Models/Treinamento'

export default class TreinamentosController {
  async index() {
    let treinamentos = await Treinamento.all()

    return treinamentos;
  }

  async store({request}: HttpContextContract) {
    const validatedData = await request.validate({
      schema: treinamentoSchema,
      messages: messages
    })

    let treinamento = await Treinamento.create(validatedData);

    return treinamento;
  }

  async show({params}: HttpContextContract) {
    let treinamento = await Treinamento.findOrFail(params.id);

    return treinamento;
  }

  async update({params, request}: HttpContextContract) {
    let treinamento = await Treinamento.findOrFail(params.id);

    treinamento.ativo = await request.input('ativo');
    treinamento.nome = await request.input('nome');
    treinamento.inicio = await request.input('inicio');
    treinamento.duracao = await request.input('duracao');
    treinamento.sistema_id = await request.input('sistema_id');
    treinamento.instrutor_id = await request.input('instrutor_id');

    await treinamento.save()

    return treinamento;
  }

  async destroy({params}: HttpContextContract) {
    let treinamento = await Treinamento.findOrFail(params.id);

    treinamento.delete()

    return `Treinamento ${treinamento.nome} deletado!`
  }

}
