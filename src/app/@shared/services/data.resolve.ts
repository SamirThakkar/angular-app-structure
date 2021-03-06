import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {DataService} from "./data.service";

@Injectable()
export class DataResolve implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    let apiPath = route.data['apiPath'];
    if(apiPath.indexOf(':id')>-1){
      apiPath = apiPath.replace(':id',route.params['id']);
    }
    let callObject:any = {
      url: apiPath,
      method: 'get',
      errorMessage: 'Error in getting data.'
    };
    return this.dataService.callAPI(callObject);
  }
}
