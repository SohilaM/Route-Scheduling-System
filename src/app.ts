import express from 'express';

import { apiRoutes } from './routes';
import notFound from './middlewares/notFound';
import globalErrorHandler from './middlewares/globalErrorHandler';

const app = express();

app.use('/api', apiRoutes);

app.all(/.*/, notFound);

app.use(globalErrorHandler);

export default app;
