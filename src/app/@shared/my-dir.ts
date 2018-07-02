import {Component, Input} from '@angular/core';

declare const $;
import * as _ from 'lodash';

@Component({
  selector: 'my-dir',
  template: `
    Hello, {{options}}`
})
export class MyComponent {
  @Input() options;
  // options : any;

  constructor() { }
  ngOnInit() {
console.log('options',this.options);
  }



}
