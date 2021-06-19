import { FieldRequiredError, InvalidDateError } from 'UseCases/Errors';
import { ScheduleRulesMock, ScheduleRepositoryMock, ScheduleRulesMockFixedResults } from 'UseCases/Mocks';
import { AvailableDatesUseCase } from './AvailableDates';

describe('Available dates tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const sut = new AvailableDatesUseCase(ScheduleRulesMock, ScheduleRepositoryMock);
  const validDate = '1/1/2005';
  const validPostalCode = 'M3A8L1';

  it('should throw an error when DateOfBirth is not provided', async () => {
    await expect(sut.getAvailableDates(null, validPostalCode)).rejects.toEqual(new FieldRequiredError('Date of Birth'));
    await expect(sut.getAvailableDates('', validPostalCode)).rejects.toEqual(new FieldRequiredError('Date of Birth'));
  });
  it('should throw an error when PostalCode is not provided', async () => {
    await expect(sut.getAvailableDates(validDate, null)).rejects.toEqual(new FieldRequiredError('Postal Code'));
    await expect(sut.getAvailableDates(validDate, '')).rejects.toEqual(new FieldRequiredError('Postal Code'));
  });
  it('should throw an error when DateOfBirth is not valid', async () => {
    await expect(sut.getAvailableDates('invalidDate', validPostalCode)).rejects.toEqual(new InvalidDateError());
  });
  it('should call scheduleRules CalculateAgeFromDateOfBirth with the provided DateOfBirth', async () => {
    await sut.getAvailableDates(validDate, validPostalCode);
    expect(ScheduleRulesMock.CalculateAgeFromDateOfBirth).toBeCalledWith(new Date(validDate));
  });
  it('should call scheduleRules GetBaseDate with the calculated age', async () => {
    await sut.getAvailableDates(validDate, validPostalCode);
    expect(ScheduleRulesMock.GetBaseDate).toBeCalledWith(ScheduleRulesMockFixedResults.age);
  });
  it('should call scheduleRules GetCriticalAreaDate with the calculated age', async () => {
    await sut.getAvailableDates(validDate, 'CRIT');
    expect(ScheduleRulesMock.GetCriticalAreaDate).toBeCalledWith(ScheduleRulesMockFixedResults.age);
  });
  it('should call scheduleRepository getAvailableDates with the correct date', async () => {
    await sut.getAvailableDates(validDate, validPostalCode);
    expect(ScheduleRepositoryMock.getAvailableDates).toBeCalledWith(ScheduleRulesMockFixedResults.baseDate);
  });
  it('should call scheduleRepository getAvailableDates with the correct date', async () => {
    await sut.getAvailableDates(validDate, 'CRIT');
    expect(ScheduleRepositoryMock.getAvailableDates).toBeCalledWith(ScheduleRulesMockFixedResults.criticalAreaDate);
  });
});
