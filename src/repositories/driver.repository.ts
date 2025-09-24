import prisma from '../config/prisma';
import { IDriversRepository } from '../interfaces/driver.interface';
import { CreateDriverType } from '../types/driver.types';

class DriverRepository implements IDriversRepository {
  createDriver = async (data: CreateDriverType) => {
    const route = await prisma.drivers.create({ data });
    return route;
  };
}

export default new DriverRepository();
