import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: never;
}

export interface IRequestResponseBlobOptions {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
};
observe: 'response';
params?: HttpParams | {
    [param: string]: string | string[];
};
reportProgress?: boolean;
responseType: 'blob';
withCredentials?: boolean;
}

export function applicationHttpClientCreator(http: HttpClient) {
  return new ApplicationHttpClient(http);
}


export class ApplicationHttpClient {

  private api = 'http://localhost:3000';

  // Extending the HttpClient through the Angular DI.
  public constructor(
    public http: HttpClient,
  ) {
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(this.api + endPoint, options);
  }

  /**
   * GET request with Blob as Blob
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestResponseBlobOptions} options options of the request like headers, body, etc.
   * @returns {Observable<HttpResponse<Blob>>}
   */
  public getBlub(url: string, body?: object, options: IRequestResponseBlobOptions = {
    observe: 'response',
    responseType: 'blob'
  }): Observable<HttpResponse<Blob>> {
    return this.http.get(this.api + url, options);
  }
  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public post<T>(endPoint: string, params?: object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(this.api + endPoint, params, options)
  }

  /**
   * POST request with Blob as Blob
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestResponseBlobOptions} options options of the request like headers, body, etc.
   * @returns {Observable<HttpResponse<Blob>>}
   */
  public postBlub(url: string, body?: object, options: IRequestResponseBlobOptions = {
    observe: 'response',
    responseType: 'blob'
  }): Observable<HttpResponse<Blob>> {
    return this.http.post(this.api + url, body, options);
  }
  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public put<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(this.api + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(this.api + endPoint, options);
  }

}
