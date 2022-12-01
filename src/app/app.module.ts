import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RejestracjaComponent } from './rejestracja/rejestracja.component';
import { OdwolanieComponent } from './odwolanie/odwolanie.component';
import { SprawdzTerminComponent } from './sprawdz-termin/sprawdz-termin.component';

const routes: Routes = [
  {path: 'odwolanie', component: OdwolanieComponent},
  {path: 'rejestracja', component: RejestracjaComponent},
  {path: 'terminy', component: SprawdzTerminComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RejestracjaComponent,
    OdwolanieComponent,
    SprawdzTerminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
