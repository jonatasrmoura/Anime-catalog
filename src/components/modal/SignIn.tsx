import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Dialog from "@radix-ui/react-dialog";
import { PiSignInBold } from "react-icons/pi";

import { CreateAdModal } from '../CreateAdModal';
import { Input } from "../Input";
import { Button } from "../Button";

import { ISignInSchema, signInSchema } from '../../validations/signInSchema';

export function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ISignInSchema>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<ISignInSchema> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    reset();
  }
  
  return (
    <CreateAdModal title='Entrar' icon={<PiSignInBold />}>
      <form onSubmit={handleSubmit(handleSignIn, (err) => console.log(err))}>
        <Input
          label="E-mail"
          type="email"
          placeholder="Digite seu e-mail"
          
          {...register('email')}
          error={errors.email}
        />
        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          
          {...register('password')}
          error={errors.password}
        />

        <div className="mt-4 flex flex-col gap-4">
          <Link
            className="text-info w-32 font-semibold transition-opacity hover:opacity-60"
            href={''}
          >
            Criar nova conta
          </Link>
        </div>

        <footer className='mt-4 flex justify-end gap-4'>
          <Dialog.Close
            type='button'
            onClick={() => reset()}
            className='bg-zinc-500 p-5 h-12 rounded-md font-semibold flex items-center hover:bg-zinc-600'
          >
            Cancelar
          </Dialog.Close>
          <Button
            type='submit'
            isLoading={isSubmitting}
            loadingMessage='Salvando'
            className='
              h-12
              p-5
              rounded-md
              font-semibold
              flex
              items-center
              gap-3
              border-2
              border-info
              bg-background
              hover:bg-info/80
              hover:border-textLight
          '>
            <PiSignInBold size={24} />
            Entrar
          </Button>
        </footer>
      </form>
    </CreateAdModal>
  );
}
