import { APIResponse } from '../types/api.types';
import { CreateRouteType } from '../types/route.types';

export interface IRoutesService {
  getRoute(id: string): Promise<APIResponse>;
  createRoute(data: CreateRouteType): Promise<APIResponse>;
  getAllRoutes(page: number, limit: number): Promise<APIResponse>;
}
