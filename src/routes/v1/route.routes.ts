import { Router } from 'express';

import {
  CreateRouteSchema,
  PaginationSchema,
} from '../../validation/route.validate';
import {
  createRoute,
  getAllRoutes,
  getRoute,
} from '../../controllers/routes.controller';
import validate from '../../middlewares/validate';
import { IdSchema } from '../../validation/api.validate';

const router = Router();

router.post('/', validate(CreateRouteSchema), createRoute);
router.get('/', validate(PaginationSchema), getAllRoutes);
router.get('/:id', validate(IdSchema), getRoute);

export const routeRoutes = router;
