import { z } from 'zod';
import { CreateDriverSchema } from '../validation/driver.validate';

export type CreateDriverType = z.output<typeof CreateDriverSchema>['body'];

export type driversRouteType = {
  name: string;
  Routes: {
    id: string;
    startLocation: string;
    endLocation: string;
  }[];
};
