import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório').max(80, 'Nome deve ter no máximo 80 caracteres'),
  description: z.string().min(1, 'Descrição é obrigatória').max(200,'Descrição deve ter no máximo 200 caracteres'),
  price: z.number().positive('Preço deve ser positivo'),
  available: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;