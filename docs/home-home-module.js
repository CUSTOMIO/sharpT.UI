(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_data_service_notice_notice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data-service/notice/notice.service */ "I5sb");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");




class HomeComponent {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    ngOnInit() {
        this.noticeService.getNotice()
            .subscribe(res => {
            this.notices = res;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service_notice_notice_service__WEBPACK_IMPORTED_MODULE_1__["NoticeService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-main"]], decls: 44, vars: 0, consts: [["align", "center", 1, "m-25"], [1, "bg-img-child"], ["src", "./assets/logo.png"], [1, "header-subtitle", "m-20"], [1, "header-subtitle", "motto-border", "p-10"], [1, "spacer", "layer1"], [1, "topper-div"], [1, "exam-name", "mat-display-3"], [1, "mat-caption", "ml-52"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "mt-50"], ["fxFlex", "33", "fxFlex.sm", "100", "fxFlex.xs", "100", 1, "student-1"], ["src", "http://localhost:3000/assets/images/2021-10-19T08-1.jpg", "height", "240", "width", "180", 1, "student-img"], ["src", "assets/1st.png", "width", "300", 1, "student-border"], [1, "student-text", "mat-title"], ["fxFlex", "33", "fxFlex.sm", "100", "fxFlex.xs", "100", 1, "student-2"], ["src", "assets/2nd.png", "width", "300", 1, "student-border"], ["fxFlex", "33", "fxFlex.sm", "100", "fxFlex.xs", "100", 1, "student-3"], ["src", "assets/3rd.png", "width", "300", 1, "student-border"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PROF. SUFIYAN KOJAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \"COMMERCE & SCHOOL EDUCATION MEANS SHARP TUTORIALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ANY THING ELSE IS A COMPROMISE\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " H.S.C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "2021-2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Sana Sunasra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Std X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 91.6% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Isa Sunasra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Std X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 86.2% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Bilal Sunasra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Std X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 72.0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: [".motto-border[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #fca311;\n  line-height: 30px;\n}\n\n.topper-div[_ngcontent-%COMP%] {\n  height: 650px;\n  padding-top: 10px;\n  background-color: #EFEFEF;\n}\n\n.topper-div[_ngcontent-%COMP%]   .exam-name[_ngcontent-%COMP%] {\n  height: 56px;\n  margin: 0 auto 0px 50px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-1[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-2[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  display: block;\n  margin: 0 auto;\n  object-fit: cover;\n  border-radius: 4px 4px 50px 50px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-border[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 25px;\n  margin: 0 auto;\n  width: 50%;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 35px;\n}\n\n.notice-board-div[_ngcontent-%COMP%] {\n  margin: 2.5vw 2.5vw 5vw 2.5vw;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  padding: 0 2.5vw;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 1vw 2.5vw;\n  height: 350px;\n  overflow-y: auto;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   .notice-board-content[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n@media only screen and (max-width: 960px) {\n  .topper-div[_ngcontent-%COMP%] {\n    height: 1500px;\n  }\n\n  .student-border[_ngcontent-%COMP%] {\n    bottom: 0;\n    top: 180px;\n    width: 70% !important;\n  }\n\n  .student-1[_ngcontent-%COMP%], .student-2[_ngcontent-%COMP%], .student-3[_ngcontent-%COMP%] {\n    margin-bottom: 30px !important;\n  }\n\n  .notice-board-div[_ngcontent-%COMP%] {\n    margin-bottom: 20vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFFUjs7QUFBSTs7O0VBR0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUNRO0VBQ0ksZ0JBQUE7QUFDWjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ1o7O0FBQVk7RUFDSSxhQUFBO0FBRWhCOztBQUlBO0VBQ0k7SUFDSSxjQUFBO0VBRE47O0VBR0U7SUFDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLHFCQUFBO0VBQU47O0VBRUU7OztJQUdJLDhCQUFBO0VBQ047O0VBQ0U7SUFDSSxtQkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb3R0by1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZjYTMxMTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4udG9wcGVyLWRpdiB7XHJcbiAgICBoZWlnaHQ6IDY1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xyXG4gICAgLmV4YW0tbmFtZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDBweCA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtMSxcclxuICAgIC5zdHVkZW50LTIsXHJcbiAgICAuc3R1ZGVudC0zIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1pbWcge1xyXG4gICAgICAgIGFzcGVjdC1yYXRpbzogNC8zO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNTBweCA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtYm9yZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5zdHVkZW50LXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubm90aWNlLWJvYXJkLWRpdiB7XHJcbiAgICBtYXJnaW46IDIuNXZ3IDIuNXZ3IDV2dyAyLjV2dztcclxuICAgIC5ub3RpY2UtYm9hcmQtY2FyZCB7XHJcbiAgICAgICAgLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMi41dnc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXZ3IDIuNXZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAubm90aWNlLWJvYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLnRvcHBlci1kaXYge1xyXG4gICAgICAgIGhlaWdodDogMTUwMHB4O1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtYm9yZGVyIHtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdG9wOiAxODBweDtcclxuICAgICAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC0xLFxyXG4gICAgLnN0dWRlbnQtMixcclxuICAgIC5zdHVkZW50LTMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ub3RpY2UtYm9hcmQtZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "9vUh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Views



const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
];


/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "9vUh");





class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map