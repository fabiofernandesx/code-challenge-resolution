import { HttpResponse, JsonError } from '../../Interfaces/Http';
import { FieldRequiredError } from '../../UseCases/Errors';
export class ResponseHelper {
  getErrorResponse(error: Error): HttpResponse<null, JsonError> {
    let field = '';
    let message = '';
    let statusCode = 400;
    if (error.constructor === FieldRequiredError) field = (error as FieldRequiredError).field;
    if (error.constructor === Error) statusCode = 500;
    message = error.message;
    return { statusCode, body: { field, message } };
  }
  getSuccessResponse<T>(body: T): HttpResponse<T, null> {
    return { statusCode: 200, body };
  }
}
