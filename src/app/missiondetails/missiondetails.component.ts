import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  launch: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.http.get(`https://api.spacexdata.com/v3/launches/${params.get('flight_number')}`).subscribe(response => {
        this.launch = response;
        console.log(response);
      });
    });
  }
}
