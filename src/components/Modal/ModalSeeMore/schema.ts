import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().nonempty("Digite um nome"),
  email: z
    .string()
    .email("Digite um e-mail válido")
    .nonempty("Digite um e-mail válido"),
  phone: z.string().nonempty("Digite telefone válido"),
});

export type ContactData = z.infer<typeof contactSchema>;
