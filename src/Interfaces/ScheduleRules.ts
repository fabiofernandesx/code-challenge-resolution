export interface ScheduleRules {
  CalculateAgeFromDateOfBirth(dateOfBirth: Date): number;
  GetBaseDate(age: number): Date;
  isCriticalArea(postalCode: string): boolean;
  GetCriticalAreaDate(age: number): Date;
}
