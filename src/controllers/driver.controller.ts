import { NextFunction, Request, Response } from 'express';

import sendResponse from '../utils/sendResponse';
import driverService from '../services/driver.service';

export const createDriver = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await driverService.createDriver(req.body);
  sendResponse(res, result);
};

export const getSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await driverService.getSchedule();
  sendResponse(res, result);
};

export const getDriversHistory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await driverService.getDriversHistory(req.params.id!);
  sendResponse(res, result);
};
