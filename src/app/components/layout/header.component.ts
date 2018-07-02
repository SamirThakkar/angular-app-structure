import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
/*import {Overlay, overlayConfigFactory} from 'angular2-modal';
import {AuthService} from '../../modules/auth/shared/auth.service';
import {LoadingBarService} from '../../@shared/services/loadingbar.service';
import {DashboardService} from '../../modules/dashboard/dashboard.service';*/
// import {Modal, BSModalContext} from 'angular2-modal/plugins/bootstrap';
//import {ChatComponent,SaveDataChat} from '../../modules/chat/chat.component';

declare var require: any;
let $ = require('jquery');

@Component({
  selector: 'header',
  templateUrl: './views/header.html',
  host: {}
})
export class HeaderComponent{ /*implements OnInit {
  constructor(
              private authService: AuthService,
              private route: Router,
              private loading: LoadingBarService, overlay: Overlay, vcRef: ViewContainerRef,
              private dashboardService: DashboardService) {
    // overlay.defaultViewContainer = vcRef;
  }

  logOut(e): void {
    e.preventDefault();
    this.loading.start();
    this.authService.logOut().then(res => {
      this.loading.done();
      localStorage.removeItem('currentUser');
      this.route.navigate(['login']);
    }).catch((err)=>{
      console.log('err', err);

    });
  }

  username: string;

  ngOnInit(): void {
    let currentUserData = JSON.parse(localStorage.currentUser);
    this.username = currentUserData.name;
  }

  setProjectTheme(event) {
    let themeName = 'theme-' + event.srcElement.classList[0];
    console.log('themeName', themeName);
    $('body').removeClass();
    $('body').addClass(themeName);
  }
*/

}
