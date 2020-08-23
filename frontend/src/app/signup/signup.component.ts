import { Component, OnInit } from '@angular/core'
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  NgForm
} from '@angular/forms'
import { first } from 'rxjs/operators'
import { Router } from '@angular/router'
import { ApiService } from '../api.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup
  registeruser: any = {}
  constructor (
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
    private notification: ToastrService
  ) {}

  ngOnInit () {
    // if (this.dataService.isLoggedIn) {
    //   this.router.navigate(['dashboard'])
    // }
  }

  postdata (data) {
    if (data.password == data.passwordconfirm) {
      this.dataService
        .userregistration(data.name, data.email, data.password)
        .pipe(first())
        .subscribe(
          data => {
            if (data.retcode == 0) {
              this.notification.success('Registartion successfull')
              this.router.navigate(['login'])
            } else {
              this.notification.error(data.status)
            }
          },

          error => {}
        )
    } else {
      this.notification.error("Password mismatch")
    }
  }
}
