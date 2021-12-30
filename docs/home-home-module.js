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
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/data-service */ "7hpk");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function HomeComponent_div_49_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](s_r3.name);
} }
function HomeComponent_div_49_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_49_div_3_p_2_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/course/", c_r1.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r3.courseId == c_r1.id);
} }
function HomeComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_49_div_3_Template, 3, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.standards);
} }
class HomeComponent {
    constructor(standardService, courseService) {
        this.standardService = standardService;
        this.courseService = courseService;
    }
    ngOnInit() {
        this.standardService.getStandard()
            .subscribe(res => {
            this.standards = res;
            console.log(this.standards);
        });
        this.courseService.getCourses()
            .subscribe(res => {
            this.courses = res;
            console.log(this.courses);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_1__["StandardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-main"]], decls: 50, vars: 1, consts: [["align", "center", 1, "m-25"], [1, "bg-img-child"], ["src", "./assets/logo.png"], [1, "header-subtitle", "m-20"], [1, "header-subtitle", "motto-border", "p-10"], [1, "spacer", "layer1"], [1, "topper-div"], [1, "exam-name", "mat-display-3"], [1, "mat-caption", "ml-52"], ["fxLayout", "row warp", 1, "mt-50"], ["fxFlex", "30", "fxFlex.sm", "45", "fxFlex.xs", "100", 1, "student-1"], ["src", "http://localhost:3000/assets/images/2021-10-19T08-1.jpg", "height", "240", "width", "180", 1, "student-img"], ["src", "assets/1st.png", 1, "student-border"], [1, "student-text", "mat-title"], ["fxFlex", "30", "fxFlex.sm", "45", "fxFlex.xs", "100", 1, "student-2"], ["src", "assets/2nd.png", 1, "student-border"], ["fxFlex", "30", "fxFlex.sm", "45", "fxFlex.xs", "100", 1, "student-3"], ["src", "assets/3rd.png", 1, "student-border"], [1, "pt-50", "mb-100"], ["align", "center"], [1, "mat-headline", "header-title"], ["fxLayout", "row warp", "fxLayoutAlign", "center", "fxLayoutGap", "20px grid", "align", "center"], ["fxFlex", "33%", "fxFlex.xs", "70%", "fxFlex.sm", "40%", "class", "card", 4, "ngFor", "ngForOf"], ["fxFlex", "33%", "fxFlex.xs", "70%", "fxFlex.sm", "40%", 1, "card"], [1, "mat-title", "bgcolor-yellow", "p-12"], [4, "ngFor", "ngForOf"], ["href", "...", 3, "routerLink"], ["class", "mat-subheading-1 p-5 m-0 standard", 4, "ngIf"], [1, "mat-subheading-1", "p-5", "m-0", "standard"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Bilal Sunasra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Std X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 72.0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Courses Offered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, HomeComponent_div_49_Template, 4, 2, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_2__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".motto-border[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid #fca311;\n  line-height: 30px;\n}\n\n.topper-div[_ngcontent-%COMP%] {\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #EFEFEF;\n}\n\n.topper-div[_ngcontent-%COMP%]   .exam-name[_ngcontent-%COMP%] {\n  height: 56px;\n  margin: 0 auto 0px 50px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-1[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-2[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-3[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 380px;\n  margin: 0 auto;\n  position: relative;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-1[_ngcontent-%COMP%]   .student-text[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-2[_ngcontent-%COMP%]   .student-text[_ngcontent-%COMP%], .topper-div[_ngcontent-%COMP%]   .student-3[_ngcontent-%COMP%]   .student-text[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-img[_ngcontent-%COMP%] {\n  aspect-ratio: 4/3;\n  display: block;\n  margin: 0 auto;\n  object-fit: cover;\n  border-radius: 4px 4px 50px 50px;\n}\n\n.topper-div[_ngcontent-%COMP%]   .student-border[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 123px;\n  margin: 0 auto;\n  width: 200px;\n}\n\n.notice-board-div[_ngcontent-%COMP%] {\n  margin: 2.5vw 2.5vw 5vw 2.5vw;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%] {\n  padding: 0 2.5vw;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  padding: 1vw 2.5vw;\n  height: 350px;\n  overflow-y: auto;\n}\n\n.notice-board-div[_ngcontent-%COMP%]   .notice-board-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]   .notice-board-content[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 700;\n  border-bottom: 1px solid #fca311;\n  margin-bottom: 25px;\n  padding: 0 0 25px 25px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.standard[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: -1px 5px 23px -15px rgba(0, 0, 0, 0.64);\n  -webkit-box-shadow: -1px 5px 23px -15px rgba(0, 0, 0, 0.64);\n  -moz-box-shadow: -1px 5px 23px -15px rgba(0, 0, 0, 0.64);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUNFO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUU7OztFQUdFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUk7OztFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFTjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBREo7O0FBS0E7RUFDRSw2QkFBQTtBQUZGOztBQUtJO0VBQ0UsZ0JBQUE7QUFITjs7QUFNSTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBSk47O0FBTU07RUFDRSxhQUFBO0FBSlI7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQRjs7QUFXQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7QUFSRjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxtREFBQTtFQUNBLDJEQUFBO0VBQ0Esd0RBQUE7QUFSRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vdHRvLWJvcmRlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmY2EzMTE7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50b3BwZXItZGl2IHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUY7XHJcblxyXG4gIC5leGFtLW5hbWUge1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMHB4IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuc3R1ZGVudC0xLFxyXG4gIC5zdHVkZW50LTIsXHJcbiAgLnN0dWRlbnQtMyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLnN0dWRlbnQtdGV4dCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdHVkZW50LWltZyB7XHJcbiAgICBhc3BlY3QtcmF0aW86IDQvMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggNTBweCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnN0dWRlbnQtYm9yZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMTIzcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpY2UtYm9hcmQtZGl2IHtcclxuICBtYXJnaW46IDIuNXZ3IDIuNXZ3IDV2dyAyLjV2dztcclxuXHJcbiAgLm5vdGljZS1ib2FyZC1jYXJkIHtcclxuICAgIC5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwIDIuNXZ3O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMXZ3IDIuNXZ3O1xyXG4gICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgLm5vdGljZS1ib2FyZC1jb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmY2EzMTE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBwYWRkaW5nOiAwIDAgMjVweCAyNXB4O1xyXG59XHJcblxyXG4vL0NvdXJzZXMgb2ZmZXJlZCBTVEFSVFxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbn1cclxuXHJcbi5zdGFuZGFyZDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6IC0xcHggNXB4IDIzcHggLTE1cHggcmdiYSgwLDAsMCwwLjY0KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggNXB4IDIzcHggLTE1cHggcmdiYSgwLDAsMCwwLjY0KTtcclxuICAtbW96LWJveC1zaGFkb3c6IC0xcHggNXB4IDIzcHggLTE1cHggcmdiYSgwLDAsMCwwLjY0KTtcclxufVxyXG4vL0NvdXJzZXMgb2ZmZXJlZCBFTkRcclxuIl19 */"] });


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