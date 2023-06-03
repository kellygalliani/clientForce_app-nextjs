import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .email("Digite um e-mail válido")
    .nonempty("Digite um e-mail válido"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type LoginData = z.infer<typeof schema>;
