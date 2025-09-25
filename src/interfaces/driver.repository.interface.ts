import { Drivers, Routes } from '@prisma/client';

import { CreateDriverType, driversRouteType } from '../types/driver.types';

export interface IDriversRepository {
  findAvailableDrivers(): Promise<Drivers[]>;
  getDriversHistory(id: string): Promise<Routes[]>;
  createDriver(data: CreateDriverType): Promise<Drivers>;
  findDriversAssignedRoute(): Promise<driversRouteType[]>;
  updateDriverAvailability(id: string, availability: boolean): Promise<Drivers>;
}
