import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-regsucess',
  templateUrl: './regsucess.component.html',
  styleUrls: ['./regsucess.component.css']
})
export class RegsucessComponent implements OnInit {

  // userlist:any= []
  constructor(private apiservice: UserService) { }

  ngOnInit(): void {

    // this.apiservice.getdata().subscribe((userdata)=>{
    //   this.userlist=userdata;
    //   console.log(this.userlist)
    // })
  }

}
