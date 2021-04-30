import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddParkingComponent } from './components/add-parking/add-parking.component';
import { ParkingDetailsComponent } from './components/parking-details/parking-details.component';
import { ParkingsListComponent } from './components/parkings-list/parkings-list.component';
import { UpdateParkingComponent } from './components/update-parking/update-parking.component';

const routes: Routes = [
  {path: '', redirectTo: 'parkings', pathMatch: 'full'},
  {path: 'parkings', component: ParkingsListComponent },
  {path: 'parkings/:id', component: ParkingDetailsComponent},
  {path: 'update/:id', component: UpdateParkingComponent},
  {path: 'add', component: AddParkingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
