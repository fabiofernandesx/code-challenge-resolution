import { HttpRequest, HttpResponse, JsonError } from './Http';

export interface Controller<ReqType, RespType> {
  handle(httpRequest: HttpRequest<ReqType>): Promise<HttpResponse<RespType, JsonError>>;
}
