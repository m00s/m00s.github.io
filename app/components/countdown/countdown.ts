/// <reference path="../../typings/_custom.d.ts" />
import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'countdown',
  properties: ['visible']
})

@View({
  templateUrl: './components/countdown/countdown.html?v=<%= VERSION %>'
})

export class Countdown {
  constructor() {
    console.info('Countdown Component Mounted Successfully');
    this.timerId =
      countdown(
        new Date(2015,8,13),
        function(ts) {
          document.getElementById('timer').innerHTML = ts.toHTML("strong");
        });
  }
}
