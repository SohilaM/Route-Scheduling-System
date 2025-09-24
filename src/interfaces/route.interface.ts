import { Routes } from '@prisma/client';

import { CreateRouteType } from '../types/route.types';

export interface IRoutesRepository {
  createRoute(data: CreateRouteType): Promise<Routes>;
  getRoute(id: string): Promise<Routes>;
}
