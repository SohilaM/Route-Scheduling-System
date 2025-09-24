import prisma from '../config/prisma';
import APIError from '../utils/APIError';
import statusCodes from '../utils/statusCodes';
import { CreateRouteType } from '../types/route.types';
import { IRoutesRepository } from '../interfaces/route.interface';

class RouteRepository implements IRoutesRepository {
  createRoute = async (body: CreateRouteType) => {
    if (body.driverId === '')
      throw new APIError(
        'driverId must be a valid UUID or omitted',
        statusCodes.BadRequest
      );

    const data = {
      startLocation: body.startLocation,
      endLocation: body.endLocation,
      distance: body.distance,
      estimatedTime: body.estimatedTime,
      driverId: body.driverId ?? null,
    };

    const route = await prisma.routes.create({ data });
    return route;
  };

  getRoute = async (id: string) => {
    const route = await prisma.routes.findUnique({
      where: {
        id,
      },
    });

    if (!route)
      throw new APIError('No Route found with this Id', statusCodes.NotFound);

    return route;
  };
}

export default new RouteRepository();
