import statusCodes from '../utils/statusCodes';
import { APIResponse } from '../types/api.types';
import { CreateDriverType } from '../types/driver.types';
import driverRepository from '../repositories/driver.repository';
import { IDriversRepository } from '../interfaces/driver.interface';

class DriverService {
  constructor(private repo: IDriversRepository) {}
  createDriver = async (data: CreateDriverType) => {
    const driver = await this.repo.createDriver(data);

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.Created,
      data: driver,
    };

    return result;
  };
}

export default new DriverService(driverRepository);
