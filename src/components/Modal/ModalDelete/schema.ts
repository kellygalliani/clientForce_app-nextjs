import { z } from "zod";

export const deleteSchema = z.object({
  id: z.string(),
});

export type ContactData = z.infer<typeof deleteSchema>;
