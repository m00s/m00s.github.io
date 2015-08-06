webpackJsonp([2,0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(188);


/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports = "<h2 id=\"timer\" [hidden]=\"!visible\"></h2>\n"

/***/ },

/***/ 183:
/***/ function(module, exports) {

	module.exports = "html, body {\n  margin: 0;\n  padding: 0;\n  background-color: #131313;\n  color: white;\n}\n\n.content {\n  text-align: center;\n  padding: 5%;\n  font-family: 'Raleway', sans-serif;\n  font-size: 1em;\n  font-weight: 900;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.img-circle {\n  width: 200px;\n  height: 200px;\n  margin: 10% 0 1em 0;\n  border-radius: 50%;\n  border-left: 3px solid #FFF;\n  border-bottom: 3px solid #FFF;\n  border-right: 3px solid #FFF;\n  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#FFF), to(transparent));\n  background-image: -webkit-linear-gradient(#FFF, transparent);\n  background-image:\n      -moz-linear-gradient(#FFF, transparent),\n      -moz-linear-gradient(#FFF, transparent)\n  ;\n  background-image:\n      -o-linear-gradient(#FFF, transparent),\n      -o-linear-gradient(#FFF, transparent)\n  ;\n  background-image:\n      linear-gradient(#FFF, transparent),\n      linear-gradient(#FFF, transparent)\n  ;\n  -moz-background-size:5px 100%;\n  background-size:30px 100%;\n  background-position:0 0, 100% 0;\n  background-repeat:no-repeat;\n}\n\n#name {\n  display: block;\n  font-size: 2em;\n}\n\nfooter ul {\n  padding: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.social-btn {\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: transparent;\n  margin: 0 16px;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n}\n\n#heart {\n    position: relative;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 17%;\n    width: 100px;\n    height: 90px;\n}\n#heart:before,\n#heart:after {\n    position: absolute;\n    content: \"\";\n    left: 50px;\n    top: 0;\n    width: 50px;\n    height: 80px;\n    background: white;\n    -moz-border-radius: 50px 50px 0 0;\n    border-radius: 50px 50px 0 0;\n    -webkit-transform: rotate(-45deg);\n       -moz-transform: rotate(-45deg);\n        -ms-transform: rotate(-45deg);\n         -o-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n       -moz-transform-origin: 0 100%;\n        -ms-transform-origin: 0 100%;\n         -o-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n#heart:after {\n    left: 0;\n    -webkit-transform: rotate(45deg);\n       -moz-transform: rotate(45deg);\n        -ms-transform: rotate(45deg);\n         -o-transform: rotate(45deg);\n            transform: rotate(45deg);\n    -webkit-transform-origin: 100% 100%;\n       -moz-transform-origin: 100% 100%;\n        -ms-transform-origin: 100% 100%;\n         -o-transform-origin: 100% 100%;\n            transform-origin :100% 100%;\n}\n"

/***/ },

/***/ 184:
/***/ function(module, exports) {

	module.exports = "<style>\n  @import url(http://fonts.googleapis.com/css?family=Open+Sans:300,400);\n  @import url(http://fonts.googleapis.com/css?family=Raleway:100);\n  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css);\n</style>\n\n<div class=\"content\">\n  <img src=\"../images/profile.jpg\"\n      class=\"img-circle\"\n      [hidden]=\"isTimerVisible\"/>\n\n  <div id=\"heart\"\n      (click)=\"toggleTimer()\"\n      [hidden]=\"!isTimerVisible\"></div>\n\n  <div [hidden]=\"isTimerVisible\">\n    <span id=\"name\">Massimiliano Sartoretto</span>\n  </div>\n\n  <countdown #timer [visible]=\"isTimerVisible\"></countdown>\n</div>\n"

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(7);
	var app_1 = __webpack_require__(189);
	angular2_1.bootstrap(app_1.App);
	//# sourceMappingURL=bootstrap.js.map

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/// <reference path="../../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(7);
	var portfolio_1 = __webpack_require__(191);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        angular2_1.Component({
	            selector: 'app'
	        }),
	        angular2_1.View({
	            template: '<portfolio></portfolio>',
	            directives: [portfolio_1.Portfolio]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	})();
	exports.App = App;
	//# sourceMappingURL=app.js.map

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/// <reference path="../../../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(7);
	var template = __webpack_require__(182);
	var Countdown = (function () {
	    function Countdown() {
	        this.timerId =
	            window.countdown(new Date(2015, 8, 13), function (ts) {
	                document.getElementById('timer').innerHTML = ts.toHTML("strong");
	            });
	    }
	    Countdown = __decorate([
	        angular2_1.Component({
	            selector: 'countdown',
	            properties: ['visible']
	        }),
	        angular2_1.View({
	            template: template
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Countdown);
	    return Countdown;
	})();
	exports.Countdown = Countdown;
	//# sourceMappingURL=countdown.js.map

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
	    switch (arguments.length) {
	        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
	        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
	        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
	    }
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	/// <reference path="../../../typings/_custom.d.ts" />
	var angular2_1 = __webpack_require__(7);
	var countdown_1 = __webpack_require__(190);
	var styles = __webpack_require__(183);
	var template = __webpack_require__(184);
	var Portfolio = (function () {
	    function Portfolio() {
	        this.isTimerVisible = false;
	        this.startCheet();
	    }
	    Portfolio.prototype.startCheet = function () {
	        var _this = this;
	        window.cheet('U U D D', {
	            next: function (str, key, num, seq) { },
	            fail: function () { },
	            done: function () { return (_this.toggleTimer()); }
	        });
	    };
	    Portfolio.prototype.toggleTimer = function () {
	        this.isTimerVisible = !this.isTimerVisible;
	    };
	    Portfolio = __decorate([
	        angular2_1.Component({
	            selector: 'portfolio'
	        }),
	        angular2_1.View({
	            directives: [countdown_1.Countdown],
	            styles: [styles],
	            template: template
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Portfolio);
	    return Portfolio;
	})();
	exports.Portfolio = Portfolio;
	//# sourceMappingURL=portfolio.js.map

/***/ }

});
//# sourceMappingURL=app.js.map