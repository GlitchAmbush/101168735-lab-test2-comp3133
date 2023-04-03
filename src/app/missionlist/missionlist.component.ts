import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  launches: any[] = [];
  
  constructor(private http: HttpClient) {
    this.loadLaunches();
  }

  loadLaunches() {
    this.http.get('https://api.spacexdata.com/v3/launches').subscribe((launches: any) => {
      this.launches = launches;
    });
  }
}
