import { z } from 'zod';
import { config } from 'dotenv';

config({ quiet: true });

const envConfig = z
  .object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(['development', 'production']).default('development'),

    LOG_LEVEL: z
      .enum(['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'])
      .default('info'),
  })
  .parse(process.env);

export default envConfig;
