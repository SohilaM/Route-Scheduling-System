import { z } from 'zod';

export const CreateRouteSchema = z.object({
  body: z
    .object({
      driverId: z.uuid().optional(),
      startLocation: z
        .string()
        .min(5, 'Start Location cannot be less than 5 characters')
        .max(75, 'Start Location cannot be more than 75 characters'),
      endLocation: z
        .string()
        .min(5, 'End Location cannot be less than 5 characters')
        .max(75, 'End Location cannot be more than 75 characters'),
      distance: z.coerce.number({ message: 'Distance must be a number' }),
      estimatedTime: z.coerce.number({
        message: 'Estimated Time must be a number',
      }),
    })
    .strict(),
});
