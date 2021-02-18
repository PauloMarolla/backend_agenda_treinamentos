import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const usuarioSchema = schema.create({
  nome: schema.string({}, [
    rules.required(),
    rules.maxLength(255),
    rules.minLength(2),
  ]),
  email: schema.string({}, [
    rules.required(),
    rules.unique({table: 'usuarios', column: 'email'}),
    rules.email(),
    rules.maxLength(255),
  ]),
  password: schema.string({}, [
    rules.required(),
    rules.maxLength(255),
    rules.minLength(3),
  ]),
  ativo: schema.boolean(),
  empresa: schema.enum(['SS', 'EC']),
  grupo: schema.enum(['admin', 'lider', 'usuario', 'convidado']),
})
