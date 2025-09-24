import { Router } from 'express';

import validate from '../../middlewares/validate';
import { IdSchema } from '../../validation/api.validate';
import { CreateRouteSchema } from '../../validation/route.validate';
import { createRoute, getRoute } from '../../controllers/routes.controller';

const router = Router();

router.post('/', validate(CreateRouteSchema), createRoute);
router.get('/:id', validate(IdSchema), getRoute);

export const routeRoutes = router;
