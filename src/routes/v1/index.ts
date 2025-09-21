import { NextFunction, Request, Response, Router } from 'express';
import statusCodes from '../../utils/statusCodes';

const router = Router();

router.use('/soso', (req: Request, res: Response, next: NextFunction) => {
  res.status(statusCodes.OK).json({
    status: 'success',
    message: 'hi soso🐳',
  });
});

export const v1Routes = router;
