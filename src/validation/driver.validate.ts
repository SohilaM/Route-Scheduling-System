import { z } from 'zod';

export const CreateDriverSchema = z.object({
  body: z.object({
    name: z.string(),
    licenseType: z.enum(['PRIVATE', 'PUBLIC', 'TRUCK', 'MOTORCYCLE', 'BUS'], {
      message:
        'License Type must be one of: PRIVATE, PUBLIC, TRUCK, MOTORCYCLE, BUS',
    }),
    isAvailable: z.boolean().default(true),
  }),
});
