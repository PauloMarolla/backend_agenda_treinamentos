import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Agendamento from 'App/Models/Agendamento'

export default class AgendamentosController {
  async store({request}: HttpContextContract) {
    let agendamento = await Agendamento.create(request.all());

    return agendamento;
  }
  async index() {

  }
  async show() {

  }
  async update() {

  }
  async destroy() {

  }
}
