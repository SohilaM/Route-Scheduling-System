import { NextFunction, Request, Response } from 'express';
import sendResponse from '../utils/sendResponse';
import routesService from '../services/routes.service';

export const createRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await routesService.createRoute(req.body);
  sendResponse(res, result);
};
