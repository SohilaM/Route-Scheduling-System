import { Drivers } from '@prisma/client';

import { CreateDriverType } from '../types/driver.types';

export interface IDriversRepository {
  createDriver(data: CreateDriverType): Promise<Drivers>;
}
