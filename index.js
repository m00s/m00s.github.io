System.register("index", ["angular2/angular2", "portfolio/portfolio"], function($__export) {
  "use strict";
  var __moduleName = "index";
  var Component,
      View,
      bootstrap,
      Portfolio,
      Main;
  return {
    setters: [function($__m) {
      Component = $__m.ComponentAnnotation;
      View = $__m.ViewAnnotation;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      Portfolio = $__m.Portfolio;
    }],
    execute: function() {
      Main = function() {
        function Main() {}
        return ($traceurRuntime.createClass)(Main, {}, {});
      }();
      Object.defineProperty(Main, "annotations", {get: function() {
          return [new Component({selector: 'main'}), new View({
            directives: [Portfolio],
            template: "\n    <portfolio></portfolio>\n  "
          })];
        }});
      bootstrap(Main);
    }
  };
});
