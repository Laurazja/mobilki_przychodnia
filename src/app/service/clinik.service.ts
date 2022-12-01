import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { OdwolanieComponent } from '../odwolanie/odwolanie.component';
import {Doctor} from '../interface/doctor'
import { Clinic } from '../interface/clinic';
import { VisitDate } from '../interface/visitDate';

@Injectable({
  providedIn: 'root'
})
export class ClinikService{


  constructor(private http: HttpClient) { }

  getDoctors() :Observable<Doctor[]>{
    return this.http.get<Doctor[]>('http://localhost:8080/api/lekarze')
  }

  getClinic() :Observable<Clinic[]>{
    return this.http.get<Clinic[]>('http://localhost:8080/api/adresy')
  }

  getDateByDoctor(id: number) :Observable<VisitDate[]>{
    return this.http.get<VisitDate[]>('http://localhost:8080/api/teminy')
  }


  /* //zmien obversable
  getDoctors$ = <Observable<String>>
  this.http.get<String>(`http://localhost:8080/api/lekarze`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );
  

  getVisitDates$ = <Observable<VisitDateRespones>>
  this.http.get<VisitDateRespones>(`http://localhost:8080/api/terminy`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  //zmien observable
  getAddresses$ = <Observable<String>>
  this.http.get<String>(`http://localhost:8080/api/adresy`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  getRegistration$ = <Observable<GetRegistrationRespones>>
  this.http.get<GetRegistrationRespones>(`http://localhost:8080/api/rejestracje`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );
 

  saveRegistration$ = (rejestracja: Registration) => <Observable<RegistrationRespones>>
  this.http.post<RegistrationRespones>(`http://localhost:8080/api/rejestracja`, rejestracja)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  cancellRegistration$ = (rejestracja: Registration) => <Observable<CancellationResponse>>
  this.http.post<CancellationResponse>(`http://localhost:8080/api/odwolanie`, rejestracja)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

*/
  handleError(handleError: any): Observable<never> {
    return throwError ("Error :(")
  } 

  
}
