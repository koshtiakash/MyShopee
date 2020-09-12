import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  model: any={}
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    console.log(this.model)
  }


}
