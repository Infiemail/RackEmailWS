import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from '../Bo/response.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../Bo/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  appComponent: any;
  constructor(private http: HttpClient) { }
  windowHeight: any;
  windowWidth: any;
  signin(formData: any, success: any) {
    return this.http.post<any>(environment.accountUrl + "User/Signin", formData).subscribe(
      res => {
        let obj = res as Response;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
  otp(formData: any, success: any) {
    return this.http.post<any>(environment.accountUrl + "MailMaster/RegisterOtp", formData).subscribe(
      res => {
        let obj = res as Response;
        // return obj;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
  signup(formData: any, success: any) {
    return this.http.post<any>(environment.accountUrl + "User/UserAccount", formData).subscribe(
      res => {
        let obj = res as Response;
        // return obj;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
  ExistUser(formData: any, success: any) {
    return this.http.post<any>(environment.accountUrl + "User/ExistUser", formData).subscribe(
      res => {
        let obj = res as Response;
        // return obj;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
  ForgotPassword(formData: any, success: any) {
    return this.http.post<any>(environment.accountUrl + "User/ForgotPassword", formData).subscribe(
      res => {
        let obj = res as Response;
        // return obj;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
  createSubscription(formData: any, success: any) {
    return this.http.post<any>(environment.accountUrl + "Subscription/CreateMailPricing", formData).subscribe(
      res => {
        let obj = res as Response;
        // return obj;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
  async CreateNotification(formData: any, success: any) {
    return this.http.post<any>(environment.mailer + "Share/CreateNotification", formData).subscribe(
      res => {
        let obj = res as Response;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }

  Register(user:User,success:any){
    return this.http.post(environment.accountUrl + "User/RegisternewUser", user).subscribe(
      res => {
        let obj = res as Response;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }

  SetPassword(pswd:any,path:any,success:any){
    return this.http.post(environment.accountUrl + "User/SetPassword/"+ pswd+"/"+path,'').subscribe(
      res => {
        let obj = res as Response;
        if (success) {
          success(obj);
        }
      },
      err => {
        console.log(err);
      });
  }
}
