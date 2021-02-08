import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Usuario from 'App/Models/Usuario'

export default class AuthController {
  public async login({request, auth, response}: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)

    return token;
  }

  public async me({auth}: HttpContextContract) {
    return auth.authenticate();
  }

  public async logout({auth}: HttpContextContract) {
    return await auth.logout();
  }
}
