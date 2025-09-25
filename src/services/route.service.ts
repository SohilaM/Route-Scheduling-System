import statusCodes from '../utils/statusCodes';
import { APIResponse } from '../types/api.types';
import { CreateRouteType } from '../types/route.types';
import { IRoutesRepository } from '../interfaces/route.repository.interface';
import { IRoutesService } from '../interfaces/route.service.interface';

class RouteService implements IRoutesService {
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

  getAllRoutes = async (page: number, limit: number) => {
    const routes = await this.repo.getAllRoutes(page, limit);

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.OK,
      data: routes,
      size: routes.length,
    };

    return result;
  };
}

export default RouteService;
