import { Router } from 'express';
import { routeRoutes } from './route.routes';
import { driverRoutes } from './driver.routes';

const router = Router();

router.use('/routes', routeRoutes);
router.use('/drivers', driverRoutes);

export const v1Routes = router;
