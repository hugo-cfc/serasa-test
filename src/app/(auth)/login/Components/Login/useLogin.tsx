import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import postLogin from "@/fetchers/auth/postLogin";

const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const schema = z.object({
    email: z.string().email({ message: "Digite um e-mail válido" }),
    password: z.string().min(6, { message: "Digite sua senha" }),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({ mode: "all", resolver: zodResolver(schema) });

  type FormProps = z.infer<typeof schema>;

  const handleForm = async (data: FormProps) => {
    postLogin(data)
      .then((response) => {
        console.log(response);

        router.push("/");
      })
      .catch(() => {
        enqueueSnackbar({
          variant: "error",
          message: "Erro ao fazer o login, verifique seu usuário",
        });
      });
  };

  const formUtils = {
    schema,
    handleForm,
    register,
    handleSubmit,
    control,
    errors,
  };

  return { formUtils };
};

export default useLogin;
