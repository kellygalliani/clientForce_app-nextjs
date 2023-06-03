import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Digite seu nome"),
  email: z.string().email("Deve ser um e-mail").nonempty("Digite seu e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
  confirmPassword: z
    .string()
    .nonempty("Confirmação de senha é obrigatória")
    .refine(
      ((value: string, context: { parent: { password: string } }) =>
        value === context.parent.password) as (arg: string) => unknown,
      "As senhas devem ser iguais"
    ),
});

export type RegisterData = z.infer<typeof registerSchema>;
