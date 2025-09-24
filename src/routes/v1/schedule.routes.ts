import { Router } from 'express';

import { getSchedule } from '../../controllers/driver.controller';

const router = Router();

router.get('/', getSchedule);

export const scheduleRoutes = router;
