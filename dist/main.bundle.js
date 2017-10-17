webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Header */\r\n\r\n.headbg {\r\n    background: linear-gradient(rgba(52, 73, 94, 0.8), rgba(52, 73, 94, 0.8)), url(" + __webpack_require__("../../../../../src/assets/computer.jpg") + ") no-repeat center center fixed;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n    min-width: 100%;\r\n    z-index: -10;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.head {\r\n    padding-top: 6%;\r\n    padding-bottom: 20px;\r\n    margin: 0 10%;\r\n    text-align: center;\r\n    font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    color: #f7f7f7;\r\n    text-transform: uppercase;\r\n    font-size: 56px;\r\n    letter-spacing: 4px;\r\n    line-height: 80px;\r\n}\r\n\r\n#headborder {\r\n    border-bottom: ridge 6px;\r\n    margin: 0 20%;\r\n}\r\n\r\n#minihead {\r\n    margin: 50px 0 10px 0;\r\n    text-align: center;\r\n    font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    color: #f7f7f7;\r\n    font-size: 26px;\r\n    color: #fff;\r\n}\r\n\r\n/*Social Icons, animation, and jumbotron*/\r\n\r\n.customJumbo {\r\n    background-color: #eee;\r\n    padding: 30px 20px;\r\n    margin: 50px 0 0 0;\r\n}\r\n.jumboTxt {\r\n    color: rgb(153, 153, 153) !important;\r\n    text-shadow: 1px 1px 1px #fff;\r\n}\r\n\r\nsection #services {\r\n    text-align: center;\r\n    -webkit-transform: translatez(0);\r\n            transform: translatez(0);\r\n}\r\n\r\nsection #services li {\r\n    width: 120px;\r\n    height: 140px;\r\n    display: inline-block;\r\n    margin: 20px;\r\n    list-style: none;\r\n    color: #74d4b3;\r\n}\r\n\r\nsection #services li div {\r\n    width: 120px;\r\n    height: 120px;\r\n    color: #fff;\r\n    font-size: 3.4em;\r\n    text-align: center;\r\n    line-height: 120px;\r\n    background-color: rgba(60, 194, 255, .6);\r\n    transition: all 0.5s ease;\r\n}\r\n\r\nsection #services li div:hover {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n    border-radius: 100px;\r\n}\r\n\r\nsection #services li span {\r\n    font-weight: 600;\r\n    width: 120px;\r\n    height: 20px;\r\n    display: block;\r\n    padding: 15px 0px;\r\n    color: #fff;\r\n    font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n}\r\n\r\n.animated {\r\n    -webkit-animation-duration: 3s;\r\n    animation-duration: 3s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n    from {\r\n        -webkit-transform: scale3d(1, 1, 1);\r\n        transform: scale3d(1, 1, 1);\r\n    }\r\n    50% {\r\n        -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n        transform: scale3d(1.05, 1.05, 1.05);\r\n    }\r\n    to {\r\n        -webkit-transform: scale3d(1, 1, 1);\r\n        transform: scale3d(1, 1, 1);\r\n    }\r\n}\r\n\r\n@keyframes pulse {\r\n    from {\r\n        -webkit-transform: scale3d(1, 1, 1);\r\n        transform: scale3d(1, 1, 1);\r\n    }\r\n    50% {\r\n        -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n        transform: scale3d(1.05, 1.05, 1.05);\r\n    }\r\n    to {\r\n        -webkit-transform: scale3d(1, 1, 1);\r\n        transform: scale3d(1, 1, 1);\r\n    }\r\n}\r\n\r\n.pulse {\r\n    -webkit-animation-name: pulse;\r\n    animation-name: pulse;\r\n}\r\n\r\n.animated.infinite {\r\n    -webkit-animation-iteration-count: infinite;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n\r\n/* media queries for smaller devices */\r\n@media (max-width: 767px) {\r\n    #head {\r\n        font-size: 35px;\r\n        line-height: 40px;\r\n        margin: 0;\r\n    }\r\n    #minihead {\r\n        font-size: 20px;\r\n    }\r\n\r\n    /* social media icons*/\r\n    section #services li {\r\n        margin: 10px !important;\r\n    }\r\n    section #services li div {\r\n        width: 80px !important;\r\n        height: 80px !important;\r\n        font-size: 2.8em !important;\r\n        line-height: 80px !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headbg\">\r\n</div>\r\n<div class=\"container-fluid\">\r\n    <h1 class=\"head\">Jose Medina<br>Developer <b>+</b> Designer</h1>\r\n    <div class=\"container-fluid\">\r\n        <div id='headborder'></div>\r\n    </div>\r\n    <h3 id=\"minihead\">Building Awesome Back-end and Front-end Applications</h3>\r\n</div>\r\n\r\n<!-- Jumbo -->\r\n<div class=\"customJumbo\">\r\n    <section>\r\n        <ul id='services' class=\"nopadding\">\r\n            <li>\r\n                <a target=\"_blank\" href=\"https://www.linkedin.com/pub/jose-medina/102/16b/342\">\r\n                    <div class='fa fa-linkedin-square animated pulse infinite'></div>\r\n                </a>\r\n                <span class=\"jumboTxt\">LinkedIn</span>\r\n            </li>\r\n            <li>\r\n                <a target=\"_blank\" href=\"https://github.com/josemedina760\">\r\n                    <div class='fa fa-github animated pulse infinite'></div>\r\n                </a>\r\n                <span class=\"jumboTxt\" >Github</span>\r\n            </li>\r\n            <li>\r\n                <a target=\"_blank\" href=\"mailto:josemedina760@gmail.com\">\r\n                    <div class='fa fa-google animated pulse infinite'></div>\r\n                </a>\r\n                <span class=\"jumboTxt\" >Email</span>\r\n            </li>\r\n        </ul>\r\n    </section>\r\n</div>\r\n\r\n<!-- project galleries -->\r\n\r\n<app-projects></app-projects>\r\n\r\n<!-- Footer -->\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer {\r\n    background: #eee;\r\n    padding: 30px 30px 40px 0;\r\n    margin-top : 200px;\r\n    font-family: Lato, sans-serif;\r\n}\r\n\r\n.head {\r\n    color: #8a8a8a;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.underline {\r\n    width: 70px;\r\n    height: 15px;\r\n    margin-right: auto;\r\n    margin-bottom: 25px;\r\n    margin-left: auto;\r\n    border-bottom: 3px solid rgb(60, 194, 255);\r\n}\r\n\r\n.aboutImg {\r\n    padding: 5px;\r\n    border: solid 1px #aaa;\r\n    border-radius: 5px;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\np.desc {\r\n    margin: 10px 0 0 0;\r\n    padding-bottom: 0px;\r\n    font-size: 11px;\r\n}\r\np.ans {\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n}\r\np.aboutTxt {\r\n    font-size: 14px;\r\n    padding: 10px 0 20px 0;\r\n}\r\n\r\ndiv#skills {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    font-family: Lato, sans-serif;    \r\n}\r\n.list {\r\n    list-style-type: none;\r\n    text-align: center;\r\n}\r\n#copy {\r\n    text-align: center;\r\n    padding: 30px 0 50px 0;\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\" class=\"container-fluid\">\n  <h1 class=\"head\" style='font-size:35px'>More About Me</h1>\n  <div><div class=\"underline\"></div></div>\n  <div class=\"col-md-3\">\n    <img class=\"img-responsive aboutImg\" src=\"../assets/about.JPG\" alt=\"\">\n  </div>\n  <div class=\"col-md-4\">\n    <p class=\"desc\">Name</p>\n    <p class=\"ans\">Jose Medina</p>\n    <p class=\"desc\">Hobbies</p>\n    <p class=\"ans\">Coding basketball hiking skateboarding </p>\n    <p class=\"desc\">From</p>\n    <p class=\"ans\">Vista, Ca</p>\n    <p class=\"desc\">email</p>\n    <p class=\"ans\">josemedina760@gmail.com</p>\n    <p class=\"aboutTxt\">\n        Hey there, I'm Jose Medina and I'd like to welcome you to my website!\n        I'm also an experienced full stack developer, building amazing web and hybrid apps one day at a time. \n        Want to keep up with my coding adventures? Check out my\n        <a target='_blank' href=\"https://github.com/josemedina760\">github!</a>.\n    </p>\n  </div>\n  <div class=\"col-md-5\">\n    <h1 class=\"head\">Skills</h1>\n    <div><div class=\"underline\"></div></div>\n    <div class=\"col-xs-6\">\n      <ul class=\"nopadding list\">\n        <li>JavaScript(ES5, ES6)</li>\n        <li>Angular(1,2,4)</li>\n        <li>jQuery</li>\n        <li>Ext.js</li>\n        <li>HTML</li>\n        <li>CSS/SASS</li>\n        <li>Test Suites</li>\n        <li>Selenium, Karma, Jasmine..</li>\n        <li>SEO</li>\n        <li>WordPress</li>\n      </ul>\n    </div>\n    <div>\n      <ul class=\"col-xs-6 list\">\n        <li>Perl</li>\n        <li>PHP</li>\n        <li>Node.js</li>\n        <li>Linux</li>\n        <li>Ionic</li>\n        <li>MongoDB</li>\n        <li>SQL</li>\n        <li>APIs(google, facebook..)</li>\n        <li>Gulp/grunt/webpack</li>\n        <li>Git & Crucible</li>\n      </ul>\n    </div>\n  </div>  \n</div>\n<div id='copy'>&copy; Jose Medina, 2017</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery {\r\n  display: table;\r\n  text-align: center;\r\n  padding: 30px 0 0 0;\r\n  background: rgba(20,20,20, 0.5);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.head {\r\n  padding: 100px 0 80px 0;\r\n  margin: 0 10%;\r\n  text-align: center;\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #f7f7f7;\r\n  text-transform: uppercase;\r\n  font-size: 56px;\r\n}\r\n\r\nfigure {\r\n  position: relative;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  overflow: hidden;\r\n  background: #000000;\r\n  height: 500px;\r\n}\r\nfigure:hover .btn-view {\r\n  opacity: 1;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  top: 50%;  \r\n  left: 50%; \r\n  -webkit-transform: translate(-50%, -50%); \r\n          transform: translate(-50%, -50%); \r\n}\r\nfigure:hover img {\r\n  bottom: 3.75em;\r\n  opacity: 0.5;\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1.1);\r\n}\r\n\r\nimg {\r\n  position: relative;\r\n  bottom: 0;\r\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\nfigcaption {\r\n  position: absolute;\r\n  bottom: -3.75em;\r\n  text-align: right;\r\n  background: #FAFAFA;\r\n  z-index: 9;\r\n  cursor: default;\r\n  width: 100%;\r\n  height: 3.75em;\r\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\r\n  z-index: 100;\r\n}\r\n\r\n.btn {\r\n  position: relative;\r\n  color: #ffffff;\r\n  border: 0;\r\n  outline: none;\r\n  transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n\r\n.btn-view {\r\n  position: absolute;\r\n  top: 15.625em;\r\n  left: 6.875em;\r\n  opacity: 0;\r\n  z-index: 99;\r\n  padding: 1em 2.5em;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  background: rgba(20,20,20, 0.5);\r\n  z-index: 9999;;\r\n  border: solid 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 0;\r\n  font-family: \"Raleway\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n.btn-view:hover {\r\n    background-color: rgba(60, 194, 255, .6);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery container-fluid\">\n  <h1 class=\"head\">Recent Projects</h1>\n  <figure class=\"col-md-6 col-xs-12 nopadding\">\n    <a target=\"_blank\" href=\"http://divorcedocumentary.com/\"><button class=\"btn btn-view\">VIEW</button></a> \n    <img class='img-responsive' src=\"../assets/romeo.jpg\"/>\n    <figcaption>\n      <div>divorcedocumentary.com</div>\n    </figcaption>\n  </figure>\n  <figure class=\"col-md-6 col-xs-12 nopadding\">\n    <a target=\"_blank\" href=\"http://janiexpress.com/\"><button class=\"btn btn-view\">VIEW</button></a>\n    <img class='img-responsive' src=\"../assets/janiexpress.jpg\"/>\n    <figcaption>\n    </figcaption>\n  </figure>\n  <figure class=\"col-md-6 col-xs-12 nopadding\">\n    <a target='_blank' href=\"http://josebakery.herokuapp.com/\"><button class=\"btn btn-view\">VIEW</button></a>\n    <img class='img-responsive' src=\"../assets/bakery.png\"/>\n    <figcaption>\n    </figcaption>\n  </figure>\n  <figure class=\"col-md-6 col-xs-12 nopadding\">\n    <a target='_blank' href=\"http://tekclub.herokuapp.com/\"><button class=\"btn btn-view\">VIEW</button></a>\n    <img class='img-responsive' src=\"../assets/tek1.png\"/>\n    <figcaption>\n    </figcaption>\n  </figure>\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/assets/computer.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "computer.d09217571e2f13d265e2.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map