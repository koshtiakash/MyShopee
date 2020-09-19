import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

const api ="http://localhost/Myshopee/";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }

  addUser(data)
  {
    return this.http.post(api + 'adduser.php',data);
  }
   
  getUser()
  {
    return this.http.get(api + 'fetchuser.php');
  }
}
