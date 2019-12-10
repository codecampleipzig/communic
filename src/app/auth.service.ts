import { Injectable } from "@angular/core";
import { axiosInstance } from "./axios-instance";

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
  register(userName: string, userEmail: string, password: string, userImageUrl: string): Promise<any> {
    const registerUserData = {
      userName,
      userEmail,
      password,
      userImageUrl
    }
    return axiosInstance.post(`/register`, registerUserData)
      .then(response => {
        return response.data
        // console.log(response.data);
      })
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
    return axiosInstance.post(`/login`, loginUserData)
      .then(response => {
        // return response.data
        console.log(response.data);
      })
  }

  /**
   * We would need to send the auth token on each subsequent request after successful login/registration until logout
   * https://www.npmjs.com/package/axios#response-schema
   * instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
   */
}
