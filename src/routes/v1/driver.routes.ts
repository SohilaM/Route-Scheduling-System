import { Router } from 'express';

import validate from '../../middlewares/validate';
import { CreateDriverSchema } from '../../validation/driver.validate';
import { createDriver } from '../../controllers/driver.controller';

const router = Router();

router.post('/', validate(CreateDriverSchema), createDriver);
export const driverRoutes = router;
