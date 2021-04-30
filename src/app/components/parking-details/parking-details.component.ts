import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parking } from 'src/app/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.css']
})
export class ParkingDetailsComponent implements OnInit {
 _id!: string;
 parking!: Parking;

  constructor(
    private parkingService: ParkingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.parking = new Parking();
    
    this._id = this.route.snapshot.params['id'];

    this.parkingService.getOne(this._id)
    .subscribe(
      data => {
      console.log(data)
      this.parking = data;
      }, 
      error => console.log(error));
  }

  list(){
    this.router.navigate(['parkings']);
  }


  /*getParking(id: string | null): void {
    this.parkingService.getOne(id)
      .subscribe(
        data => {
          this.currentParking = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: any): void {
    const data = {
      name: this.currentParking,
      city: this.currentParking,
      type: this.currentParking,
      published: status
    };

    this.parkingService.update(this.currentParking, data)
      .subscribe(
        response => {
          this.currentParking = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateParking(): void {
    this.parkingService.update(this.currentParking, this.currentParking)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The parking was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteParking(): void {
    this.parkingService.delete(this.currentParking)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/parkings']);
        },
        error => {
          console.log(error);
        });
  }*/
}

