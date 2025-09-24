import { z } from 'zod';

export const IdSchema = z.object({
  params: z
    .object({
      id: z.uuid('the Id must be in uuid format'),
    })
    .strict(),
});
