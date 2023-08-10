import { string, object, InferType } from 'yup';

const EMAIL = 'E-mail obrigatório!';
const PASSWORD = 'Senha obrigatória!';

export const signInSchema = object({
  email:  string().email('E-mail inválido!').required(EMAIL),
  password: string().required(PASSWORD)
});

export type ISignInSchema = InferType<typeof signInSchema>;
