import { NextFunction, Request, Response } from 'express';

import { container } from '../container';
import sendResponse from '../utils/sendResponse';

export const createDriver = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await container.driverService.createDriver(req.body);
  sendResponse(res, result);
};

export const getSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await container.driverService.getSchedule();
  sendResponse(res, result);
};

export const getDriversHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await container.driverService.getDriversHistory(
    req.params.id!
  );
  sendResponse(res, result);
};
