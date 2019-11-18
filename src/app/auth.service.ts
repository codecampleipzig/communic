import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register (userName: string, userEmail: string, password: string): Promise<any> {
    return new Promise<any> ((resolve, reject) => {
      resolve ({
        userName,
        userEmail,
        imageURL : '',
        userId : 4561723,
     });
    });
  }
}
