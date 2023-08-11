import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Dialog from "@radix-ui/react-dialog";
import Swal from "sweetalert2";
import { RiAccountPinCircleLine } from "react-icons/ri";

import { Input } from "../Input";
import { Button } from "../Button";
import { CreateAdModal } from "../CreateAdModal";

import { IChooseHeaderModal } from "./index";

import {
  ICreateNewAccountSchema,
  createNewAccountSchema
} from "@/validations/CreateNewAccountSchema";


interface ICreateNewAccountProps {
  handleSignIn: (value: IChooseHeaderModal) => void;
}

export function CreateNewAccount({ handleSignIn }: ICreateNewAccountProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ICreateNewAccountSchema>({
    resolver: yupResolver(createNewAccountSchema),
  });

  const handleCreateNewAccount: SubmitHandler<ICreateNewAccountSchema> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    reset();
    Swal.fire({
      icon: 'success',
      title: 'Nova conta criada com sucesso!',
      text: `Bem-vindo(a) ${values.fullname} 🥰`,
      showConfirmButton: false,
      timer: 3000
    });
  }

  return (
    <CreateAdModal title='Criar nova conta' icon={<RiAccountPinCircleLine />}>
      <form onSubmit={handleSubmit(handleCreateNewAccount, (err) => console.log(err))}>
        <Input
          label="Nome completo"
          placeholder="Digite seu nome completo"
          {...register('fullname')}
          error={errors.fullname}
        />
        <Input
          label="Apellido"
          placeholder="Digite seu apellido"
          {...register('surname')}
          error={errors.surname}
        />
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
        <Input
          label="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha"
          {...register('confirmPassword')}
          error={errors.confirmPassword}
        />

        <div className="mt-4 flex flex-col gap-4">
          <button
            className="text-info w-40 font-semibold transition-opacity hover:opacity-60"
            onClick={() => handleSignIn('SignIn')}
          >
            Entrar com uma conta
          </button>
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
            <RiAccountPinCircleLine size={24} />
            Confirmar
          </Button>
        </footer>
      </form>
    </CreateAdModal>
  );
}
