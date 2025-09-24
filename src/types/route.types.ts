import { z } from 'zod';
import { CreateRouteSchema } from '../validation/route.validate';

export type CreateRouteType = z.output<typeof CreateRouteSchema>['body'];
