import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
// import {DashboardModule} from './dashboard/dashboard.module';
import {HeaderComponent} from './components/layout/header.component';
import {RootComponent} from './components/layout/root.component';
// import {SidebarComponent} from '../components/layout/sidebar.component';
// import {LoggedInGuard} from './auth/shared/logged-in.guard';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/home.component';
import {UserModule} from './modules/user/user.module';
import {AddUserComponent} from './modules/user/add-user/add-user.component';
import {MyComponent} from './@shared/my-dir';
// import {HomeComponent} from './home/home.component';
// import {PagerService} from '../@shared/services';
// import {CommonDataService} from '../@shared/services/commondata.service';
// import {LoadingBarService} from '../@shared/services/loadingbar.service';
// import {DataResolve} from '../@shared/services/data.resolve';
// import {CommonService} from '../@shared/services/common.service';
// import {GridComponent} from '../@shared/components/grid.component';
// import {NotificationService} from '../@shared/services/notification.service';
// import {DataService} from '../@shared/services/data.service';
let routes: Routes = [
  // {
    // path: 'login',
  //   loadChildren: './auth/auth.module#AuthModule'
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user/add',
    // component:AddUserComponent
    // canActivate: [LoggedInGuard]
  },
  // {
  //   path: '',
  //   component: RootComponent,
  //   children: [...DashboardModule.ROUTES],
  //   canActivate: [LoggedInGuard]
  // },
  {
    path: 'homepage',
    component: HomeComponent
  },
  // {
  //   path: 'app',
  //   component: RootComponent,
  //   // children: [...inventoryModule.ROUTES],
  //   canActivate: [LoggedInGuard]
  // },
  // {
  //   path: 'profile',
  //   component: RootComponent,
  //   children: [...AuthModule.ROUTES],
  //   canActivate: [LoggedInGuard]
  // },
  {
    path: 'user',
    component: RootComponent,
    children: [...UserModule.ROUTES],
   /* canActivate: [LoggedInGuard]*/
  },
];

@NgModule({
  declarations: [RootComponent,  HomeComponent,HeaderComponent],
  imports: [CommonModule, HttpModule, RouterModule.forRoot(routes),UserModule,/* AuthModule,DashboardModule*/],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

  // static COMPONENTS = [
  //   MyComponent,
  // ];

}
