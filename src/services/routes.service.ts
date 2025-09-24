import routesRepository from '../repositories/routes.repository';
import { APIResponse } from '../types/api.types';
import { CreateRouteType } from '../types/route.types';
import statusCodes from '../utils/statusCodes';

class RoutesService {
  createRoute = async (data: CreateRouteType) => {
    const route = await routesRepository.createRoute(data);

    const result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.Created,
      data: route,
    };

    return result;
  };
}

export default new RoutesService();
