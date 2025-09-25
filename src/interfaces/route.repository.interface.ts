import { Routes } from '@prisma/client';

import { CreateRouteType } from '../types/route.types';

export interface IRoutesRepository {
  getRoute(id: string): Promise<Routes>;
  createRoute(data: CreateRouteType): Promise<Routes>;
  assignRoute(id: string, driverId: string): Promise<Routes>;
  getAllRoutes(page: number, limit: number): Promise<Routes[]>;
}
