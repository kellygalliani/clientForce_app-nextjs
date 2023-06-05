import { z } from "zod";
export const registerSchema = z.object({
  name: z.string().nonempty("Digite seu nome"),
  email: z.string().email("Deve ser um e-mail").nonempty("Digite seu e-mail"),
  phone: z.string().nonempty("Digite telefone válido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type RegisterData = z.infer<typeof registerSchema>;
