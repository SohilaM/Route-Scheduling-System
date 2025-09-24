import prisma from '../config/prisma';
import { CreateDriverType } from '../types/driver.types';
import { IDriversRepository } from '../interfaces/driver.interface';

class DriverRepository implements IDriversRepository {
  createDriver = async (data: CreateDriverType) => {
    const driver = await prisma.drivers.create({ data });
    return driver;
  };

  findAvailableDrivers = async () => {
    const drivers = await prisma.drivers.findMany({
      where: {
        isAvailable: true,
      },
    });
    return drivers;
  };

  findDriversAssignedRoute = async () => {
    const driversRoute = await prisma.drivers.findMany({
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
    const driversHistory = await prisma.drivers.findUnique({
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

export default new DriverRepository();
