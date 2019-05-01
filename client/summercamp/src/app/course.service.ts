import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, observable, of} from "rxjs";
import { QueryApi } from "./common/queryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient, private queryApi: QueryApi ) { }

  getCourse():Observable<any>{
    let params;
    return this.queryApi.doGet('COURSE',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  postCourse(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('COURSE',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

}
