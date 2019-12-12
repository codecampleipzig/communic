import { Injectable } from "@angular/core";
import { axiosInstance } from "./axios-instance";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
  /**
   * Post registerUserData, returning user data and token for logging-in the user
   * @param userName Name provided on the Register form
   * @param userEmail Email provided on the Register form
   * @param password Password provided on the Register form
   * @param userImageUrl Image uploaded on the Register form
   */
  register(username: string, email: string, password: string, userImageUrl: string): Promise<any> {
    const registerUserData = {
      username,
      email,
      password,
      userImageUrl,
    };
    return axiosInstance.post(`/register`, registerUserData).then(response => {
      return response.data;
    });
  }

  /**
   * Post loginUserData, returning user data and token for logging-in the user
   * @param userEmail Email provided on the Login form
   * @param password Password provided on the Login form
   */
  login(email: string, password: string): Promise<any> {
    const loginUserData = {
      email,
      password,
    };
    return axiosInstance.post(`/login`, loginUserData).then(response => {
      return response.data;
    });
  }
}
