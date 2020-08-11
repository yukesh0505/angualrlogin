import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'User Login'
  loginuser: any = {}
  invalidcredientals = false
  check: any = {}

  ngOnInit (): void {
    // $('.mainrow').css({ 'min-height': ($(window).height() - 50) + 'px' });
    window.dispatchEvent(new Event('resize'))
  }

  constructor (private route: ActivatedRoute, private router: Router) {}

  login (item) {
    localStorage.removeItem('loggedUser')
    this.loginuser = {
      username: item.username,
      password: item.password
    }
    if (localStorage.getItem('registerUser') != null) {
      this.check = JSON.parse(localStorage.getItem('registerUser'))
      if (
        this.loginuser.username == this.check.username &&
        this.loginuser.password == this.check.password
      ) {
        // alert('Login Successfull')
        localStorage.setItem('loggedUser', JSON.stringify(this.loginuser))
        this.router.navigate(['/home']); 
      } else {
        alert('Username and password does not match')
      }
    } else {
      alert('No user exists')
    }
    
  }
}
