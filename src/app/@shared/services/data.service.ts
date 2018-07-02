import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/concatMap';
// import 'rxjs/add/operator/switchMap';

import {Observable} from 'rxjs';
import * as _ from 'lodash';
// import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {Router} from '@angular/router';
import {NotificationService} from './notification.service';
declare var $: any;

@Injectable()
export class DataService {
  private headers = {};
  static httpCallCount = 0;

  constructor(private http: HttpClient,
              private router: Router,
              // private slimLoadingBarService: SlimLoadingBarService,
              private notificationService:NotificationService) {
  }

  /**
   * @method callAPI
   * @description function to call the api
   * @param options
   * @returns {Promise<T>}
   */
  callAPI(options: any) {
    // this.slimLoadingBarService.start();
    options.showSuccessMessage = _.isUndefined(options.showSuccessMessage) ? true : options.showSuccessMessage;
    options.showErrorMessage = _.isUndefined(options.showErrorMessage) ? true : options.showErrorMessage;
    let params = new HttpParams();
    _.each(options.search, (value, key) => params.set(key, value));
    return Observable.create((subscriber) => {
      const headers = new HttpHeaders(_.merge(options.headers, this.headers));
      this.http
        .request(options.method || 'GET', options.url, {
          responseType: 'json',
          body: options.body,
          headers,
          params
        })
        .toPromise()
        .then((res: any) => {
          if (options.successMessage) {
            this.notificationService.showNotification({message: options.successMessage, type: 'success'});
          }
          console.info('Got success in calling the API::' + options.url);
          subscriber.next(res);
          subscriber.complete();
          // this.slimLoadingBarService.complete();
        }).catch((err) => {
        if (_.get(err, 'error.Code') === '1003') {
          if (options.url.indexOf('check-login') === -1) {
            this.router.navigate(['/login']);
          }
        } else {
          if (options.showErrorMessage) {
            console.log('error==>>', err);

            options.errorMessage = _.get(err, 'error.Error.Message') || options.errorMessage;
          } else {
            options.errorMessage = null;
          }
          if (options.errorMessage) {
            this.notificationService.showNotification({message: options.errorMessage, type: 'error'});
          }
        }
        console.warn('Error in calling the API::' + options.url);
        console.warn('Error::', err);
        // this.slimLoadingBarService.complete();
        subscriber.error(err);
      });
    });
  }
}
