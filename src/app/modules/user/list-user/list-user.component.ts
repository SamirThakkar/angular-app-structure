import {Component, ViewChild} from '@angular/core';
import {UserService} from '../shared/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NotificationService} from '../../../@shared/services/notification.service';

@Component({
  selector: 'form-list',
  templateUrl: './list-user.component.html',
  providers: [UserService]
})
export class UserListComponent {

  myOptions : any = " world";

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    // console.log('===>>>', this.route.snapshot.data['users'].Data.data);
  }






  getData() {
    let id = '5ae844efa77c463e0d5b083e';
    this.userService.getUserById(id)
      .subscribe(
        result => {
          console.log('result', result);
        },
        error => {
          console.log('error', error);
        });
  }

}
