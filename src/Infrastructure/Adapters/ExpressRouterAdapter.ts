import { Controller } from 'Interfaces/Controller';
import { HttpRequest, HttpResponse, JsonError } from 'Interfaces/Http';
import { Request, Response } from 'express';

function adaptToExpressRoute<ReqType, RespType>(controllerPromise: Promise<Controller<ReqType, RespType>>) {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest<ReqType> = {
      body: request.body as ReqType,
    };
    const controller = await controllerPromise;
    const httpResponse: HttpResponse<RespType, JsonError> = await controller.handle(httpRequest);
    response.status(httpResponse.statusCode).json(httpResponse.body);
  };
}

export default adaptToExpressRoute;
