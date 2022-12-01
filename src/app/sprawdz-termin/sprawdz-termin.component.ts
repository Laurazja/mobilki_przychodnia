import { Component, OnInit } from '@angular/core';
import { ClinikService } from '../service/clinik.service';
import { Doctor } from '../interface/doctor';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VisitDate } from '../interface/visitDate';

@Component({
  selector: 'app-sprawdz-termin',
  templateUrl: './sprawdz-termin.component.html',
  styleUrls: ['./sprawdz-termin.component.css'],
  providers: [ClinikService]
})
export class SprawdzTerminComponent implements OnInit{

  doctors: Doctor[] = [];
  dates: VisitDate[] = [];
  selectedDoctor: number = 1;
  constructor(private clinikService: ClinikService){}
  ngOnInit(): void {
    this.clinikService.getDoctors().subscribe((result) => {
      this.doctors = result as Doctor[];
    },
      (error) => {
        console.error(error);
      })

 /*      this.clinikService.getDateByDoctor().subscribe((result) => {
        this.doctors = result as Doctor[];
      },
        (error) => {
          console.error(error);
        }) */
  }

 showDatesByDoctors(id: number){
    this.clinikService.getDateByDoctor(id).subscribe((result) => {
      this.dates = result as VisitDate[];    
    },
      (error) => {
        console.error(error);
      })
  }

}
