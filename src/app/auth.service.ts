import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  async register(
    userName: string,
    userEmail: string,
    password: string
  ): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      resolve({
        userName,
        userEmail,
        ImageUrl: "",
        userId: 1234
      });
    });
  }
}
