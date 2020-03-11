import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  devUrl = 'http://localhost:1111/api/v2';
  constructor(private http: HttpClient) {

   }

   addUser(user: any){
return this.http.post<any>(`${this.devUrl}/user`, user)
   }

   login(user: any){
    return this.http.post<any>(`${this.devUrl}/login`, user)
       }

  //  UTILITIES
  getCountries(){
    return this.http.get<any>(`${this.devUrl}/country`);
  }
  getGengers(){
    return this.http.get<any>(`${this.devUrl}/gender`);
  }
  getPromotionTypes(){
    return this.http.get<any>(`${this.devUrl}/promotion_type`);
  }
  
   get(){
     return this.http.get<any>('http://localhost:1111/');
   }
}
