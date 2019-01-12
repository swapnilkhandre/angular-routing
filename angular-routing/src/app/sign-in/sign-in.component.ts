import { UserServiceService } from "./../user-service.service";
import { User } from "./../model/User";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  user: User;
  constructor(private userService: UserServiceService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {}
  signInCall() {
    console.log("here");
    this.userService.signIn(this.user);
    this.router.navigateByUrl("/home");
  }
}
