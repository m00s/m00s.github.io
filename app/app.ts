/// <reference path="typings/_custom.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Portfolio} from './components/portfolio/portfolio';

@Component({
  selector: 'app'
})
@View({
  templateUrl: './app.html?v=<%= VERSION %>',
  directives: [Portfolio]
})
class App {}


bootstrap(App);
