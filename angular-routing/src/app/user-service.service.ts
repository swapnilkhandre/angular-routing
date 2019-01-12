import { Injectable } from "@angular/core";
import { User } from "./model/User";

@Injectable({
  providedIn: "root"
})
export class UserServiceService {
  signInFlag: number;
  constructor() {
    this.signInFlag = -1;
  }
  signIn(user: User) {
    if (user.userId == "admin" && user.password == "admin") {
      this.signInFlag = 1;
    } else {
      this.signInFlag = 0;
    }
  }
}
