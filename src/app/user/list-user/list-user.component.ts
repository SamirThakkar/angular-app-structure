import {Component, ViewChild} from '@angular/core';
import 'rxjs/Rx';
import {UserService} from '../shared/user.service';
import {AuthService} from '../../auth/shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {conformToMask} from 'angular2-text-mask';
import {AgGridNg2} from 'ag-grid-angular';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../../../@shared/services/notification.service';

@Component({
  selector: 'form-list',
  templateUrl: './list-user.component.html',
  providers: [UserService]
})
export class UserListComponent {


  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    console.log('===>>>',this.route.snapshot.data['users'].Data.data);
  }

  // pageHeaderOptions: any = { title: 'Notifications', button: { text: 'Add Notification', link: '/notification/add', icon: 'icon-plus' } };
  gridOptions = {
    columns: [
      {
        field: 'name',
        sort: 'asc',
        cellRenderer: (cell) => {
          return cell.data ? (cell.data.deletedAt ? '<span class="deleted">[Deleted] </span>' + cell.data.name : cell.data.name) : '';
        },
      },
      {
        headerName: 'User Name',
        field: 'username',

      },
      {
        headerName: 'Email',
        field: 'email',

      },
      {
        headerName: 'User Id',
        field: '_id',

      },
      {
        headerName: 'Type',
        field: 'type'
      },
      {
        headerName: 'Status',
        field: 'isActive',
        width: 150,
        suppressSizeToFit: false,
        filter: 'set', filterParams: {
          values: ['Active', 'Inactive'], queryValues: ['true', 'false']
        },
        cellRenderer: (cell) => cell.data ? (cell.data.isActive ? '<i class="fa fa-check" aria-hidden="true"></i>' : '<i class="fa fa-close" aria-hidden="true"></i>') : ''
      },
    ],
    rowData: this.route.snapshot.data['users'].Data.data,
    getData: (searchQuery) => this.userService.listUser(),
    deleteRow: (id) => {
      return Observable.create((subscriber) => {
        this.userService.removeUser(id)
          .subscribe(() => subscriber.next(),
            (response) => {
              if (response.error.Name == 'ValidationError') {
                if (window.confirm(response.error.Message)) {
                  this.userService.removeUser(id)
                    .subscribe(() => subscriber.next());
                }
              } else {
                let message = response.error.Message || 'Error in removing notification';
                this.notificationService.showNotification({message, type: 'error'});
              }
            });
      });
    },
    editRow: (id) => {
      console.log('_ID',id);
      this.router.navigate(['/user/edit', id])
    }
  };







  getData(){
    let id = '5ae844efa77c463e0d5b083e';
    this.userService.getUserById(id)
      .subscribe(
        result => {
          console.log('result',result)
        },
        error => {
          console.log('error', error);
        });
  }

}

//
// @ViewChild('agGrid') agGrid: AgGridNg2;
//
// title = 'app';
//
// columnDefs = [
//   {headerName: 'Make', field: 'make', checkboxSelection: true },
//   {headerName: 'Model', field: 'model' },
//   {headerName: 'Price', field: 'price'}
// ];
//
// rowData: any;
//
// constructor(private http: HttpClient) {
//
// }
//
// ngOnInit() {
//   // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
//   this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
//   console.log('this.rowData', this.rowData);
//
// }
//
// getSelectedRows() {
//   const selectedNodes = this.agGrid.api.getSelectedNodes();
//   const selectedData = selectedNodes.map( node => node.data );
//   const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
//   alert(`Selected nodes: ${selectedDataStringPresentation}`);
// }


//-----------------------------------------------------------

//
// import { Component } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Rx';
// import { CommonService } from '../../@shared/services/common.service';
// import {NotificationService} from "../shared/notification.service";
//
// /**
//  * @Component ListNotificationComponent
//  * @description component for display notification
//  * @tickets #PO-26
//  */
// @Component({
//     selector: 'list-notification',
//     templateUrl: './list-notification.component.html'
// })
// export class ListNotificationComponent {
//     pageHeaderOptions: any = { title: 'Notifications', button: { text: 'Add Notification', link: '/notification/add', icon: 'icon-plus' } };
//     gridOptions = {
//         columns: [
//             {
//                 field: 'name',
//                 sort: 'asc',
//                 cellRenderer :(cell)=>{
//                     return cell.data?(cell.data.deletedAt?'<span class="deleted">[Deleted] </span>'+cell.data.name:cell.data.name):'';
//                 },
//
//             },
//             {
//                 headerName: 'Type', field: 'type'
//             },
//             {
//                 headerName: 'Status',
//                 field: 'isActive',
//                 width: 150,
//                 suppressSizeToFit: false,
//                 filter: 'set', filterParams: {
//                     values: ['Active', 'Inactive'], queryValues: ['true', 'false']
//                 },
//                 cellRenderer: (cell) => cell.data ? (cell.data.isActive ? '<i class="fa fa-check" aria-hidden="true"></i>' : '<i class="fa fa-close" aria-hidden="true"></i>') : ''
//             },
//         ],
//         rowData: this.route.snapshot.data['notifications'],
//         getData: (searchQuery) => this.notificationService.listNotification(searchQuery),
//         deleteRow: (id) => {
//             return Observable.create((subscriber) => {
//                 this.notificationService.removeNotification(id)
//                     .subscribe(() => subscriber.next(),
//                         (response) => {
//                             if (response.error.Name == 'ValidationError') {
//                                 if (window.confirm(response.error.Message)) {
//                                     this.notificationService.removeNotification(id)
//                                         .subscribe(() => subscriber.next())
//                                 }
//                             } else {
//                                 let message = response.error.Message || 'Error in removing notification';
//                                 this.commonService.showNotification({ message, type: 'error' });
//                             }
//                         });
//             });
//         },
//         editRow: (id) => this.router.navigate(['/notification/edit', id])
//     };
//
//
// }
