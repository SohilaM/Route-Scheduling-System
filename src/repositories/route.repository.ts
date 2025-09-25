import { PrismaClient } from '@prisma/client/extension';

import APIError from '../utils/APIError';
import statusCodes from '../utils/statusCodes';
import { CreateRouteType } from '../types/route.types';
import { IRoutesRepository } from '../interfaces/route.repository.interface';

class RouteRepository implements IRoutesRepository {
  constructor(private prisma: PrismaClient) {}

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

    const route = await this.prisma.routes.create({ data });
    return route;
  };

  getRoute = async (id: string) => {
    const route = await this.prisma.routes.findUnique({
      where: {
        id,
      },
    });

    if (!route)
      throw new APIError('No Route found with this Id', statusCodes.NotFound);

    return route;
  };

  getAllRoutes = async (page: number, limit: number) => {
    const routes = await this.prisma.routes.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return routes;
  };
}

export default RouteRepository;
