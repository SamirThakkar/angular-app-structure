import { Injectable }    from '@angular/core';
declare var require: any;
let Noty=require('noty');

@Injectable()
export class NotificationService {

  /**
   * @method showNotification
   * @description function to show notification
   * @param message
   * @param type
   */
  showNotification({message,type='error'}) {
    new Noty({
      text: message,
      type: type,
      layout: 'topRight',
      theme    : 'metroui',
      timeout: 2000,
      progressBar: true,
      closeWith: ['click']
    }).show();
  }

  getNotyObject():any{
		return Noty;
	}
}
