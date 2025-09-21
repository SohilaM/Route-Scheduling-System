import { NextFunction, Response, Request } from 'express';

import APIError from '../utils/APIError';
import statusCodes from '../utils/statusCodes';

export default (req: Request, res: Response, next: NextFunction) => {
  next(
    new APIError(
      `could not find ${req.originalUrl} on the server`,
      statusCodes.NotFound
    )
  );
};
