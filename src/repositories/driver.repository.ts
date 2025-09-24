import prisma from '../config/prisma';
import { IDriversRepository } from '../interfaces/driver.interface';
import { CreateDriverType } from '../types/driver.types';

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
}

export default new DriverRepository();
