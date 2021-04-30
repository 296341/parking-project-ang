import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parking } from 'src/app/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-update-parking',
  templateUrl: './update-parking.component.html',
  styleUrls: ['./update-parking.component.css']
})
export class UpdateParkingComponent implements OnInit {
  _id!: string;
  parking!: Parking;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private parkingService: ParkingService
    ) { }

  ngOnInit(): void {
    this.parking = new Parking();

    this._id = this.route.snapshot.params['id'];

    this.parkingService.getOne(this._id)
    .subscribe(data =>{
      console.log(data)
      this.parking = data;
  
    },
    error => console.log(error));
  }

  updateParking(){
    this.parkingService.update(this._id, this.parking)
    .subscribe(data => {
      console.log(data);
      this.parking = new Parking();
      this.submitted = true;
      this.goToList();
    }, error => console.log(error));
  }


  goToList(){
    this.router.navigate(['/parkings'])
  }

}
