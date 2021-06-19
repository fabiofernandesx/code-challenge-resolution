import { AvailabilityContract } from 'Controllers/Availability/AvailabilityController';
import { Router } from 'express';
import adaptToExpressRoute from 'Infrastructure/Adapters/ExpressRouterAdapter';
import AvailabilityControllerFactory from 'Infrastructure/Factories/AvailabilityControllerFactory';
import { Availability } from 'Models/Availability';

export default (router: Router): void => {
  router.get(
    '/availability',
    adaptToExpressRoute<AvailabilityContract, Availability[]>(AvailabilityControllerFactory())
  );
};
