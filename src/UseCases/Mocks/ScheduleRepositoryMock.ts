import { ScheduleRepository } from 'Interfaces/ScheduleRepository';
import { Availability } from 'Models/Availability';

export const ScheduleRepositoryMock: ScheduleRepository = {
  getAvailableDates: jest.fn((fromDate: Date): Promise<Availability[]> => {
    const availabilityList = [
      new Availability(1, 'Medical Centre Alpha', fromDate),
    ];
    return Promise.resolve(availabilityList);
  }),
};
