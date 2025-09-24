import prisma from '../config/prisma';
import { IRoutesRepository } from '../interfaces/route.interface';
import { CreateRouteType } from '../types/route.types';
import APIError from '../utils/APIError';
import statusCodes from '../utils/statusCodes';

class RoutesRepository implements IRoutesRepository {
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
}

export default new RoutesRepository();
