import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-Basics';
  datas:any;

  constructor(private userData: GetApiService) {}
  ngOnInit() {
    this.userData.getData().subscribe(response => {
      // console.warn(data)
      this.datas= response;
    })
  }
}
