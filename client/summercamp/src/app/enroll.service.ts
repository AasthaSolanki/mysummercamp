import { Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QueryApi } from "./common/queryApi";
import {Observable, of} from "rxjs";
import {COURSE, ENROLL} from "./common/clientEndPoint";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
uri: 'http://localhost:4000';
  constructor(
    private http: HttpClient,
    private queryApi: QueryApi) { }
  PostEnrollDetails(params):Observable<any>{
    console.log("PostEnrollDetails-----",params)
    return this.queryApi.doPost('enroll',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  // getById(params): Observable<any>{
  //    return this.queryApi.doGet(ENROLL,params)
  //
  // }
  // public createNew( params ): Observable<any> {
  //   return this.queryApi.doPost(ENROLL, params)
  //
  // }
  // public delete( params ): Observable<any> {
  //   return this.queryApi.doGet(ENROLL, {params: params})
  //
  // }
  //
  // public getCourses():Observable<any>{
  //   return this.queryApi.doGet(COURSE)
  //
  // }


}
