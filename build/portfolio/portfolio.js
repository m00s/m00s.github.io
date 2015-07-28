System.register("portfolio/portfolio", ["angular2/angular2", "countdown/countdown"], function($__export) {
  "use strict";
  var __moduleName = "portfolio/portfolio";
  var Component,
      View,
      Countdown,
      Portfolio;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentAnnotation;
      View = $__m.ViewAnnotation;
    }, function($__m) {
      Countdown = $__m.Countdown;
    }],
    execute: function() {
      Portfolio = function() {
        function Portfolio() {
          console.info('Portfolio Component Mounted Successfully');
          this.startCheet();
          this.isTimerVisible = false;
          console.log('this.timer:', this.isTimerVisible);
        }
        return ($traceurRuntime.createClass)(Portfolio, {
          startCheet: function() {
            cheet('U U D D', {
              next: function(str, key, num, seq) {},
              fail: function() {},
              done: this.toggleTimer
            });
          },
          toggleTimer: function() {
            console.log('Toggle');
            this.isTimerVisible = !this.isTimerVisible;
          }
        }, {});
      }();
      $__export("Portfolio", Portfolio);
      Object.defineProperty(Portfolio, "annotations", {get: function() {
          return [new Component({selector: 'portfolio'}), new View({
            directives: [Countdown],
            templateUrl: 'portfolio/portfolio.html'
          })];
        }});
    }
  };
});
