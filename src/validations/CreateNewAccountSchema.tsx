import { string, object, InferType, ref } from 'yup';

const FULLNAME = {
  REQUIRED: 'Nome completo obrigatório!',
  MIN: 'Nome muito curto!',
  MAX: 'Nome muito longo!',
};
const SURNAME = {
  REQUIRED: 'Apelido obrigatório!',
  MIN: 'Apelido muito curto!',
  MAX: 'Apelido muito longo!',
};
const EMAIL = 'E-mail obrigatório!';
const PASSWORD = 'Senha obrigatória!';
const CONFIRM_PASSWORD = {
  REQUIRED: 'confirmação de senha obrigatória!',
  MATCH: 'As senhas devem ser iguais!'
};

export const createNewAccountSchema = object({
  fullname:  string().min(5, FULLNAME.MIN).max(30, FULLNAME.MAX).required(FULLNAME.REQUIRED),
  surname:  string().min(2, SURNAME.MIN).max(18, SURNAME.MAX).required(SURNAME.REQUIRED),
  email:  string().email('E-mail inválido!').required(EMAIL),
  password: string().required(PASSWORD),
  confirmPassword: string().required(CONFIRM_PASSWORD.REQUIRED)
  .oneOf([ref('password')], CONFIRM_PASSWORD.MATCH)
});

export type ICreateNewAccountSchema = InferType<typeof createNewAccountSchema>;
