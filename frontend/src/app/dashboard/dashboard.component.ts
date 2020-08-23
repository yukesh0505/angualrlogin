import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core'
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
import { orderBy } from 'lodash'
import { TabHeadingDirective } from 'ngx-bootstrap/tabs/public_api'
import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas'
import 'jspdf-autotable'
// import { saveAs } from 'file-saver/FileSaver'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clientlist = []
  loggeduser: any = {}
  client: object = {}
  listview: boolean = true
  angForm: FormGroup
  constructor (
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router,
    private notification: ToastrService
  ) {}

  ngOnInit (): void {
    this.listview = true
    this.getAllClients()
    this.loggeduser = this.dataService.getToken()
  }

  ngAfterViewInit () {}

  getAllClients () {
    this.dataService
      .getallclient()
      .pipe(first())
      .subscribe(
        data => {
          if (data.retcode == 0) {
            this.clientlist = data.results
            console.log(this.clientlist)
          } else {
            this.notification.error(data.status)
          }
        },
        error => {
          this.notification.error('Error')
        }
      )
  }

  confirmDelete (id: String) {
    if (confirm('Are you sure')) {
      this.dataService
        .deleteClient(id)
        .pipe(first())
        .subscribe(
          data => {
            if (data.retcode == 0) {
              this.notification.success(data.status)
              this.getAllClients()
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

  showAddView () {
    this.listview = false
    this.client = {}
  }

  showListView () {
    this.listview = true
  }

  addClient (data) {
    if (!data.id) {
      this.dataService
        .addClient(data)
        .pipe(first())
        .subscribe(
          data => {
            if (data.retcode == 0) {
              this.notification.success(data.status)
              this.listview = true
              this.getAllClients()
            } else {
              this.notification.error(data.status)
            }
          },
          error => {
            this.notification.error('Error')
          }
        )
    } else {
      this.dataService
        .updateClient(data, data.id)
        .pipe(first())
        .subscribe(
          data => {
            if (data.retcode == 0) {
              this.notification.success(data.status)
              this.listview = true
              this.getAllClients()
            } else {
              this.notification.error(data.status)
            }
          },
          error => {
            this.notification.error('Error')
          }
        )
    }

    // console.log(data)
  }

  showUpdateView (data) {
    this.client = data
    this.listview = false
  }

  downloadPDF () {
    //method-1
    // var data = document.getElementById('htmlData')
    // html2canvas(data).then(canvas => {
    //   // Few necessary setting options
    //   var imgWidth = 208
    //   var pageHeight = 295
    //   var imgHeight = (canvas.height * imgWidth) / canvas.width
    //   var heightLeft = imgHeight

    //   var contentDataURL = canvas.toDataURL('image/png')

    //   let pdf = new jsPDF('p', 'mm', 'a4') // A4 size page of PDF
    //   var position = 0
    //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    //   pdf.save('invoice.pdf') // Generated PDF

    //   console.log(contentDataURL)

    // })

    //method-2
    var doc = new jsPDF()
    var col = [
      '#',
      'Email',
      'Name',
      'Phone',
      'Address1',
      'Address1',
      'Created On'
    ]
    var rows = []
    var itemNew = this.clientlist
    console.log(itemNew)
    var i = 0
    itemNew.forEach(element => {
      var d = new Date(element.created_at)
      var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
      var mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
      var da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
      var date = `${da}-${mo}-${ye}`
      var temp = [
        ++i,
        element.email,
        element.name,
        element.phone,
        element.address1,
        element.address2,
        date
      ]
      rows.push(temp)
    })

    doc.autoTable(col, rows)
    doc.save('Clients.pdf')
  }
  

  logout () {
    this.dataService.logout()
  }
}
