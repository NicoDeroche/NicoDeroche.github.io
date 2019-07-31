(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-author/about-author.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-author/about-author.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about-author works!</p>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-project/about-project.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-project/about-project.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about-project works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\" id=\"wrapper\">\n\n  <div id=\"sidebar-wrapper\" [ngClass]=\"sidebarService.isToggled ? 'toggled' : 'bg-light border-right'\">\n    <div class=\"list-group list-group-flush\">\n      <app-sidebar></app-sidebar>\n    </div>\n  </div>\n\n  <div id=\"page-content-wrapper\" class=\"container-fluid\">\n\n    <router-outlet></router-outlet>\n\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/publish-comment/publish-comment.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/publish-comment/publish-comment.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>publish-comment works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/see-comments/see-comments.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/see-comments/see-comments.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>see-comments works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n    <div class=\"text-muted h5\">Vous êtes:</div>\r\n    <div class=\"text-muted\">Page {{slideshowService.currentPage}}</div>\r\n    <div class=\"text-muted\"> Chapitre \"{{slideshowService.currentChapterTitle}}\" </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slide-show/slide-show.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slide-show/slide-show.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-1 \">\n        <div class=\"d-none d-sm-block\">\n            <button class=\"btn p-0\" id=\"menu-toggle\" (click)=\"toggleSideBar()\"><span class=\"fas fa-bars\"\n                    aria-hidden=\"true\"></span></button>\n        </div>\n    </div>\n    <div class=\"col\">\n        <div class=\"d-flex justify-content-center align-items-center\">\n\n            <div *ngIf=\"slideshowService.currentPage>1\">\n                <a class=\"nav-link\" (click)=\"previousPage()\"> <i class=\"p-2 fa fa-chevron-left\" aria-hidden=\"true\"></i></a>\n            </div>\n            <div class=\"p-2 vh-100\">\n                <img [src]=\"slideshowService.imageUrl | async\" class=\"img-fluid\">\n            </div>\n            <div *ngIf=\"slideshowService.isLastPage(); then thenBlock else elseBlock\"></div>\n<ng-template #thenBlock><div class=\"text-muted h5\">To be continued (soon)...</div></ng-template>\n<ng-template #elseBlock> <a class=\"nav-link\" (click)=\"nextPage()\"> <i class=\"p-2 fa fa-chevron-right\" aria-hidden=\"true\"></i></a></ng-template>\n            \n\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/about-author/about-author.component.css":
/*!*********************************************************!*\
  !*** ./src/app/about-author/about-author.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWF1dGhvci9hYm91dC1hdXRob3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/about-author/about-author.component.ts":
/*!********************************************************!*\
  !*** ./src/app/about-author/about-author.component.ts ***!
  \********************************************************/
/*! exports provided: AboutAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutAuthorComponent", function() { return AboutAuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutAuthorComponent = /** @class */ (function () {
    function AboutAuthorComponent() {
    }
    AboutAuthorComponent.prototype.ngOnInit = function () {
    };
    AboutAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-author',
            template: __webpack_require__(/*! raw-loader!./about-author.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-author/about-author.component.html"),
            styles: [__webpack_require__(/*! ./about-author.component.css */ "./src/app/about-author/about-author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutAuthorComponent);
    return AboutAuthorComponent;
}());



/***/ }),

/***/ "./src/app/about-project/about-project.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about-project/about-project.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXByb2plY3QvYWJvdXQtcHJvamVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/about-project/about-project.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about-project/about-project.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutProjectComponent", function() { return AboutProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutProjectComponent = /** @class */ (function () {
    function AboutProjectComponent() {
    }
    AboutProjectComponent.prototype.ngOnInit = function () {
    };
    AboutProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-project',
            template: __webpack_require__(/*! raw-loader!./about-project.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-project/about-project.component.html"),
            styles: [__webpack_require__(/*! ./about-project.component.css */ "./src/app/about-project/about-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutProjectComponent);
    return AboutProjectComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_project_about_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-project/about-project.component */ "./src/app/about-project/about-project.component.ts");
/* harmony import */ var _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide-show/slide-show.component */ "./src/app/slide-show/slide-show.component.ts");
/* harmony import */ var _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-author/about-author.component */ "./src/app/about-author/about-author.component.ts");
/* harmony import */ var _see_comments_see_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./see-comments/see-comments.component */ "./src/app/see-comments/see-comments.component.ts");
/* harmony import */ var _publish_comment_publish_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./publish-comment/publish-comment.component */ "./src/app/publish-comment/publish-comment.component.ts");








var routes = [
    { path: '', component: _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_4__["SlideShowComponent"] },
    { path: 'home', component: _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_4__["SlideShowComponent"] },
    { path: 'aboutProject', component: _about_project_about_project_component__WEBPACK_IMPORTED_MODULE_3__["AboutProjectComponent"] },
    { path: 'aboutAuthor', component: _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_5__["AboutAuthorComponent"] },
    { path: 'seeComments', component: _see_comments_see_comments_component__WEBPACK_IMPORTED_MODULE_6__["SeeCommentsComponent"] },
    { path: 'publishComment', component: _publish_comment_publish_comment_component__WEBPACK_IMPORTED_MODULE_7__["PublishCommentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  overflow-x: hidden;\r\n}\r\n\r\n#sidebar-wrapper {\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n}\r\n\r\n#sidebar-wrapper .list-group {\r\n  width: 15rem;\r\n}\r\n\r\n#sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n\r\n#page-content-wrapper {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n\r\n#sidebar-wrapper.toggled {\r\n    margin-left: -15rem;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBSW5CLGdDQUFnQztBQUNsQzs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFHRTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVEO0lBQ0csbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5cclxuI3NpZGViYXItd3JhcHBlciAubGlzdC1ncm91cCB7XHJcbiAgd2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG5cclxuICAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAjc2lkZWJhci13cmFwcGVyLnRvZ2dsZWQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/sidebar.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sidebarService) {
        this.sidebarService = sidebarService;
    }
    AppComponent.ctorParameters = function () { return [
        { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-author/about-author.component */ "./src/app/about-author/about-author.component.ts");
/* harmony import */ var _about_project_about_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-project/about-project.component */ "./src/app/about-project/about-project.component.ts");
/* harmony import */ var _see_comments_see_comments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./see-comments/see-comments.component */ "./src/app/see-comments/see-comments.component.ts");
/* harmony import */ var _publish_comment_publish_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./publish-comment/publish-comment.component */ "./src/app/publish-comment/publish-comment.component.ts");
/* harmony import */ var _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./slide-show/slide-show.component */ "./src/app/slide-show/slide-show.component.ts");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidebar.service */ "./src/app/sidebar.service.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _slideshow_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slideshow.service */ "./src/app/slideshow.service.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_15__);
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_5__["AboutAuthorComponent"],
                _about_project_about_project_component__WEBPACK_IMPORTED_MODULE_6__["AboutProjectComponent"],
                _see_comments_see_comments_component__WEBPACK_IMPORTED_MODULE_7__["SeeCommentsComponent"],
                _publish_comment_publish_comment_component__WEBPACK_IMPORTED_MODULE_8__["PublishCommentComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_9__["SlideShowComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyAzCYjsZeHK_uKbiNKAvxGWWOiziw1xQsc",
                    databaseURL: "lecteurplanches.firebaseio.com",
                    storageBucket: "lecteurplanches.appspot.com",
                    projectId: "lecteurplanches",
                }),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"]
            ],
            providers: [_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"], _slideshow_service__WEBPACK_IMPORTED_MODULE_12__["SlideshowService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/publish-comment/publish-comment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/publish-comment/publish-comment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1Ymxpc2gtY29tbWVudC9wdWJsaXNoLWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/publish-comment/publish-comment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/publish-comment/publish-comment.component.ts ***!
  \**************************************************************/
/*! exports provided: PublishCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishCommentComponent", function() { return PublishCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PublishCommentComponent = /** @class */ (function () {
    function PublishCommentComponent() {
    }
    PublishCommentComponent.prototype.ngOnInit = function () {
    };
    PublishCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish-comment',
            template: __webpack_require__(/*! raw-loader!./publish-comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/publish-comment/publish-comment.component.html"),
            styles: [__webpack_require__(/*! ./publish-comment.component.css */ "./src/app/publish-comment/publish-comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PublishCommentComponent);
    return PublishCommentComponent;
}());



/***/ }),

/***/ "./src/app/see-comments/see-comments.component.css":
/*!*********************************************************!*\
  !*** ./src/app/see-comments/see-comments.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlZS1jb21tZW50cy9zZWUtY29tbWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/see-comments/see-comments.component.ts":
/*!********************************************************!*\
  !*** ./src/app/see-comments/see-comments.component.ts ***!
  \********************************************************/
/*! exports provided: SeeCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeCommentsComponent", function() { return SeeCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeeCommentsComponent = /** @class */ (function () {
    function SeeCommentsComponent() {
    }
    SeeCommentsComponent.prototype.ngOnInit = function () {
    };
    SeeCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-see-comments',
            template: __webpack_require__(/*! raw-loader!./see-comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/see-comments/see-comments.component.html"),
            styles: [__webpack_require__(/*! ./see-comments.component.css */ "./src/app/see-comments/see-comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SeeCommentsComponent);
    return SeeCommentsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar.service.ts":
/*!************************************!*\
  !*** ./src/app/sidebar.service.ts ***!
  \************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarService = /** @class */ (function () {
    function SidebarService() {
        //menu masque par defaut
        this.isToggled = true;
    }
    SidebarService.prototype.toggleSidebar = function () {
        //on inverse l'etat
        this.isToggled = !this.isToggled;
    };
    SidebarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _slideshow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slideshow.service */ "./src/app/slideshow.service.ts");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(slideshowService) {
        this.slideshowService = slideshowService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _slideshow_service__WEBPACK_IMPORTED_MODULE_2__["SlideshowService"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_slideshow_service__WEBPACK_IMPORTED_MODULE_2__["SlideshowService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/slide-show/slide-show.component.css":
/*!*****************************************************!*\
  !*** ./src/app/slide-show/slide-show.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-perso {\r\n    max-width: 90%;\r\n   height: 50%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGUtc2hvdy9zbGlkZS1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0dBQ2YsV0FBVztFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2xpZGUtc2hvdy9zbGlkZS1zaG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXBlcnNvIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICBoZWlnaHQ6IDUwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/slide-show/slide-show.component.ts":
/*!****************************************************!*\
  !*** ./src/app/slide-show/slide-show.component.ts ***!
  \****************************************************/
/*! exports provided: SlideShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideShowComponent", function() { return SlideShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar.service */ "./src/app/sidebar.service.ts");
/* harmony import */ var _slideshow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slideshow.service */ "./src/app/slideshow.service.ts");




var SlideShowComponent = /** @class */ (function () {
    function SlideShowComponent(sidebarService, slideshowService) {
        this.sidebarService = sidebarService;
        this.slideshowService = slideshowService;
    }
    SlideShowComponent.prototype.ngOnInit = function () {
    };
    SlideShowComponent.prototype.toggleSideBar = function () {
        this.sidebarService.toggleSidebar();
    };
    SlideShowComponent.prototype.nextPage = function () {
        this.slideshowService.nextPage();
    };
    SlideShowComponent.prototype.previousPage = function () {
        this.slideshowService.previousPage();
    };
    SlideShowComponent.ctorParameters = function () { return [
        { type: _sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"] },
        { type: _slideshow_service__WEBPACK_IMPORTED_MODULE_3__["SlideshowService"] }
    ]; };
    SlideShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-show',
            template: __webpack_require__(/*! raw-loader!./slide-show.component.html */ "./node_modules/raw-loader/index.js!./src/app/slide-show/slide-show.component.html"),
            styles: [__webpack_require__(/*! ./slide-show.component.css */ "./src/app/slide-show/slide-show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sidebar_service__WEBPACK_IMPORTED_MODULE_2__["SidebarService"], _slideshow_service__WEBPACK_IMPORTED_MODULE_3__["SlideshowService"]])
    ], SlideShowComponent);
    return SlideShowComponent;
}());



/***/ }),

/***/ "./src/app/slideshow.service.ts":
/*!**************************************!*\
  !*** ./src/app/slideshow.service.ts ***!
  \**************************************/
/*! exports provided: SlideshowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowService", function() { return SlideshowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var SlideshowService = /** @class */ (function () {
    function SlideshowService(afStorage, afDatabase) {
        this.afStorage = afStorage;
        this.afDatabase = afDatabase;
        this.currentPage = 1;
        this.currentChapter = 1;
        this.pageMax = 0;
        this.setImageUrl();
        this.retrieveData();
    }
    SlideshowService.prototype.retrieveData = function () {
        var _this = this;
        this.afDatabase.list('/chapters').valueChanges() // returns observable
            .subscribe(function (list) {
            _this.chaptersList = list;
            _this.computePageMax();
            _this.setChapterTitle();
        });
    };
    SlideshowService.prototype.computePageMax = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.chaptersList), _c = _b.next(); !_c.done; _c = _b.next()) {
                var chapter = _c.value;
                if (chapter.pageMax > this.pageMax) {
                    this.pageMax = chapter.pageMax;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SlideshowService.prototype.setChapterTitle = function () {
        var e_2, _a;
        if (this.chaptersList) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.chaptersList), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var chapter = _c.value;
                    if (chapter.pageMin <= this.currentPage && this.currentPage <= chapter.pageMax) {
                        this.currentChapterTitle = chapter.title;
                        this.pageMinChapter = chapter.pageMin;
                        this.pageMaxChapter = chapter.pageMax;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    };
    SlideshowService.prototype.nextPage = function () {
        this.currentPage = this.currentPage + 1;
        this.computePage();
    };
    SlideshowService.prototype.previousPage = function () {
        this.currentPage = this.currentPage - 1;
        this.computePage();
    };
    SlideshowService.prototype.computePage = function () {
        this.checkChapter();
        this.setImageUrl();
    };
    SlideshowService.prototype.checkChapter = function () {
        if ((this.currentPage > this.pageMaxChapter) || (this.currentPage < this.pageMinChapter)) {
            this.setChapterTitle();
        }
    };
    SlideshowService.prototype.isLastPage = function () {
        return this.currentPage == this.pageMax;
    };
    SlideshowService.prototype.setImageUrl = function () {
        var ref = this.afStorage.ref(this.currentPage + '.jpg');
        this.imageUrl = ref.getDownloadURL();
    };
    SlideshowService.ctorParameters = function () { return [
        { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    SlideshowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], SlideshowService);
    return SlideshowService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\travail\programmation\tuto angular\lecteurPlanches\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map