"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var jsPDF = require("jspdf");
// declare var jsPDF: any
var html2canvas = require("html2canvas");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, dataService, router, notification) {
        this.fb = fb;
        this.dataService = dataService;
        this.router = router;
        this.notification = notification;
        this.clientlist = [];
        this.loggeduser = {};
        this.client = {};
        this.listview = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.listview = true;
        this.getAllClients();
        this.loggeduser = this.dataService.getToken();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        console.log(this.htmlData);
        // this.divView.nativeElement.innerHTML = "Hello Angular 10!";
    };
    DashboardComponent.prototype.getAllClients = function () {
        var _this = this;
        this.dataService
            .getallclient()
            .pipe(operators_1.first())
            .subscribe(function (data) {
            if (data.retcode == 0) {
                _this.clientlist = data.results;
                console.log(_this.clientlist);
            }
            else {
                _this.notification.error(data.status);
            }
        }, function (error) {
            _this.notification.error('Error');
        });
    };
    DashboardComponent.prototype.confirmDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure')) {
            this.dataService
                .deleteClient(id)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                if (data.retcode == 0) {
                    _this.notification.success(data.status);
                    _this.getAllClients();
                }
                else {
                    _this.notification.error(data.status);
                }
            }, function (error) {
                _this.notification.error('Error');
            });
        }
    };
    DashboardComponent.prototype.showAddView = function () {
        this.listview = false;
        this.client = {};
    };
    DashboardComponent.prototype.showListView = function () {
        this.listview = true;
    };
    DashboardComponent.prototype.addClient = function (data) {
        var _this = this;
        if (!data.id) {
            this.dataService
                .addClient(data)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                if (data.retcode == 0) {
                    _this.notification.success(data.status);
                    _this.listview = true;
                    _this.getAllClients();
                }
                else {
                    _this.notification.error(data.status);
                }
            }, function (error) {
                _this.notification.error('Error');
            });
        }
        else {
            this.dataService
                .updateClient(data, data.id)
                .pipe(operators_1.first())
                .subscribe(function (data) {
                if (data.retcode == 0) {
                    _this.notification.success(data.status);
                    _this.listview = true;
                    _this.getAllClients();
                }
                else {
                    _this.notification.error(data.status);
                }
            }, function (error) {
                _this.notification.error('Error');
            });
        }
        // console.log(data)
    };
    DashboardComponent.prototype.showUpdateView = function (data) {
        this.client = data;
        this.listview = false;
    };
    DashboardComponent.prototype.downloadPDF = function () {
        // let DATA = this.htmlData.nativeElement
        // let doc = new jsPDF('p', 'pt', 'a4')
        // let handleElement = {
        //   '#editor': function (element, renderer) {
        //     return true
        //   }
        // }
        // // doc.fromHTML(DATA.innerHTML, 15, 15, {
        // //   elementHandlers: handleElement
        // // })
        // var margins = {
        //   top: 10,
        //   bottom: 10,
        //   left: 10,
        //   width: 595
        // };
        // doc.fromHTML(
        //   DATA, // HTML string or DOM elem ref.
        //   margins.left,
        //   margins.top, {
        //     'width': margins.width,
        //     'elementHandlers': handleElement
        //   },
        //   function(dispose) {
        //     // dispose: object with X, Y of the last line add to the PDF 
        //     //          this allow the insertion of new lines after html
        //     doc.save('Test.pdf');
        //   }, margins);
        var data = document.getElementById('htmlData');
        html2canvas(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('invoice.pdf'); // Generated PDF  
            // var pdfuri = pdf.output('datauristring');
            // PDFObject.embed(pdfuri, "#pdf_preview")
            console.log(contentDataURL);
            // var preview_container = $('#pdf_preview')
            // preview_container.attr('src', contentDataURL);     
        });
    };
    //   public downloadPDF(): void {
    //     const doc = new jsPDF('p', 'pt', 'letter');
    //     const content = this.htmlData.nativeElement;
    //     const margins = {
    //       top: 80,
    //       bottom: 60,
    //       left: 40,
    //       width: 522
    //     };
    //     console.log(doc);
    //  //   setTimeout(() => { ** REMOVE **
    //       doc.fromHTML(content.innerHTML, margins.left, margins.top, {}, function () {
    //       //  doc.output('export.pdf'); ** REMOVE **
    //         doc.save("export.pdf");
    //       }, margins);
    //  //   }, 100); ** REMOVE **
    //   }
    DashboardComponent.prototype.logout = function () {
        this.dataService.logout();
    };
    __decorate([
        core_1.ViewChild('htmlData')
    ], DashboardComponent.prototype, "htmlData");
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
