System.register("countdown/countdown", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "countdown/countdown";
  var Component,
      View,
      Countdown;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentAnnotation;
      View = $__m.ViewAnnotation;
    }],
    execute: function() {
      Countdown = function() {
        function Countdown() {
          console.info('Countdown Component Mounted Successfully');
          console.log(this.visible);
          this.timerId = countdown(new Date(2015, 8, 13), function(ts) {
            document.getElementById('timer').innerHTML = ts.toHTML("strong");
          });
        }
        return ($traceurRuntime.createClass)(Countdown, {}, {});
      }();
      $__export("Countdown", Countdown);
      Object.defineProperty(Countdown, "annotations", {get: function() {
          return [new Component({
            selector: 'countdown',
            properties: ['visible']
          }), new View({templateUrl: 'countdown/countdown.html'})];
        }});
    }
  };
});
