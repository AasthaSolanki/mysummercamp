import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'angular-2-local-storage';
import {ClientEndPoint} from "./clientEndPoint";
@Injectable()
export class QueryApi {

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
  }

  /**
   * method for getting the API_ROOT value from
   * environment.ts
   * @returns {any}
   */
  getAPI_URL = (): any  => {
    const envObj: any = this.localStorageService.get('envObj') ? this.localStorageService.get('envObj') : '';
    return  envObj ? envObj.API_ROOT : '';
  }

  /**
   * method for request an API by get request
   * @param {string} url
   * @param params
   * @param urlParams
   * @returns {Observable<ArrayBuffer>}
   */
  doGet(url: string, params: any, urlParams?: any) {
    url = ClientEndPoint(url, params, urlParams);

    return this.httpClient.get(url, params );
  }

  /**
   * method for request an API by post request
   * @param {string} url
   * @param params
   * @param urlParams
   * @returns {Observable<Object>}
   */
  doPost(url: string, params: any, urlParams?: any) {
    url = this.getAPI_URL() + ClientEndPoint(url, params, urlParams);
    return this.httpClient.post(url, params );
  }

  /**
   * method for request an API by delete request
   * @param {string} url
   * @param params
   * @returns {Observable<ArrayBuffer>}
   */
  doDelete(url: string, params: any) {
    url = this.getAPI_URL() + ClientEndPoint(url, params);
    return this.httpClient.delete(url, params);
  }

  /**
   * method for request an API by put request
   * @param {string} url
   * @param params
   * @param urlParams
   * @returns {Observable<Object>}
   */
  doPut(url: string, params: any, urlParams?: any) {
    url = this.getAPI_URL() + ClientEndPoint(url, params, urlParams);
    return this.httpClient.put(url, params);
  }
  doPatch(url: string, params: any, urlParams?: any) {
    url = ClientEndPoint(url, params, urlParams);
    return this.httpClient.patch(url, params);
  }

}
