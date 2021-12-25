(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "+wPt":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ "84zG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Views



const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"],
    }
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
];


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");




function AboutComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
function AboutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " About our Institution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The Mission of the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sharp Tutorial");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " is to partner with parentsto inspire each student to think critically, communicate effectively, and achieve excellence by providing academic choice. Concept-based learning techniques along with experienced teachers help students to achieve a successful career. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Timely Completion Of syllabus ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Teaching Methodology ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Test Preparation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Qualified Teachers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Why choose us? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Sharp Tutorials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " has limited Students In Per Batch Which Help Teacher to get personal attention in each and every students. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Every Week Test Will Be Conducted");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Limited Students Per Batch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Well Prepared Study Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Regular Performace Updates to Parents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "5+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "YEARS OF EXPERIENCE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "PASSED PERCENTAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "300+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "TRAINED STUDENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Our Expert Faculty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Sharp Tutorials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " has one of the best faculty in south Mumbai when it comes to school & commerce coaching. Our faculty comprises of experienced and renowed teachers for different subjects who have a through knowledge and command of their subjects, and able to answer all students querries as required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "School");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Prof. Sufiyan Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Prof. Salman Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Prof. Sariya Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Junior College");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Prof. Sufiyan Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Prof. Salman Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Prof. Sariya Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Degree");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Prof. Sufiyan Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Prof. Salman Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Prof. Sariya Kojar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Career At Sharp Tutotial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Sharp Tutorials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " aims to be the Best Commerce Coaching Institute in Mumbai. We Invite Dedicated, Talented and Passionate Teachers and Administrators to come and be Part of ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Be a part of one of the and best commerce tutorials in South Mumbai ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Champion the cause of education with training from our experienced faculty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " One to one attention between teachers and students ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutComponent {
    constructor() {
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 2, consts: [["mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate"], [1, "m-20", "pt-10"], [1, "mat-headline", "header-title"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutGap", "20px"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "100", "align", "center", 1, "left-content", "pt-20"], [1, "mat-subheading-2"], [1, "color-yellow"], [1, "m-5", "pl-35", "pt-30", 2, "text-align", "justify"], [1, "far", "fa-check-square", "ml-5", "mr-5", "color-yellow"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "45", 1, "right-content-div"], ["src", "./assets/smart-classroom.png", 1, "right-content"], [1, "spacer", "layer1"], [1, "pt-50", "p-25", 2, "background-color", "#EFEFEF"], ["align", "center"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "fxLayoutGap", "20px", "align", "center"], ["fxLayout", "row", "fxFlex", "50", "fxLayoutGap", "20px", "fxLayoutGap.xs", "20px", "fxLayout.sm", "row", "fxLayout.xs", "column", 1, "mb-fix"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "50", "align", "center", 1, "circle-img-div", "card"], ["src", "./assets/test.png", 1, "circle-img", "p-20"], [1, "mat-subheading-1", "p-10"], ["src", "./assets/student_per_batch.png", 1, "circle-img", "p-20"], ["fxLayout", "row", "fxFlex", "50", "fxLayoutGap", "20px", "fxLayoutGap.xs", "20px", "fxLayout.sm", "row", "fxLayout.xs", "column"], ["src", "./assets/book.png", 1, "circle-img", "p-20"], ["src", "./assets/parents.png", 1, "circle-img", "p-20"], [1, "spacer", "layer2"], [1, "bgcolor-blue", 2, "color", "white", "margin-top", "-6px"], ["fxFlex", "30", "fxFlex.sm", "100", "fxFlex.xs", "100", 1, "child-dark", "p-20"], [1, "mat-display-2", "m-10"], [1, "mat-subheading-1"], [1, "pt-50"], [1, "mat-subheading-2", "p-20"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", "align", "center", "fxLayoutGap", "20px", 1, "m-20"], ["fxLayout", "row", "fxFlex", "66", "fxLayoutGap", "20px", "fxLayout.sm", "row", "fxLayout.xs", "column", 1, "mb-0"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "75", "align", "center", 1, "circle-img-div", "card", 2, "width", "225px"], [1, "mat-title", "bgcolor-yellow", "p-20"], [1, "mat-subheading-1", "p-5"], ["fxFlex", "50", "fxFlex.xs", "100", "fxFlex.sm", "75", "align", "center", 1, "circle-img-div", "card", "mb-20", 2, "width", "225px"], ["fxLayout", "row", "fxFlex", "33", "fxLayout.sm", "row", "fxLayout.xs", "column"], ["fxFlex", "100", "fxFlex.xs", "100", "fxFlex.sm", "75", "align", "center", 1, "circle-img-div", "card", 2, "width", "225px"], [1, "pt-50", "p-25", "pb-100", 2, "background-color", "#EFEFEF"], ["fxFlex", "30", "fxFlex.xs", "100", "fxFlex.sm", "100", "align", "center", 1, "img-card-div", "mb-20", "card"], ["src", "./assets/student-teacher_22.png", 1, "img-card"], [1, "mat-subheading-1", "img-card-text", "p-10"], ["src", "./assets/student-teacher_11.png", 1, "img-card"], ["src", "./assets/student-teacher_33.png", 1, "img-card"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AboutComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_div_1_Template, 134, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"]], styles: [".container-flex[_ngcontent-%COMP%] {\n  text-align: center;\n  display: block;\n}\n.flex-child[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.header-title[_ngcontent-%COMP%] {\n  text-align: left;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 700;\n  border-bottom: 1px solid #fca311;\n  margin-bottom: 25px;\n  padding: 0 0 25px 25px;\n}\n.right-content-div[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.left-content[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  height: fit-content();\n  margin-bottom: 30px;\n}\n.right-content[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.circle-img-div[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  max-height: 215px;\n  margin-bottom: 30px;\n}\n.circle-img[_ngcontent-%COMP%] {\n  background-color: inherit;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  border-bottom: 0.5px solid #fca311;\n}\n\n.child-dark[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.img-card-div[_ngcontent-%COMP%] {\n  width: 295px;\n  height: fit-content();\n  margin-left: auto;\n  margin-right: auto;\n}\n.img-card[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  height: 260px;\n}\n@media only screen and (max-width: 600px) {\n  .mb-fix[_ngcontent-%COMP%] {\n    margin-bottom: -10px !important;\n  }\n\n  .header-title[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBRUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUdBO0VBQ0kscUJBQUE7QUFBSjtBQUlBLFdBQUE7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZKO0FBS0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFGSjtBQUtBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUtBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFNQSxnQkFBQTtBQUVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSko7QUFPQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFKSjtBQVFBLHVCQUFBO0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVVBLFVBQUE7QUFFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBUko7QUFXQTtFQUNJO0lBQ0ksK0JBQUE7RUFSTjs7RUFVRTtJQUNJLGtCQUFBO0lBQ0EsZUFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkZMRVggQ09OVEFJTkVSKi9cclxuXHJcbi5jb250YWluZXItZmxleCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZsZXgtY2hpbGQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLypBQk9VVCBVUyovXHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmY2EzMTE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDI1cHggMjVweDtcclxufVxyXG5cclxuLnJpZ2h0LWNvbnRlbnQtZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxlZnQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQoKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5yaWdodC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKldIWSBDSE9PU0UgVVMqL1xyXG5cclxuLmNpcmNsZS1pbWctZGl2IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMjE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uY2lyY2xlLWltZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjZmNhMzExO1xyXG59XHJcblxyXG5cclxuLypTRUNUSU9OIFdJVEggREFSSyBCRyovXHJcblxyXG4uY2hpbGQtZGFyayB7XHJcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcblxyXG4vKkNBUkVFUiAqL1xyXG5cclxuLmltZy1jYXJkLWRpdiB7XHJcbiAgICB3aWR0aDogMjk1cHg7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50KCk7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmltZy1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1iLWZpeCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItdGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-routing.module */ "+wPt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "84zG");





class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _about_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map