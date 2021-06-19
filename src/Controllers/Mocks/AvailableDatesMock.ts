import { Availability } from 'Models/Availability';
import { AvailableDatesUseCase } from 'UseCases/AvailableDates';
import { FieldRequiredError, InvalidDateError } from 'UseCases/Errors';

jest.mock('UseCases/AvailableDates');

export default (AvailableDatesUseCase as jest.Mock).mockImplementation((errorToSimulate: string) => {
  return {
    getAvailableDates: async () => {
      if (errorToSimulate === 'field') throw new FieldRequiredError('TheField');
      if (errorToSimulate === 'date') throw new InvalidDateError();
      if (errorToSimulate === 'generic') throw new Error('some random Error');
      const availabilityList = [new Availability(1, 'Medical Centre Alpha', new Date())];
      return Promise.resolve(availabilityList);
    },
  };
});
