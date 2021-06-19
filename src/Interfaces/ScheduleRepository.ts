import { Availability } from 'Models/Availability';

export interface ScheduleRepository {
  getAvailableDates(fromDate: Date): Promise<Availability[]>;
}
