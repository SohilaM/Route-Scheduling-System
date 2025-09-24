import { NextFunction, Request, Response } from 'express';

import { container } from '../container';
import sendResponse from '../utils/sendResponse';

export const createRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await container.routeService.createRoute(req.body);
  sendResponse(res, result);
};

export const getRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await container.routeService.getRoute(req.params.id!);
  sendResponse(res, result);
};

export const getAllRoutes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const result = await container.routeService.getAllRoutes(page, limit);
  sendResponse(res, result);
};
