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
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/data-service */ "7hpk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





function HomeComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r1.name);
} }
class HomeComponent {
    constructor(noticeService, standardService) {
        this.noticeService = noticeService;
        this.standardService = standardService;
    }
    ngOnInit() {
        this.noticeService.getNotice()
            .subscribe(res => {
            this.notices = res;
        });
        this.standardService.getStandardByRank()
            .subscribe(res => {
            this.standards = res;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service_notice_notice_service__WEBPACK_IMPORTED_MODULE_1__["NoticeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_2__["StandardService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-main"]], decls: 43, vars: 1, consts: [["align", "center", 1, "m-25"], [1, "bg-img-child"], ["src", "./assets/logo.png"], [1, "header-subtitle", "m-20"], [1, "header-subtitle", "motto-border", "p-10"], [1, "topCourses"], [4, "ngFor", "ngForOf"], [1, "pt-50", "mb-100"], ["align", "center"], [1, "mat-headline", "header-title"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "align", "center", "fxLayoutGap", "20px", 1, "m-20"], ["fxLayout", "row", "fxFlex", "66", "fxLayoutGap", "20px", "fxLayout.sm", "row", "fxLayout.xs", "column", 1, "mb-0"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "75", "align", "center", 1, "circle-img-div", "card", 2, "width", "225px"], [1, "mat-title", "bgcolor-yellow", "p-20"], [1, "mat-subheading-1", "p-5"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "75", "align", "center", 1, "circle-img-div", "card", "mb-20", 2, "width", "225px"], ["fxLayout", "row", "fxFlex", "33", "fxLayout.sm", "row", "fxLayout.xs", "column"], ["fxFlex", "100", "fxFlex.xs", "100", "fxFlex.sm", "75", "align", "center", 1, "circle-img-div", "card", 2, "width", "225px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Popular Choices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_p_12_Template, 2, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Courses Offered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Std IX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Std X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Junior College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "FYJC(Commerce)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "SYJC(Commerce)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Degree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "FY Bcom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "SY Bcom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "TY Bcom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.standards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"]], styles: [".motto-border[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #fca311;\n  line-height: 30px;\n}\n\n.topper-div[_ngcontent-%COMP%] {\n  height: 650px;\n  padding-top: 10px;\n  background-color: #EFEFEF;\n}\n\n.topper-div[_ngcontent-%COMP%]   .exam-name[_ngcontent-%COMP%] {\n  height: 56px;\n  margin: 0 auto 0px 50px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-1[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-2[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  display: block;\n  margin: 0 auto;\n  object-fit: cover;\n  border-radius: 4px 4px 50px 50px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-border[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 25px;\n  margin: 0 auto;\n  width: 50%;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 35px;\n}\n\n.notice-board-div[_ngcontent-%COMP%] {\n  margin: 2.5vw 2.5vw 5vw 2.5vw;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  padding: 0 2.5vw;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 1vw 2.5vw;\n  height: 350px;\n  overflow-y: auto;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   .notice-board-content[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 700;\n  border-bottom: 1px solid #fca311;\n  margin-bottom: 25px;\n  padding: 0 0 25px 25px;\n}\n\n@media only screen and (max-width: 960px) {\n  .topper-div[_ngcontent-%COMP%] {\n    height: 1500px;\n  }\n\n  .student-border[_ngcontent-%COMP%] {\n    bottom: 0;\n    top: 180px;\n    width: 70% !important;\n  }\n\n  .student-1[_ngcontent-%COMP%], .student-2[_ngcontent-%COMP%], .student-3[_ngcontent-%COMP%] {\n    margin-bottom: 30px !important;\n  }\n\n  .notice-board-div[_ngcontent-%COMP%] {\n    margin-bottom: 20vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFFUjs7QUFBSTs7O0VBR0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFUjs7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBRUE7RUFDSSw2QkFBQTtBQUNKOztBQUNRO0VBQ0ksZ0JBQUE7QUFDWjs7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ1o7O0FBQVk7RUFDSSxhQUFBO0FBRWhCOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBSUE7RUFDSTtJQUNJLGNBQUE7RUFETjs7RUFHRTtJQUNJLFNBQUE7SUFDQSxVQUFBO0lBQ0EscUJBQUE7RUFBTjs7RUFFRTs7O0lBR0ksOEJBQUE7RUFDTjs7RUFDRTtJQUNJLG1CQUFBO0VBRU47QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdHRvLWJvcmRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmNhMzExO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b3BwZXItZGl2IHtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcbiAgICAuZXhhbS1uYW1lIHtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMHB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC0xLFxyXG4gICAgLnN0dWRlbnQtMixcclxuICAgIC5zdHVkZW50LTMge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5zdHVkZW50LWltZyB7XHJcbiAgICAgICAgYXNwZWN0LXJhdGlvOiA0LzM7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA1MHB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC1ib3JkZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMjVweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ub3RpY2UtYm9hcmQtZGl2IHtcclxuICAgIG1hcmdpbjogMi41dncgMi41dncgNXZ3IDIuNXZ3O1xyXG4gICAgLm5vdGljZS1ib2FyZC1jYXJkIHtcclxuICAgICAgICAubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyLjV2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxdncgMi41dnc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIC5ub3RpY2UtYm9hcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmY2EzMTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDI1cHggMjVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgLnRvcHBlci1kaXYge1xyXG4gICAgICAgIGhlaWdodDogMTUwMHB4O1xyXG4gICAgfVxyXG4gICAgLnN0dWRlbnQtYm9yZGVyIHtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgdG9wOiAxODBweDtcclxuICAgICAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc3R1ZGVudC0xLFxyXG4gICAgLnN0dWRlbnQtMixcclxuICAgIC5zdHVkZW50LTMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ub3RpY2UtYm9hcmQtZGl2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHZ3O1xyXG4gICAgfVxyXG59Il19 */"] });


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