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
  const id = req.params.id!;
  const result = await routeService.getRoute(id);
  sendResponse(res, result);
};
