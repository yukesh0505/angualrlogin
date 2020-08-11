import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  title = 'User Signup';
  loginuser: any = {};
  invalidcredientals = false;

  ngOnInit(): void {
    // $('.mainrow').css({ 'min-height': ($(window).height() - 50) + 'px' });
    window.dispatchEvent(new Event('resize'));
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  


  login(item) {
    localStorage.removeItem("registerUser");
      this.loginuser = {
        username: item.username,
        password: item.password
      }
      localStorage.setItem("registerUser", JSON.stringify(this.loginuser));
      alert("Register successfull");
      this.router.navigate(['/login']); 
  }

 
}

