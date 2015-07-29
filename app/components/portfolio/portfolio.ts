/// <reference path="../../typings/_custom.d.ts" />
import {Component, View} from 'angular2/angular2';
import {Countdown} from '../countdown/countdown';

@Component({
  selector: 'portfolio'
})

@View({
  directives: [Countdown],
  templateUrl: './components/portfolio/portfolio.html?v=<%= VERSION %>'
})

export class Portfolio {
  isTimerVisible: boolean = false;

  constructor() {
    console.info('Portfolio Component Mounted Successfully');
    this.startCheet();
  }

  startCheet() {
    cheet('U U D D', {
      next: function (str, key, num, seq) {},
      fail: function () {},
      done: this.toggleTimer
    });
  }

  toggleTimer() {
    this.isTimerVisible = !this.isTimerVisible;
  }
}
