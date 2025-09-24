import { Router } from 'express';
import { createRoute } from '../../controllers/routes.controller';

const router = Router();

router.post('/', createRoute);

export const routeRoutes = router;
