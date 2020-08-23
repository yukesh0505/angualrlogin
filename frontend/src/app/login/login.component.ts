import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms'
import { first } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ApiService } from '../api.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup
  loginuser: any = {}
  constructor (
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
    private notification: ToastrService
  ) {}

  ngOnInit () {
    // if (this.dataService.isLoggedIn) {
    //   this.router.navigate(['dashboard'])
    // } else {

    // }
  }
  postdata (loginuser) {
    this.dataService
      .userlogin(loginuser.email, loginuser.password)
      .pipe(first())
      .subscribe(
        data => {
          if (data.retcode == 0) {
            this.dataService.setToken(data.result)
            const redirect = this.dataService.redirectUrl
              ? this.dataService.redirectUrl
              : '/dashboard'
            this.router.navigate([redirect])
          } else {
            this.notification.error(data.status)
          }
        },
        error => {
          this.notification.error('Error')
        }
      )
  }
}
