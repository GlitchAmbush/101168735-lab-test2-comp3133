import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  @Input() flightNum: number | undefined;
  launch: any;

  constructor(private http: HttpClient) {
    this.getLaunch(this.flightNum);
  }

  getLaunch(flightNum: number | undefined) {
    this.http.get(`https://api.spacexdata.com/v3/launches/${flightNum}`).subscribe((response: any) => {
      this.launch = response;
    });
  }
}
