import { AvailabilityContract } from '../../../Controllers/Availability/AvailabilityController';
import { Router } from 'express';
import adaptToExpressRoute from '../../Adapters/ExpressRouterAdapter';
import AvailabilityControllerFactory from '../../Factories/AvailabilityControllerFactory';
import { Availability } from '../../../Models/Availability';

export const AvailabilityRoute = (router: Router, connection: string): void => {
  router.get(
    '/availability',
    adaptToExpressRoute<AvailabilityContract, Availability[]>(AvailabilityControllerFactory(connection))
  );
};
