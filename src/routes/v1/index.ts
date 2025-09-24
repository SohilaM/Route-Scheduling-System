import { Router } from 'express';

import { routeRoutes } from './route.routes';
import { driverRoutes } from './driver.routes';
import { scheduleRoutes } from './schedule.routes';

const router = Router();

router.use('/routes', routeRoutes);
router.use('/drivers', driverRoutes);
router.use('/schedule', scheduleRoutes);

export const v1Routes = router;
