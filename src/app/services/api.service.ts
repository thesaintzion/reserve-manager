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

  devUrl = 'http://localhost:1111/api/v2';
  constructor(private http: HttpClient) {

   }

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

       editUser(uid: any  ){
        return this.http.put<any>(`${this.devUrl}`, uid);
       }

  //  UTILITIES
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



  getBankDetails(){
    return this.http.get<any>(`${this.devUrl}/bank_details`);
  }
  addBankDetails(accountTypes: any){
    return this.http.post<any>(`${this.devUrl}/account_type`, accountTypes);
  }
  deleteBankDetails(id: any){
    return this.http.delete<any>(`${this.devUrl}/account_type/${id}`);
  }


 
  // addAccountType: "/api/v2/account_type",
  // getAccountType: "/api/v2/account_type",
  // deleteAccountType: "/api/v2/account_type/:id",

  // addBankDetails: "/api/v2/bank_details",
  // getBankDetails: "/api/v2/bank_details",
  // editBankDetails: "/api/v2/bank_details/:id",

  // addCountry: "/api/v2/country",
  // getCountry: "/api/v2/country",
  // deleteCountry: "/api/v2/country/:id",

  // addDenomination: "/api/v2/denomination",
  // getDenomination: "/api/v2/denomination",
  // deleteDenomination: "/api/v2/denomination/:id",

  // addGender: "/api/v2/gender",
  // getGender: "/api/v2/gender",
  // deleteGender: "/api/v2/gender/:id",

  // addInvestmentPeriod: "/api/v2/investment_period",
  // getInvestmentPeriod: "/api/v2/investment_period",
  // deleteInvestmentPeriod: "/api/v2/investment_period/:id",

  // addPromotionType: "/api/v2/promotion_type",
  // getPromotionType: "/api/v2/promotion_type",
  // deletePromotionType: "/api/v2/promotion_type/:id",  
 
    
}
