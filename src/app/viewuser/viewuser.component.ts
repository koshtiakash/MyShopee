import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  user:any=[];
  constructor(private dataservice:UserService) { }
  getuserdata(){
    this.dataservice.getUser().subscribe((res)=>{
      this.user=res
    })
  }

  ngOnInit(): void {
    this.getuserdata()
  }

}
