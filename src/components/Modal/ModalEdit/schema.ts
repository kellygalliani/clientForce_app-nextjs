import { z } from "zod";

export const editSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Digite um e-mail válido").optional(),
  phone: z.string().optional(),
});

export type EditData = z.infer<typeof editSchema>;
