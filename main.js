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

module.exports = "<p></p>\n<h3>A propos de l'auteur</h3>\n<br>\n<p><span [innerHtml]=\"(about| async)?.author\"></span></p>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about-project/about-project.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about-project/about-project.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<h3>A propos du projet \"Le Joyau d'Edsheran\"</h3>\n<br>\n<p><span [innerHtml]=\"(about| async)?.project\"></span></p>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<h3 class=\"customFont\">Administration</h3>\n\n<br>\n<div *ngIf=\"afAuth.user | async as user; then thenBlock else elseBlock\"></div>\n<ng-template #thenBlock>\n        <button class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</ng-template>\n<ng-template #elseBlock>\n        <button class=\"btn btn-secondary\" (click)=\"login()\">Login</button>\n    </ng-template>\n\n  <p></p>\n\n \n\n \n\n\n<form  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit(f);\">\n    <div class=\"form-group\">\n  <label class=\"customFont\"> <i class=\"fas fa-robot text-muted\" aria-hidden=\"true\"></i>&nbsp;<span class=\"customFont\">Titre</span></label>\n      <input type=\"text\" class=\"form-control col-xs-2 customFont\"  name=\"chapitre\" ngModel\n        aria-label=\"chapitre\"  aria-describedby=\"basic-addon1\">\n    </div>\n\n   \n    <div class=\"form-group\">\n        <label class=\"customFont\"> <i class=\"fas fa-robot text-muted\" aria-hidden=\"true\"></i>&nbsp;<span class=\"customFont\">Image</span></label>\n\n    <input type=\"file\" (change)=\"detectFiles($event)\"\n    class=\"form-control\" accept=\".jpg\">\n\n    </div>\n        <button class=\"btn btn-secondary\" type=\"submit\">Créer</button>\n  \n     \n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex\" id=\"wrapper\">\n\n  <div id=\"sidebar-wrapper\" [ngClass]=\"sidebarService.isToggled ? 'toggled' : 'bg-light border-right'\">\n    <div class=\"list-group list-group-flush\">\n      <app-sidebar></app-sidebar>\n    </div>\n  </div>\n\n  <div id=\"page-content-wrapper\" class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-1 \">\n        <div class=\"d-none d-sm-block\">\n          <button class=\"btn p-0\" id=\"menu-toggle\" (click)=\"toggleSideBar()\"><span class=\"fas fa-bars\"\n              aria-hidden=\"true\"></span></button>\n        </div>\n      </div>\n      <div class=\"col\">\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/publish-comment/publish-comment.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/publish-comment/publish-comment.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<h3 class=\"customFont\">Publier un commentaire</h3>\n<br>\n<p class=\"customFont\">Si vous avez aimé cette BD, n'hésitez pas à mettre un petit commentaire !<br> La réalisation d'une BD en tant qu'amateur est un travail de longue haleine, et c'est toujours plaisant d'avoir un petit encouragement ;)</p>\n<br>\n<form  #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit(f);\">\n    <div class=\"form-group\">\n  <label for=\"pseudo customFont\"> <i class=\"fas fa-robot text-muted\" aria-hidden=\"trur\"></i>&nbsp;<span class=\"customFont\">Pseudo</span></label>\n      <input type=\"text\" class=\"form-control col-xs-2 customFont\" required  name=\"pseudo\" ngModel\n        aria-label=\"pseudo\"  aria-describedby=\"basic-addon1\" required>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"comment\" class=\"customFont\">Commentaire</label>\n            <textarea type=\"text\" class=\"form-control col-xs-2 customFont\"  name=\"comment\" ngModel\n              aria-label=\"comment\" aria-describedby=\"basic-addon1\" required></textarea>\n          </div>\n        <button class=\"btn btn-secondary\" type=\"submit\">Publier</button>\n  \n  </form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/see-comments/see-comments.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/see-comments/see-comments.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<h3 class=\"customFont\">Livre d'or</h3>\n<br>\n<p class=\"customFont\">Si vous avez aimé cette BD, n'hésitez pas à mettre un petit commentaire !<br> La réalisation d'une BD en tant qu'amateur est un travail de longue haleine, et c'est toujours plaisant d'avoir un petit encouragement ;)</p>\n<br>\n<div *ngFor=\"let comment of comments\">\n    <h6><i class=\"fas fa-robot text-muted\" aria-hidden=\"true\"></i>&nbsp;<b class=\"customFont\">Le {{comment.date}}, {{comment.author}} a dit :</b></h6>\n <p><i><span class=\"customFont\">\"{{comment.comment}}\"</span></i></p>\n <br/>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\r\n  <div class=\"text-muted customFont\">Date de dernière publication :</div>\r\n  <div class=\" customFont\">{{lastPublication|async}}</div>\r\n  <br />\r\n  <div *ngIf=\"router.url==='/slideshow'\">\r\n    <div class=\" h5 customFont\">Vous êtes:</div>\r\n    <div class=\" customFont\">Page {{slideshowService.currentPage}}</div>\r\n    <div class=\" customFont\"> Chapitre \"{{slideshowService.currentChapterTitle}}\" </div>\r\n  </div>\r\n  <nav class=\"navbar\">\r\n    <div class=\"\" id=\"navbarSupportedContent\">\r\n      <ul class=\"navbar-nav mr-auto  mx-auto text-left\">\r\n        <li class=\"nav-item   p-2\">\r\n          <a class=\"nav-link  customFont\" routerLink=\"slideshow\" routerLinkActive=\"active-link\">Lecture BD</a>\r\n        </li>\r\n\r\n        <div *ngIf=\"router.url==='/slideshow'\">\r\n\r\n          <li class=\"nav-item dropdown  p-2\" routerLinkActive=\"active\">\r\n            <a class=\" customFont  nav-link dropdown-toggle\" id=\"navbarDropdown2\" role=\"button\" data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <i class=\"fas fa-robot text-muted\"></i> &nbsp;<span class=\" customFont\">Chapitre</span>\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown2\">\r\n              <a *ngFor=\"let chapter of slideshowService.getChaptersOrder() ;let i=index;\"\r\n                class=\" dropdown-item\" (click)=\"gotoChapter(i+1);\"><span class=\"customFont\">{{i+1}}. {{chapter.title}}</span></a>\r\n            </div>\r\n          </li>\r\n\r\n\r\n          <li class=\"nav-item  p-2\">\r\n\r\n\r\n\r\n            <form class=\"form-inline\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && onSubmit(f);\">\r\n              <div class=\"input-group\">\r\n                <i class=\"fas fa-robot text-muted\" aria-hidden=\"trur\"></i>&nbsp;\r\n                <input type=\"text\" class=\"form-control col-xs-2 customFont\" required pattern=\"[0-9]*\" name=\"numPage\" ngModel\r\n                  aria-label=\"numPage\" placeholder=\"aller à la page\" aria-describedby=\"basic-addon1\" required>\r\n                <button class=\"btn btn-secondary\" type=\"submit\">></button>\r\n              </div>\r\n            </form>\r\n          </li>\r\n        </div>\r\n\r\n        <li class=\"nav-item dropdown  p-2\">\r\n          <a class=\"nav-link dropdown-toggle customFont\" routerLinkActive=\"active-link\" id=\"navbarDropdown\"\r\n            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" routerLink=\"about\" aria-expanded=\"false\">\r\n            A propos\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item customFont\" routerLink=\"about/aboutProject\" routerLinkActive=\"active-link\">A propos\r\n              du\r\n              projet</a>\r\n            <a class=\" dropdown-item customFont\" routerLink=\"about/aboutAuthor\" routerLinkActive=\"active-link\">A propos\r\n              de\r\n              l'auteur</a>\r\n          </div>\r\n        </li>\r\n\r\n\r\n  \r\n        <!--\r\n            <span class=\"d-none d-lg-block\">\r\n              <li class=\"nav-item  p-2\">\r\n                <form class=\"form-inline\">\r\n                  <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                    <label class=\"btn btn-secondary active\">\r\n                      <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> 1 page\r\n                    </label>\r\n                    <label class=\"btn btn-secondary\">\r\n                      <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> 2 pages\r\n                    </label>\r\n                  </div>\r\n                </form>\r\n              </li>\r\n            </span>\r\n          -->\r\n          \r\n            <li class=\"nav-item dropdown  p-2\" routerLinkActive=\"active\">\r\n              <a class=\"nav-link dropdown-toggle customFont\" routerLinkActive=\"active-link\" id=\"navbarDropdown2\"\r\n              role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" routerLink=\"about\" aria-expanded=\"false\">\r\n             Livre d'or\r\n            </a>\r\n              <div class=\"dropdown-menu \" aria-labelledby=\"navbarDropdown2\">\r\n                <a class=\"dropdown-item customFont  \" routerLink=\"seeComments\">Consulter</a>\r\n           <a class=\"dropdown-item customFont\" routerLink=\"publishComment\">Commenter</a>\r\n              </div>\r\n            </li>\r\n          \r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slide-show/slide-show.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slide-show/slide-show.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center align-items-center\">\n\n    <div *ngIf=\"slideshowService.currentPage>1\">\n        <a class=\"nav-link\" (click)=\"previousPage()\"> <i class=\"p-2 fas fa-chevron-circle-left text-muted\" aria-hidden=\"true\"></i></a>\n    </div>\n    <div class=\"p-2 vh-100\">\n        <img [src]=\"slideshowService.imageUrl | async\" class=\"img-fluid\">\n    </div>\n    <div *ngIf=\"slideshowService.isLastPage(); then thenBlock else elseBlock\"></div>\n    <ng-template #thenBlock>\n        <div class=\"h6 customFont\">To be continued (soon)...</div>\n    </ng-template>\n    <ng-template #elseBlock> <a class=\"nav-link\" (click)=\"nextPage()\"> <i class=\"p-2 fas fa-chevron-circle-right text-muted\"\n                aria-hidden=\"true\"></i></a></ng-template>\n\n\n</div>"

/***/ }),

/***/ "./src/app/about-author/about-author.component.css":
/*!*********************************************************!*\
  !*** ./src/app/about-author/about-author.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: 'customFont',arial;\r\n    color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtYXV0aG9yL2Fib3V0LWF1dGhvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LWF1dGhvci9hYm91dC1hdXRob3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdjdXN0b21Gb250JyxhcmlhbDtcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgfSJdfQ== */"

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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");



var AboutAuthorComponent = /** @class */ (function () {
    function AboutAuthorComponent(databaseService) {
        this.databaseService = databaseService;
        this.about = this.databaseService.getAbout();
    }
    AboutAuthorComponent.prototype.ngOnInit = function () {
    };
    AboutAuthorComponent.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
    ]; };
    AboutAuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-author',
            template: __webpack_require__(/*! raw-loader!./about-author.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-author/about-author.component.html"),
            styles: [__webpack_require__(/*! ./about-author.component.css */ "./src/app/about-author/about-author.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
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

module.exports = "* {\r\n    font-family: 'customFont',arial;\r\n    color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtcHJvamVjdC9hYm91dC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtcHJvamVjdC9hYm91dC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnY3VzdG9tRm9udCcsYXJpYWw7XHJcbiAgICBjb2xvcjpncmV5O1xyXG4gIH0iXX0= */"

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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");



var AboutProjectComponent = /** @class */ (function () {
    function AboutProjectComponent(databaseService) {
        this.databaseService = databaseService;
        this.about = this.databaseService.getAbout();
    }
    AboutProjectComponent.prototype.ngOnInit = function () {
    };
    AboutProjectComponent.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
    ]; };
    AboutProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-project',
            template: __webpack_require__(/*! raw-loader!./about-project.component.html */ "./node_modules/raw-loader/index.js!./src/app/about-project/about-project.component.html"),
            styles: [__webpack_require__(/*! ./about-project.component.css */ "./src/app/about-project/about-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], AboutProjectComponent);
    return AboutProjectComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customFont {\r\n    font-family: 'customFont',arial;\r\n    color:grey;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdjdXN0b21Gb250JyxhcmlhbDtcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _slideshow_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slideshow.service */ "./src/app/slideshow.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);







var AdminComponent = /** @class */ (function () {
    function AdminComponent(databaseService, afAuth, slideshowService, router) {
        this.databaseService = databaseService;
        this.afAuth = afAuth;
        this.slideshowService = slideshowService;
        this.router = router;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_6__["auth"].GoogleAuthProvider()).catch(function (error) { console.log("--------sign in with popup error ----", error.message); });
    };
    AdminComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AdminComponent.prototype.onSubmit = function (form) {
        if (form.value['chapitre'] !== "") {
            this.slideshowService.addChapter(form.value['chapitre']);
        }
        if (this.newFile) {
            this.slideshowService.addImage(this.newFile);
        }
        this.router.navigate(['slideshow']);
    };
    AdminComponent.prototype.detectFiles = function (event) {
        this.newFile = event.target.files[0];
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
        { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
        { type: _slideshow_service__WEBPACK_IMPORTED_MODULE_4__["SlideshowService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"], _slideshow_service__WEBPACK_IMPORTED_MODULE_4__["SlideshowService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminComponent);
    return AdminComponent;
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
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");









var routes = [
    { path: '', redirectTo: '/slideshow', pathMatch: 'full' },
    { path: 'slideshow', component: _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_4__["SlideShowComponent"] },
    { path: 'about/aboutProject', component: _about_project_about_project_component__WEBPACK_IMPORTED_MODULE_3__["AboutProjectComponent"] },
    { path: 'about/aboutAuthor', component: _about_author_about_author_component__WEBPACK_IMPORTED_MODULE_5__["AboutAuthorComponent"] },
    { path: 'seeComments', component: _see_comments_see_comments_component__WEBPACK_IMPORTED_MODULE_6__["SeeCommentsComponent"] },
    { path: 'suite', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
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

module.exports = "body {\r\n  overflow-x: hidden;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n@font-face {\r\n  font-family: 'customFont';\r\n  src: url('komtxt__-webfont.woff2') format('woff2'),\r\n       url('komtxt__-webfont.woff') format('woff');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n#sidebar-wrapper {\r\n  min-height: 100vh;\r\n  margin-left: -15rem;\r\n  transition: margin .25s ease-out;\r\n}\r\n\r\n\r\n\r\n\r\n#sidebar-wrapper .list-group {\r\n  width: 15rem;\r\n}\r\n\r\n\r\n\r\n\r\n#sidebar-wrapper {\r\n    margin-left: 0;\r\n  }\r\n\r\n\r\n\r\n\r\n#page-content-wrapper {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n\r\n\r\n\r\n\r\n#sidebar-wrapper.toggled {\r\n    margin-left: -15rem;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7OztBQUdwQjs7Ozs7QUFLQTtFQUNFLHlCQUF5QjtFQUN6QjtrREFDK0Q7RUFDL0QsbUJBQW1CO0VBQ25CLGtCQUFrQjs7QUFFcEI7Ozs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBSW5CLGdDQUFnQztBQUNsQzs7Ozs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7Ozs7QUFHRTtJQUNFLGNBQWM7RUFDaEI7Ozs7O0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOzs7OztBQUVEO0lBQ0csbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdjdXN0b21Gb250JztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnQva29tdHh0X18td2ViZm9udC53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcclxuICAgICAgIHVybCgnLi4vYXNzZXRzL2ZvbnQva29tdHh0X18td2ViZm9udC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcblxyXG59XHJcblxyXG4jc2lkZWJhci13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxufVxyXG5cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gIHdpZHRoOiAxNXJlbTtcclxufVxyXG5cclxuXHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcblxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gI3NpZGViYXItd3JhcHBlci50b2dnbGVkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTVyZW07XHJcbiAgfVxyXG4iXX0= */"

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
    AppComponent.prototype.toggleSideBar = function () {
        this.sidebarService.toggleSidebar();
    };
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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__);





















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
                _slide_show_slide_show_component__WEBPACK_IMPORTED_MODULE_9__["SlideShowComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_18__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_13__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyAzCYjsZeHK_uKbiNKAvxGWWOiziw1xQsc",
                    authDomain: "lecteurplanches.firebaseapp.com",
                    databaseURL: "lecteurplanches.firebaseio.com",
                    storageBucket: "lecteurplanches.appspot.com",
                    projectId: "lecteurplanches",
                }),
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_14__["AngularFireStorageModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"]
            ],
            providers: [_sidebar_service__WEBPACK_IMPORTED_MODULE_10__["SidebarService"], _slideshow_service__WEBPACK_IMPORTED_MODULE_12__["SlideshowService"], _database_service__WEBPACK_IMPORTED_MODULE_16__["DatabaseService"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/database.service.ts":
/*!*************************************!*\
  !*** ./src/app/database.service.ts ***!
  \*************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/comment */ "./src/app/model/comment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var DatabaseService = /** @class */ (function () {
    function DatabaseService(afDatabase, datePipe) {
        this.afDatabase = afDatabase;
        this.datePipe = datePipe;
    }
    DatabaseService.prototype.getAbout = function () {
        return this.afDatabase.object('/about').valueChanges();
    };
    DatabaseService.prototype.getLastPublication = function () {
        return this.afDatabase.object('/last_publication').valueChanges();
    };
    DatabaseService.prototype.getChapters = function () {
        return this.afDatabase.list('/chapters');
    };
    DatabaseService.prototype.getComments = function () {
        return this.afDatabase.list('/comments');
    };
    DatabaseService.prototype.addChapter = function (newChapter) {
        this.afDatabase.object('/chapters/' + (newChapter.number - 1)).update(newChapter);
    };
    DatabaseService.prototype.addImage = function (chapter) {
        var currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
        this.afDatabase.object('/last_publication').set(currentDate);
        this.afDatabase.object('/chapters/' + (chapter.number - 1)).update(chapter);
    };
    DatabaseService.prototype.addComment = function (author, comment) {
        var newComment = new _model_comment__WEBPACK_IMPORTED_MODULE_3__["Comment"]();
        newComment.author = author;
        newComment.comment = comment;
        var currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
        newComment.date = currentDate;
        this.afDatabase.list('/comments').push(newComment);
    };
    DatabaseService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], DatabaseService);
    return DatabaseService;
}());



/***/ }),

/***/ "./src/app/model/chapter.ts":
/*!**********************************!*\
  !*** ./src/app/model/chapter.ts ***!
  \**********************************/
/*! exports provided: Chapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapter", function() { return Chapter; });
var Chapter = /** @class */ (function () {
    function Chapter() {
    }
    return Chapter;
}());



/***/ }),

/***/ "./src/app/model/comment.ts":
/*!**********************************!*\
  !*** ./src/app/model/comment.ts ***!
  \**********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/publish-comment/publish-comment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/publish-comment/publish-comment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customFont {\r\n    font-family: 'customFont',arial;\r\n    color:grey;\r\n  }\r\n\r\n  .ng-invalid:not(form)  {\r\n    border-left:  solid red; /* red */\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGlzaC1jb21tZW50L3B1Ymxpc2gtY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0lBQy9CLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHVCQUF1QixFQUFFLFFBQVE7RUFDbkMiLCJmaWxlIjoic3JjL2FwcC9wdWJsaXNoLWNvbW1lbnQvcHVibGlzaC1jb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tRm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ2N1c3RvbUZvbnQnLGFyaWFsO1xyXG4gICAgY29sb3I6Z3JleTtcclxuICB9XHJcblxyXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6ICBzb2xpZCByZWQ7IC8qIHJlZCAqL1xyXG4gIH1cclxuIl19 */"

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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PublishCommentComponent = /** @class */ (function () {
    function PublishCommentComponent(databaseService, router) {
        this.databaseService = databaseService;
        this.router = router;
    }
    PublishCommentComponent.prototype.ngOnInit = function () {
    };
    PublishCommentComponent.prototype.onSubmit = function (form) {
        this.databaseService.addComment(form.value['pseudo'], form.value['comment']);
        this.router.navigate(['seeComments']);
    };
    PublishCommentComponent.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PublishCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publish-comment',
            template: __webpack_require__(/*! raw-loader!./publish-comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/publish-comment/publish-comment.component.html"),
            styles: [__webpack_require__(/*! ./publish-comment.component.css */ "./src/app/publish-comment/publish-comment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = ".customFont {\r\n  font-family: 'customFont',arial;\r\n  color:grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VlLWNvbW1lbnRzL3NlZS1jb21tZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0VBQy9CLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL3NlZS1jb21tZW50cy9zZWUtY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21Gb250IHtcclxuICBmb250LWZhbWlseTogJ2N1c3RvbUZvbnQnLGFyaWFsO1xyXG4gIGNvbG9yOmdyZXk7XHJcbn0iXX0= */"

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
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");



var SeeCommentsComponent = /** @class */ (function () {
    function SeeCommentsComponent(databaseService) {
        var _this = this;
        this.databaseService = databaseService;
        this.databaseService.getComments().valueChanges() // returns observable
            .subscribe(function (list) {
            _this.comments = list.reverse();
        });
    }
    SeeCommentsComponent.prototype.ngOnInit = function () {
    };
    SeeCommentsComponent.ctorParameters = function () { return [
        { type: _database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
    ]; };
    SeeCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-see-comments',
            template: __webpack_require__(/*! raw-loader!./see-comments.component.html */ "./node_modules/raw-loader/index.js!./src/app/see-comments/see-comments.component.html"),
            styles: [__webpack_require__(/*! ./see-comments.component.css */ "./src/app/see-comments/see-comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
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

module.exports = ".active-link{\r\n    font-weight: bold;\r\n}\r\n\r\n.customFont {\r\n    font-family: 'customFont',arial;\r\n    color:grey;\r\n  }\r\n\r\n.ng-valid:not(form)  {\r\n    border-left:  solid lightgreen; /* red */\r\n  }\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left:  solid red; /* red */\r\n  }\r\n\r\n.ng-pristine:not(form)  {\r\n    border:  solid lightgrey 1px; \r\n  }\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsVUFBVTtFQUNaOztBQUVBO0lBQ0UsOEJBQThCLEVBQUUsUUFBUTtFQUMxQzs7QUFDQTtJQUNFLHVCQUF1QixFQUFFLFFBQVE7RUFDbkM7O0FBRUE7SUFDRSw0QkFBNEI7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtbGlua3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY3VzdG9tRm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ2N1c3RvbUZvbnQnLGFyaWFsO1xyXG4gICAgY29sb3I6Z3JleTtcclxuICB9XHJcblxyXG4gIC5uZy12YWxpZDpub3QoZm9ybSkgIHtcclxuICAgIGJvcmRlci1sZWZ0OiAgc29saWQgbGlnaHRncmVlbjsgLyogcmVkICovXHJcbiAgfVxyXG4gIC5uZy1pbnZhbGlkOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyLWxlZnQ6ICBzb2xpZCByZWQ7IC8qIHJlZCAqL1xyXG4gIH1cclxuXHJcbiAgLm5nLXByaXN0aW5lOm5vdChmb3JtKSAge1xyXG4gICAgYm9yZGVyOiAgc29saWQgbGlnaHRncmV5IDFweDsgXHJcbiAgfVxyXG5cclxuICJdfQ== */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../database.service */ "./src/app/database.service.ts");





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(slideshowService, databaseService, router) {
        this.slideshowService = slideshowService;
        this.databaseService = databaseService;
        this.router = router;
        this.lastPublication = databaseService.getLastPublication();
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.gotoChapter = function (chapter) {
        this.slideshowService.gotoChapter(chapter);
    };
    SidebarComponent.prototype.onSubmit = function (form) {
        this.slideshowService.gotoPage(+form.value['numPage']);
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _slideshow_service__WEBPACK_IMPORTED_MODULE_2__["SlideshowService"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_slideshow_service__WEBPACK_IMPORTED_MODULE_2__["SlideshowService"], _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = ".img-perso {\r\n    max-width: 90%;\r\n   height: 50%;\r\n  }\r\n\r\n  \r\n.customFont {\r\n  font-family: 'customFont',arial;\r\n  color:grey;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGUtc2hvdy9zbGlkZS1zaG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0dBQ2YsV0FBVztFQUNaOzs7QUFHRjtFQUNFLCtCQUErQjtFQUMvQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9zbGlkZS1zaG93L3NsaWRlLXNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctcGVyc28ge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgIGhlaWdodDogNTAlO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5jdXN0b21Gb250IHtcclxuICBmb250LWZhbWlseTogJ2N1c3RvbUZvbnQnLGFyaWFsO1xyXG4gIGNvbG9yOmdyZXk7XHJcbn0iXX0= */"

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
/* harmony import */ var _model_chapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/chapter */ "./src/app/model/chapter.ts");
/* harmony import */ var _database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database.service */ "./src/app/database.service.ts");





var SlideshowService = /** @class */ (function () {
    function SlideshowService(afStorage, databaseService) {
        this.afStorage = afStorage;
        this.databaseService = databaseService;
        this.currentPage = 1;
        this.currentChapter = 1;
        this.pageMax = 1;
        this.chapterMax = 1;
        this.chaptersMap = new Map();
        this.setImageUrl();
        this.retrieveData();
    }
    SlideshowService.prototype.retrieveData = function () {
        var _this = this;
        this.databaseService.getChapters().valueChanges() // returns observable
            .subscribe(function (list) {
            _this.iterateChapters(list);
            _this.setChapterTitle();
        });
    };
    SlideshowService.prototype.iterateChapters = function (chaptersList) {
        var e_1, _a;
        try {
            for (var chaptersList_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](chaptersList), chaptersList_1_1 = chaptersList_1.next(); !chaptersList_1_1.done; chaptersList_1_1 = chaptersList_1.next()) {
                var chapter = chaptersList_1_1.value;
                this.chaptersMap.set(chapter.number, chapter);
                if (chapter.pageMax > this.pageMax) {
                    this.pageMax = chapter.pageMax;
                    this.chapterMax = chapter.number;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (chaptersList_1_1 && !chaptersList_1_1.done && (_a = chaptersList_1.return)) _a.call(chaptersList_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SlideshowService.prototype.setChapterTitle = function () {
        if (this.chaptersMap && this.chaptersMap.has(this.currentChapter)) {
            this.currentChapterTitle = this.chaptersMap.get(this.currentChapter).title;
            this.pageMinChapter = this.chaptersMap.get(this.currentChapter).pageMin;
            this.pageMaxChapter = this.chaptersMap.get(this.currentChapter).pageMax;
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
    SlideshowService.prototype.getChaptersOrder = function () {
        var chaptersSet = new Set();
        for (var counter = 1; counter <= this.chaptersMap.size; counter++) {
            chaptersSet.add(this.chaptersMap.get(counter));
        }
        return chaptersSet;
    };
    SlideshowService.prototype.gotoPage = function (page) {
        if (page <= 0) {
            this.currentPage = 1;
        }
        else {
            if (page > this.pageMax) {
                this.currentPage = this.pageMax;
            }
            else {
                this.currentPage = page;
                this.checkChapter();
            }
        }
        this.computePage();
    };
    SlideshowService.prototype.gotoChapter = function (chapter) {
        this.currentPage = this.chaptersMap.get(chapter).pageMin;
        this.computePage();
    };
    SlideshowService.prototype.addChapter = function (chapterTitle) {
        var newChapter = new _model_chapter__WEBPACK_IMPORTED_MODULE_3__["Chapter"]();
        newChapter.title = chapterTitle;
        newChapter.number = this.chapterMax + 1;
        newChapter.pageMin = this.pageMax + 1;
        newChapter.pageMax = this.pageMax + 1;
        //on positionne chaptermax et le map car le addimage arrive juste apres
        //et la map n'est pas encore recalculee
        this.chapterMax = newChapter.number;
        this.pageMax = newChapter.pageMax;
        this.chaptersMap.set(newChapter.number, newChapter);
        this.databaseService.addChapter(newChapter);
    };
    SlideshowService.prototype.checkChapter = function () {
        var e_2, _a;
        if (this.currentPage > this.pageMaxChapter || this.currentPage < this.pageMinChapter) {
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.chaptersMap.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var chapter = _c.value;
                    if (this.currentPage >= chapter.pageMin && this.currentPage <= chapter.pageMax) {
                        this.currentChapter = chapter.number;
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
    SlideshowService.prototype.addImage = function (file) {
        this.afStorage.upload(file.name, file);
        var newPageMax = +file.name.replace(".jpg", "");
        var chapter = this.chaptersMap.get(this.chapterMax);
        chapter.pageMax = newPageMax;
        if (this.currentChapter === this.chapterMax) {
            this.pageMaxChapter = newPageMax;
        }
        //la map sera recalculée automatiquement puisqu'on touche aux chapitres
        this.databaseService.addImage(chapter);
    };
    SlideshowService.ctorParameters = function () { return [
        { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
        { type: _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }
    ]; };
    SlideshowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"], _database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
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