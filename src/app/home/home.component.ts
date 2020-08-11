import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home'
  loggeduser: any = {}

  constructor (private route: ActivatedRoute, private router: Router) {}

  ngOnInit (): void {
    if (localStorage.getItem('loggedUser') != null) {
      this.loggeduser = JSON.parse(localStorage.getItem('loggedUser'))
    } else {
      this.router.navigate(['/login'])
    }
  }

  logout () {
    localStorage.removeItem('loggedUser')
    this.router.navigate(['/login'])
  }
}
