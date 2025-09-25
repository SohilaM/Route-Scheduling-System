import { PrismaClient } from '@prisma/client/extension';

import { CreateDriverType } from '../types/driver.types';
import { IDriversRepository } from '../interfaces/driver.repository.interface';

class DriverRepository implements IDriversRepository {
  constructor(private prisma: PrismaClient) {}

  createDriver = async (data: CreateDriverType) => {
    const driver = await this.prisma.drivers.create({ data });
    return driver;
  };

  findAvailableDrivers = async () => {
    const drivers = await this.prisma.drivers.findMany({
      where: {
        isAvailable: true,
      },
    });
    return drivers;
  };

  findDriversAssignedRoute = async () => {
    const driversRoute = await this.prisma.drivers.findMany({
      where: {
        isAvailable: false,
      },
      select: {
        name: true,
        Routes: {
          select: {
            id: true,
            startLocation: true,
            endLocation: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
        },
      },
    });

    return driversRoute;
  };

  getDriversHistory = async (id: string) => {
    const driversHistory = await this.prisma.drivers.findUnique({
      where: {
        id,
      },
      select: {
        Routes: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    return driversHistory?.Routes ?? [];
  };
}

export default DriverRepository;
