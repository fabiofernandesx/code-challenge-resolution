import { ScheduleRules } from 'Interfaces';

export class ScheduleRulesHardCoded implements ScheduleRules {
  public GetBaseDate(age: number): Date {
    if (age >= 80) return new Date(2021, 10 - 1, 21);
    if (age >= 70) return new Date(2021, 11 - 1, 30);
    if (age >= 60) return new Date(2021, 12 - 1, 14);
    if (age >= 50) return new Date(2021, 12 - 1, 21);
    if (age >= 30) return new Date(2022, 1 - 1, 2);
    return new Date(2022, 2 - 1, 1);
  }
  public isCriticalArea(postalCode: string): boolean {
    if (postalCode.includes('M4X')) return true;
    if (postalCode.includes('M5A')) return true;
    if (postalCode.includes('M5B')) return true;
    if (postalCode.includes('M4Y')) return true;
    return false;
  }
  public GetCriticalAreaDate(age: number): Date {
    const dateToReturn = this.GetBaseDate(age);
    dateToReturn.setDate(dateToReturn.getDate() - 4);
    return dateToReturn;
  }
  public CalculateAgeFromDateOfBirth(dateOfBirth: Date): number {
    const ageDiffMs = (Date.now() as number) - dateOfBirth.getTime();
    const ageDate = new Date(ageDiffMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
