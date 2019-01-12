import { Router } from '@angular/router';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit() {
  }
  signOut(){
    this.userService.signInFlag=-1
    this.router.navigateByUrl("/sign-in")
  }

}
