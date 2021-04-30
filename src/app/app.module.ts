import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddParkingComponent } from './components/add-parking/add-parking.component';
import { ParkingsListComponent } from './components/parkings-list/parkings-list.component';
import { ParkingDetailsComponent } from './components/parking-details/parking-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateParkingComponent } from './components/update-parking/update-parking.component';

@NgModule({
  declarations: [
    AppComponent,
    AddParkingComponent,
    ParkingsListComponent,
    ParkingDetailsComponent,
    UpdateParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
