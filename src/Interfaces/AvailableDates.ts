import { Availability } from 'Models/Availability';

export interface AvailableDates {
  getAvailableDates(dateOfBirth: string, postalCode: string): Promise<Availability[]>;
}
