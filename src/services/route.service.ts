import statusCodes from '../utils/statusCodes';
import { APIResponse } from '../types/api.types';
import { CreateRouteType } from '../types/route.types';
import { IRoutesService } from '../interfaces/route.service.interface';
import { IRoutesRepository } from '../interfaces/route.repository.interface';
import { IDriversRepository } from '../interfaces/driver.repository.interface';

class RouteService implements IRoutesService {
  constructor(
    private repo: IRoutesRepository,
    private driverRepo: IDriversRepository
  ) {}

  createRoute = async (data: CreateRouteType) => {
    const route = await this.repo.createRoute(data);

    let finalRoute = route;
    let message = 'Route created! ';

    const availableDrivers = await this.driverRepo.findAvailableDrivers();

    let result: APIResponse = {
      status: 'success',
      statusCode: statusCodes.Created,
    };

    let available;

    if (data.driverId) {
      available = availableDrivers.find(
        (driver) => driver.id === data.driverId
      );
      if (!available) {
        message += 'but requested driver is not available';
      } else {
        finalRoute = await this.repo.assignRoute(route.id, data.driverId);
        await this.driverRepo.updateDriverAvailability(data.driverId, false);
      }
    }

    if ((!finalRoute.driverId || !available) && availableDrivers.length) {
      finalRoute = await this.repo.assignRoute(
        route.id,
        availableDrivers[0]!.id
      );
      await this.driverRepo.updateDriverAvailability(
        availableDrivers[0]!.id,
        false
      );
      message += 'and driver is auto assigned';
    }

    if (!data.driverId && !availableDrivers.length) {
      message = 'but no drivers are available now';
    }

    result.data = finalRoute;
    result.message = message;

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
