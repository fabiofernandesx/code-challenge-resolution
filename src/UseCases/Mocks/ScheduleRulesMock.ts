import { ScheduleRules } from 'Interfaces';

export const ScheduleRulesMockFixedResults = {
  baseDate: new Date(2001, 1, 1),
  criticalAreaDate: new Date(2002, 1, 1),
  age: 18,
};
export const ScheduleRulesMock: ScheduleRules = {
  GetBaseDate: jest.fn((age: number): Date => {
    return ScheduleRulesMockFixedResults.baseDate;
  }),
  isCriticalArea: jest.fn((postalCode: string): boolean => {
    if (postalCode === 'CRIT') return true;
    return false;
  }),
  GetCriticalAreaDate: jest.fn((age: number): Date => {
    return ScheduleRulesMockFixedResults.criticalAreaDate;
  }),
  CalculateAgeFromDateOfBirth: jest.fn((dateOfBirth: Date): number => {
    return ScheduleRulesMockFixedResults.age;
  }),
};
