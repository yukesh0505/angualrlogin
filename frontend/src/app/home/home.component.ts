import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import * as $ from 'jquery'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggeduser: string
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private dataService: ApiService
  ) {}

  ngOnInit (): void {
    this.loggeduser = this.dataService.getToken()
  }

  logout () {
    this.dataService.deleteToken()
    this.router.navigate(['login'])
  }
}
