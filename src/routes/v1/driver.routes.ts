import { Router } from 'express';

import {
  createDriver,
  getDriversHistory,
} from '../../controllers/driver.controller';
import validate from '../../middlewares/validate';
import { IdSchema } from '../../validation/api.validate';
import { CreateDriverSchema } from '../../validation/driver.validate';

const router = Router();

router.post('/', validate(CreateDriverSchema), createDriver);
router.get('/:id/history', validate(IdSchema), getDriversHistory);

export const driverRoutes = router;
