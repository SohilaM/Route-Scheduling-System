import { APIResponse } from '../types/api.types';
import { CreateDriverType } from '../types/driver.types';

export interface IDriversService {
  getSchedule(): Promise<APIResponse>;
  getDriversHistory(id: string): Promise<APIResponse>;
  createDriver(data: CreateDriverType): Promise<APIResponse>;
}
