import { ResponseHelper } from 'Controllers/Helpers/ResponseHelper';
import AvailableDatesMock from 'Controllers/Mocks/AvailableDatesMock';
import { JsonError } from 'Interfaces/Http';
import { Availability } from 'Models/Availability';
import { AvailabilityController } from './AvailabilityController';

describe('Availability Controller Tests', () => {
  const DateOfBirth = '1/1/2005';
  const PostalCode = 'M3A8L1';
  it('should receive a bad request error status code when data is not correct', async () => {
    const errorToSimulate = 'field';
    const sut = new AvailabilityController(new AvailableDatesMock(errorToSimulate), new ResponseHelper());
    const JsonResponseWithError = await sut.handle({ body: { DateOfBirth, PostalCode } });
    const jsonError = JsonResponseWithError.body as JsonError;
    expect(JsonResponseWithError.statusCode).toBe(400);
    expect(jsonError.message).toBe('Field Required: TheField');
  });
  it('should receive a bad request error status code when invalid date is provided', async () => {
    const errorToSimulate = 'date';
    const sut = new AvailabilityController(new AvailableDatesMock(errorToSimulate), new ResponseHelper());
    const JsonResponseWithError = await sut.handle({ body: { DateOfBirth, PostalCode } });
    const jsonError = JsonResponseWithError.body as JsonError;
    expect(JsonResponseWithError.statusCode).toBe(400);
    expect(jsonError.message).toBe('Invalid Date');
  });
  it('should receive an internal server error status code when a generic error occurs', async () => {
    const errorToSimulate = 'generic';
    const sut = new AvailabilityController(new AvailableDatesMock(errorToSimulate), new ResponseHelper());
    const JsonResponseWithError = await sut.handle({ body: { DateOfBirth, PostalCode } });
    const jsonError = JsonResponseWithError.body as JsonError;
    expect(JsonResponseWithError.statusCode).toBe(500);
    expect(jsonError.message).toBe('some random Error');
  });
  it('should receive a list of availability when the data is correct', async () => {
    const errorToSimulate = 'none';
    const sut = new AvailabilityController(new AvailableDatesMock(errorToSimulate), new ResponseHelper());
    const JsonResponseWithList = await sut.handle({ body: { DateOfBirth, PostalCode } });
    const availabilityList = [new Availability(1, 'Medical Centre Alpha', new Date())];
    expect(JsonResponseWithList.statusCode).toBe(200);
    expect(JsonResponseWithList.body).toStrictEqual(availabilityList);
  });
});
