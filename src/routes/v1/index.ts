import { Router } from 'express';
import { routeRoutes } from './route.routes';

const router = Router();

router.use('/routes', routeRoutes);

export const v1Routes = router;
