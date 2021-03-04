import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const treinamentoSchema = schema.create({
  ativo: schema.boolean(),
  nome: schema.string({} , [
    rules.required(),
    rules.minLength(3),
    rules.maxLength(255),
  ]),
  inicio: schema.date({}, [
    rules.required()
  ]),
  duracao: schema.number([
    rules.required(),
  ]),
  sistema_id: schema.number([
    rules.required(),
  ]),
  instrutor_id: schema.number([
    rules.required(),
  ]),
})
