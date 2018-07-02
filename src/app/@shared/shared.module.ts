import { DataService } from './services/data.service';
import {NotificationService} from './services/notification.service';
import {DataResolve} from './services/data.resolve';


export class SharedModule {
  static PROVIDERS = [
    DataService,
    DataResolve,
    NotificationService
  ];


}
