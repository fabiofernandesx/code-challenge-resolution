import { ResponseHelper } from 'Controllers/Helpers/ResponseHelper';
import { AvailableDates } from 'Interfaces';
import { Controller } from 'Interfaces/Controller';
import { HttpRequest, HttpResponse, JsonError } from 'Interfaces/Http';
import { Availability } from 'Models/Availability';

export type AvailabilityContract = { DateOfBirth: string; PostalCode: string };
export class AvailabilityController implements Controller<AvailabilityContract, Availability[]> {
  constructor(private availableDatesUseCase: AvailableDates, private responseHelper: ResponseHelper) {}
  async handle(httpRequest: HttpRequest<AvailabilityContract>): Promise<HttpResponse<Availability[], JsonError>> {
    try {
      const { DateOfBirth, PostalCode } = httpRequest.body;
      const availabilityList = await this.availableDatesUseCase.getAvailableDates(DateOfBirth, PostalCode);
      return this.responseHelper.getSuccessResponse(availabilityList);
    } catch (error) {
      return this.responseHelper.getErrorResponse(error);
    }
  }
}
