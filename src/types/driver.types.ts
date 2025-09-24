import { z } from 'zod';
import { CreateDriverSchema } from '../validation/driver.validate';

export type CreateDriverType = z.output<typeof CreateDriverSchema>['body'];
