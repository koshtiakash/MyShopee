import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {User} from 'src/app/models/user';
import {ApiResponse} from 'src/app/models/api-response'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl ="http://localhost/Myshopee/";

  createUser(user: User): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.baseUrl + "adduser.php",user)
  }
}
