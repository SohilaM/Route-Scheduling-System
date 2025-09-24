import { NextFunction, Request, Response } from 'express';

import sendResponse from '../utils/sendResponse';
import routeService from '../services/route.service';

export const createRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await routeService.createRoute(req.body);
  sendResponse(res, result);
};

export const getRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await routeService.getRoute(req.params.id!);
  sendResponse(res, result);
};

export const getAllRoutes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const result = await routeService.getAllRoutes(page, limit);
  sendResponse(res, result);
};
