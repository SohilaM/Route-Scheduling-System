import statusCodes from '../utils/statusCodes';
import { APIResponse } from '../types/api.types';
import { CreateDriverType } from '../types/driver.types';
import { IDriversRepository } from '../interfaces/driver.repository.interface';
import { IDriversService } from '../interfaces/driver.service.interface';

class DriverService implements IDriversService {
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

  getSchedule = async () => {
    const driversRoute = await this.repo.findDriversAssignedRoute();

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.OK,
      data: driversRoute,
    };

    return result;
  };

  getDriversHistory = async (id: string) => {
    const driversHistory = await this.repo.getDriversHistory(id);

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.OK,
      data: driversHistory,
    };

    return result;
  };
}

export default DriverService;
