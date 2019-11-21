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
    try {
      const response = await axios.post("http://localhost:3001/api/register");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
