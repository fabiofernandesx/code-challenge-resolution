import { AvailableDates, ScheduleRules } from 'Interfaces';
import { ScheduleRepository } from 'Interfaces/ScheduleRepository';
import { Availability } from 'Models/Availability';
import { FieldRequiredError } from 'UseCases/Errors/FieldRequired';
import { InvalidDateError } from 'UseCases/Errors/InvalidDate';

export class AvailableDatesUseCase implements AvailableDates {
  constructor(private _scheduleRules: ScheduleRules, private _scheduleRepository: ScheduleRepository) {}
  async getAvailableDates(dateOfBirth: string, postalCode: string): Promise<Availability[]> {
    this.AreAllRequiredFieldsFilled(dateOfBirth, postalCode);
    this.IsDateValid(dateOfBirth);
    const parsedDateOfBirth = new Date(dateOfBirth);
    const age = this._scheduleRules.CalculateAgeFromDateOfBirth(parsedDateOfBirth);
    let dateFrom = this._scheduleRules.GetBaseDate(age);
    const isCriticalArea = this._scheduleRules.isCriticalArea(postalCode);
    if (isCriticalArea) dateFrom = this._scheduleRules.GetCriticalAreaDate(age);
    return await this._scheduleRepository.getAvailableDates(dateFrom);
  }
  private AreAllRequiredFieldsFilled(DateOfBirth: string, PostalCode: string): void {
    if (!DateOfBirth) throw new FieldRequiredError('Date of Birth');
    if (!PostalCode) throw new FieldRequiredError('Postal Code');
  }
  private IsDateValid(DateToCheck: string): void {
    if (isNaN(Date.parse(DateToCheck))) throw new InvalidDateError();
  }
}
