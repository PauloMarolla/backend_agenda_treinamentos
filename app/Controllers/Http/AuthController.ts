import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class AuthController {
  public async login({ request, auth, response }: HttpContextContract) {
    const email = request.input('email');
    const password = request.input('password');

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '12 hours',
    });

    const data = { ...token };

    return response.json({
      token: data.token,
      expires_in: data.expiresAt,
      id: data.user.id,
      nome: data.user.nome,
      email: data.user.email,
      email_secundario: data.user.email_secundario,
      ativo: data.user.ativo,
      empresa: data.user.empresa,
      grupo: data.user.grupo,
      avatar: data.user.avatar,
      criado_em: data.user.criado_em,
      atualizado_em: data.user.atualizado_em,
    });
  }

  public async me({ auth }: HttpContextContract) {
    return await auth.authenticate();
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.logout()
    return 'Usuário deslogado';
  }
}
