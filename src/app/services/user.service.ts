import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from '../models/user';
//import {ApiResponse} from 'src/app/models/api-response'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  createUser(user: User){
    return this.http.post("http://localhost:5555/userdata/",user)
    }

  constructor(private http: HttpClient) { }
   
  // getdata(){
  //   return this.http.get("http://localhost/Myshopee/fetch.php")
  // }
 
   

}
