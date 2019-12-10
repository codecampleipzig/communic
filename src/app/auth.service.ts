import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "./../environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() { }
  /**
   * Register user
   * @param userName 
   * @param userEmail 
   * @param password 
   */
  register(userName: string, userEmail: string, password: string): Promise<any> {
    // return new Promise<any>((resolve, reject) => {
    //   resolve({
    //     userName,
    //     userEmail,
    //     ImageUrl: "",
    //     userId: 1234,
    //   });
    // });
    // we need to send userName, userEmail, password - need to put them in user object
    const registerUserData = {
      userName,
      userEmail,
      password
    }
    return axios.post(`${environment.api_url}/register`, registerUserData)
      .then(response => {
        // return response.data
        console.log(response.data);
      })
      .catch(error => {
        // return error
        console.log(error);
      });
  }

  /**
   * Login user 
   * @param userEmail
   * @param password 
   */
  login(userEmail: string, password: string): Promise<any> {
    const loginUserData = {
      userEmail,
      password
    }
    return axios.post(`${environment.api_url}/login`, loginUserData)
      .then(response => {
        // return response.data
        console.log(response.data);
      })
      .catch(error => {
        // return error
        console.log(error);
      })
  }
}
