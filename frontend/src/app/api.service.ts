import { Injectable, Output, EventEmitter } from '@angular/core'
import { map } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { Users } from './users'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string

  baseUrl: string = 'http://localhost/backend/api'

  private token

  private headers

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter()

  constructor (
    private httpClient: HttpClient,
    private router: Router,
    private notification: ToastrService
  ) {}

  public userlogin (username, password) {
    // alert(username)
    return this.httpClient
      .post<any>(this.baseUrl + '/auth.php', { username, password })
      .pipe(
        map(Users => {
          return Users
        })
      )
  }

  public userregistration (name, email, pwd) {
    return this.httpClient
      .post<any>(this.baseUrl + '/users/register.php', { name, email, pwd })
      .pipe(
        map(Users => {
          return Users
        })
      )
  }

  public getallclient () {
    this.token = JSON.parse(window.localStorage.getItem('token')).token
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', this.token)

    return this.httpClient
      .get<any>(this.baseUrl + '/clients/getall.php', { headers: this.headers })
      .pipe(
        map(Users => {
          if (Users.retcode == -1) {
            this.notification.error(Users.status)
            this.logout()
          } else {
            return Users
          }
        })
      )
  }

  public deleteClient (id) {
    this.token = JSON.parse(window.localStorage.getItem('token')).token
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', this.token)

    return this.httpClient
      .delete<any>(this.baseUrl + '/clients/delete.php?id=' + id, {
        headers: this.headers
      })
      .pipe(
        map(Users => {
          if (Users.retcode == -1) {
            this.notification.error(Users.status)
            this.logout()
          } else {
            return Users
          }
        })
      )
  }

  public addClient (data) {
    this.token = JSON.parse(window.localStorage.getItem('token')).token
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', this.token)

    return this.httpClient
      .post<any>(this.baseUrl + '/clients/add.php', JSON.stringify(data), {
        headers: this.headers
      })
      .pipe(
        map(Users => {
          if (Users.retcode == -1) {
            this.notification.error(Users.status)
            this.logout()
          } else {
            return Users
          }
        })
      )
  }

  public updateClient (data, id) {
    this.token = JSON.parse(window.localStorage.getItem('token')).token
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', this.token)

    return this.httpClient
      .put<any>(this.baseUrl + '/clients/update.php?id='+id, JSON.stringify(data), {
        headers: this.headers
      })
      .pipe(
        map(Users => {
          if (Users.retcode == -1) {
            this.notification.error(Users.status)
            this.logout()
          } else {
            return Users
          }
        })
      )
  }

  //token
  setToken (token: Object) {
    localStorage.setItem('token', JSON.stringify(token))
  }
  getToken () {
    return JSON.parse(localStorage.getItem('token'))
  }
  deleteToken () {
    localStorage.removeItem('token')
  }
  logout () {
    this.deleteToken()
    this.router.navigate(['login'])
  }
  isLoggedIn () {
    const usertoken = this.getToken()
    if (usertoken != null) {
      return true
    }
    return false
  }
}
