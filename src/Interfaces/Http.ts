export interface JsonError {
  field: string;
  message: string;
}
export interface HttpResponse<T, JsonError> {
  statusCode: number;
  body: T | JsonError;
}
export interface HttpRequest<T> {
  body?: T;
}
