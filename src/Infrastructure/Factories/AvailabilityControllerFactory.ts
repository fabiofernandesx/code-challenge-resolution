import { AvailabilityController } from '../../Controllers/Availability/AvailabilityController';
import { ResponseHelper } from '../../Controllers//Helpers/ResponseHelper';
import { ScheduleRulesHardCoded } from '../Adapters/ScheduleRulesHardCoded';
import TypeOrmScheduleRepository from '../Adapters/TypeOrmScheduleRepository';
import { getCustomRepository } from 'typeorm';
import { AvailableDatesUseCase } from '../../UseCases/AvailableDates';

const AvailabilityControllerFactory = async (connection: string): Promise<AvailabilityController> => {
  const scheduleRules = new ScheduleRulesHardCoded();
  const scheduleRepository = getCustomRepository(TypeOrmScheduleRepository, connection);
  const availableDatesUseCase = new AvailableDatesUseCase(scheduleRules, scheduleRepository);
  return new AvailabilityController(availableDatesUseCase, new ResponseHelper());
};

export default AvailabilityControllerFactory;
