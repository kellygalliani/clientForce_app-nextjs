import { z } from "zod";

export const editUserSchema = z.object({
  name: z.string().optional(),
  avatar: z.string().optional(),
  email: z.string().email("Digite um e-mail válido").optional(),
  phone: z.string().optional(),
});

export type EditData = z.infer<typeof editUserSchema>;
