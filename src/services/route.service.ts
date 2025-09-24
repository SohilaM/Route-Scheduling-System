import statusCodes from '../utils/statusCodes';
import { APIResponse } from '../types/api.types';
import { CreateRouteType } from '../types/route.types';
import routeRepository from '../repositories/route.repository';
import { IRoutesRepository } from '../interfaces/route.interface';

class RouteService {
  constructor(private repo: IRoutesRepository) {}

  createRoute = async (data: CreateRouteType) => {
    const route = await this.repo.createRoute(data);

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.Created,
      data: route,
    };

    return result;
  };

  getRoute = async (id: string) => {
    const route = await this.repo.getRoute(id);

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.OK,
      data: { ...route },
    };

    return result;
  };
}

export default new RouteService(routeRepository);
