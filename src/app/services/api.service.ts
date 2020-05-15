import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  USER = {
id: null,
firstname: null,
lastname: null,
email: null,
user_type_id:  null,
phone_number:  null,
gender_id:  null,
address:  null,
status: null,
activated:  null,
country_id:  null,
identification_filename:  null,
proof_of_address_filename:  null,
promotion_type_id: null,
createdAt: null,
updatedAt:  null,
  }

  LOADING = {
    isLoading: null,
  }

  devUrl = 'http://localhost:9000/api/v2';

  constructor(private http: HttpClient) {

   }

  //  USER   //

   addUser(user: any){
return this.http.post<any>(`${this.devUrl}/user`, user)
   }

   login(user: any){
    return this.http.post<any>(`${this.devUrl}/login`, user)
      }

      getLoggedInUser(){
        return this.http.get<any>(`${this.devUrl}/user/single`);
       }

       getUserInfo(uid: any){
        return this.http.get<any>(`${this.devUrl}/user?uid=${uid}`);
       }

       getUsers(){
        return this.http.get<any>(`${this.devUrl}/user`);
       }

       editUser(user: any,  uid: any ){
        return this.http.put<any>(`${this.devUrl}/user/${uid}`, user);
       }
       deleteUser(uid: any ){
        return this.http.delete<any>(`${this.devUrl}/user/${uid}`);
       }

       editPassword(password: any, uid: any){
        return this.http.put<any>(`${this.devUrl}/user/password/${uid}`, password);
       }

      // USER ACCOUNT  //

  addAccount(account: any){
    return this.http.post<any>(`${this.devUrl}/account`, account);
  }
  getAccount(uid, account_id, query){
    return this.http.get<any>(`${this.devUrl}/account?uid=${uid}&account_id=${account_id}&query=${query}`);
  }
  editAccount(account: any,  account_id: any ){
    return this.http.put<any>(`${this.devUrl}/account/${account_id}`, account);
  }

  deleteAccount(account_id: any){
    return this.http.delete<any>(`${this.devUrl}/account/${account_id}`);
  }

  //  UTILITIES //
  getCountries(){
    return this.http.get<any>(`${this.devUrl}/country`);
  }
  addCountry(country: any){
    return this.http.post<any>(`${this.devUrl}/country`, country);
  }
  deleteCountry(id: any){
    return this.http.delete<any>(`${this.devUrl}/country/${id}`);
  }
  getGengers(){
    return this.http.get<any>(`${this.devUrl}/gender`);
  }
  addGender(gender: any){
    return this.http.post<any>(`${this.devUrl}/gender`, gender);
  }
  deleteGender(id: any){
    return this.http.delete<any>(`${this.devUrl}/gender/${id}`);
  }
  getPromotionTypes(){
    return this.http.get<any>(`${this.devUrl}/promotion_type`);
  }
  addPromotionType(promotionType: any){
    return this.http.post<any>(`${this.devUrl}/promotion_type`, promotionType);
  }
  deletePromotionType(id: any){
    return this.http.delete<any>(`${this.devUrl}/promotion_type/${id}`);
  }
  getDenominations(){
    return this.http.get<any>(`${this.devUrl}/denomination`);
  }
  addDenomination(denomination: any){
    return this.http.post<any>(`${this.devUrl}/denomination`, denomination);
  }
  deleteDenomination(id: any){
    return this.http.delete<any>(`${this.devUrl}/denomination/${id}`);
  }
  getInvestmentPeriods(){
    return this.http.get<any>(`${this.devUrl}/investment_period`);
  }
  addInvestmentPeriod(investmentPeriod: any){
    return this.http.post<any>(`${this.devUrl}/investment_period`, investmentPeriod);
  }
  deleteInvestmentPeriod(id: any){
    return this.http.delete<any>(`${this.devUrl}/investment_period/${id}`);
  }
  getAccountTypes(){
    return this.http.get<any>(`${this.devUrl}/account_type`);
  }
  addAccountType(accountTypes: any){
    return this.http.post<any>(`${this.devUrl}/account_type`, accountTypes);
  }
  deleteAccountType(id: any){
    return this.http.delete<any>(`${this.devUrl}/account_type/${id}`);
  }





  // Admin Bank Details
  getBankDetails(){
    return this.http.get<any>(`${this.devUrl}/bank_details`);
  }
  addBankDetails(bankDetails: any){
    return this.http.post<any>(`${this.devUrl}/bank_details`, bankDetails);
  }
  editBankDetails(body: any, id: any){
    return this.http.put<any>(`${this.devUrl}/bank_details/${id}`, body);
  }
  
  
  // User Bank Details
  getUserBankDetails(uid, all){
    return this.http.get<any>(`${this.devUrl}/user_bank_details?uid=${uid}&all=${all}`);
  }
  addUserBankDetails(bankDetails: any){
    return this.http.post<any>(`${this.devUrl}/user_bank_details`, bankDetails);
  }
  editUserBankDetails(body: any, id: any){
    return this.http.put<any>(`${this.devUrl}/user_bank_details/${id}`, body);
  }
 

}
