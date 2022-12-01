import { Component } from '@angular/core';
import { ClinikService } from '../service/clinik.service';
import { Doctor } from '../interface/doctor';
import { Clinic } from '../interface/clinic';

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.css'],
  providers: [ClinikService]
})
export class RejestracjaComponent {

  doctors: Doctor[] = [];
  clinics: Clinic[] = [];
  constructor(private clinikService: ClinikService){}


  ngOnInit(): void {
    this.clinikService.getDoctors().subscribe((result) => {
      this.doctors = result as Doctor[];
    },
      (error) => {
        console.error(error);
      })

      this.clinikService.getClinic().subscribe((result) => {
        this.clinics = result as Clinic[];
    },
      (error) => {
        console.error(error);
      })
  }

  showDoctors(){
    this.clinikService.getDoctors().subscribe((result) => {
      this.doctors = result as Doctor[];
    },
      (error) => {
        console.error(error);
      })
  }
}
