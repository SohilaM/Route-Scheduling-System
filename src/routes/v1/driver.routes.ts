import { Router } from 'express';

import validate from '../../middlewares/validate';
import { createDriver } from '../../controllers/driver.controller';
import { CreateDriverSchema } from '../../validation/driver.validate';

const router = Router();

router.post('/', validate(CreateDriverSchema), createDriver);

export const driverRoutes = router;
