import { string, object, InferType, ref } from 'yup';

const FULLNAME = 'Nome completo obrigatório!';
const SURNAME = 'Apelido obrigatório!';
const EMAIL = 'E-mail obrigatório!';
const PASSWORD = 'Senha obrigatória!';
const CONFIRM_PASSWORD = {
  REQUIRE: 'confirmação de senha obrigatória!',
  MATCH: 'As senhas devem ser iguais!'
};

export const createNewAccountSchema = object({
  fullname:  string().required(FULLNAME),
  surname:  string().required(SURNAME),
  email:  string().email('E-mail inválido!').required(EMAIL),
  password: string().required(PASSWORD),
  confirmPassword: string().required(CONFIRM_PASSWORD.REQUIRE)
  .oneOf([ref('password')], CONFIRM_PASSWORD.MATCH)
});

export type ICreateNewAccountSchema = InferType<typeof createNewAccountSchema>;
