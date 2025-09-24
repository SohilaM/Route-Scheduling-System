import { PrismaClient } from '@prisma/client/extension';

import { RouteService } from './services/route.service';
import { DriverService } from './services/driver.service';
import RouteRepository from './repositories/route.repository';
import DriverRepository from './repositories/driver.repository';

const prisma = new PrismaClient();

export const container = {
  routeRepo: new RouteRepository(prisma),
  driverRepo: new DriverRepository(prisma),

  get routeService() {
    return new RouteService(this.routeRepo);
  },
  get driverService() {
    return new DriverService(this.driverRepo);
  },
};
