import { AvailabilityController } from 'Controllers/Availability/AvailabilityController';
import { ResponseHelper } from 'Controllers/Helpers/ResponseHelper';
import { ScheduleRulesHardCoded } from 'Infrastructure/Adapters/ScheduleRulesHardCoded';
import { AvailableDatesUseCase } from 'UseCases/AvailableDates';
import { ScheduleRepositoryMock } from 'UseCases/Mocks';

const AvailabilityControllerFactory = async (): Promise<AvailabilityController> => {
  const scheduleRules = new ScheduleRulesHardCoded();
  const availableDatesUseCase = new AvailableDatesUseCase(scheduleRules, ScheduleRepositoryMock);
  return new AvailabilityController(availableDatesUseCase, new ResponseHelper());
};

export default AvailabilityControllerFactory;
