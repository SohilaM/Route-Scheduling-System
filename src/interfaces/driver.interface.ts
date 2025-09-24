import { Drivers } from '@prisma/client';

import { CreateDriverType, driversRouteType } from '../types/driver.types';

export interface IDriversRepository {
  createDriver(data: CreateDriverType): Promise<Drivers>;
  findAvailableDrivers(): Promise<Drivers[]>;
  findDriversAssignedRoute(): Promise<driversRouteType[]>;
}
