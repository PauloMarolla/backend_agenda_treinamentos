import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const instrutorSchema = schema.create({
  nome: schema.string({}, [
    rules.required(),
    rules.minLength(3),
    rules.maxLength(255),
  ]),
  email_ss: schema.string({}, [
    rules.required(),
    rules.email(),
    rules.maxLength(255),
  ]),
  email_ec: schema.string({}, [
    rules.required(),
    rules.email(),
    rules.maxLength(255),
  ])
})
