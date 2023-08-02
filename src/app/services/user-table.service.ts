import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Iuser } from '../model/interfaces/Iuser.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTableService {

  constructor(private http : HttpClient) { }

  //function to get the user details
  getUserData():Observable<Iuser[]>{
    return this.http.get<Iuser[]>(environment.userDetailsApi)
  }
}
