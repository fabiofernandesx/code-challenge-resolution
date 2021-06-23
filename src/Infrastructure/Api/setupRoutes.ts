import { Express, Router } from 'express';
import { createConnection } from 'typeorm';
import { AvailabilityRoute } from './Routes';

export default async (app: Express): Promise<void> => {
  const connection = process.env.CONNECTION;
  await createConnection(connection);
  const router = Router();
  app.use('/api', router);
  AvailabilityRoute(router, connection);
};
