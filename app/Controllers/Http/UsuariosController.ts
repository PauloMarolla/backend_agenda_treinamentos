import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'
export default class UsuariosController {
  async index() {
    let users = await Usuario.all()

    return users;
  }
  async store({request}: HttpContextContract) {
    let user = await Usuario.create(request.all())

    return user;

  }

  async show({params}: HttpContextContract) {
    let user = await Usuario.findOrFail(params.id)

    return user
  }

  async update({request, params}: HttpContextContract) {
    let user = await Usuario.findOrFail(params.id)

    user.nome = await request.input('nome');
    user.email = await request.input('email');
    user.ativo = await request.input('ativo');
    user.empresa = await request.input('empresa');
    user.grupo = await request.input('grupo');
    user.avatar = await request.input('avatar');
    user.password = await request.input('password');

    await user.save()

    return user;
  }

  async destroy({params}: HttpContextContract) {
    let user = await Usuario.findOrFail(params.id);

    await user?.delete()

    return true;
  }
}
