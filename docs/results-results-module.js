(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-results-module"],{

/***/ "4LYy":
/*!*******************************************!*\
  !*** ./src/app/results/results.module.ts ***!
  \*******************************************/
/*! exports provided: ResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsModule", function() { return ResultsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results-routing.module */ "PoNi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results.component */ "NUXy");





class ResultsModule {
}
ResultsModule.ɵfac = function ResultsModule_Factory(t) { return new (t || ResultsModule)(); };
ResultsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ResultsModule });
ResultsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _results_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResultsModule, { declarations: [_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _results_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResultsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "NUXy":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _verify_verify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../verify/verify.component */ "tWCx");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/model */ "rW8v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/data-service */ "7hpk");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _core_system_service_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/system-service/notification.service */ "NyiH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "+0xr");




















const _c0 = ["formDirective"];
function ResultsComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
function ResultsComponent_div_1_mat_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-option", 22);
} if (rf & 2) {
    const e_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", e_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", e_r6.name, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ResultsComponent_div_1_mat_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-option", 22);
} if (rf & 2) {
    const s_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", s_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", s_r7.name, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ResultsComponent_div_1_div_33_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r8.result.message, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function ResultsComponent_div_1_div_33_div_2_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResultsComponent_div_1_div_33_div_2_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.subjectName, " ");
} }
function ResultsComponent_div_1_div_33_div_2_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResultsComponent_div_1_div_33_div_2_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Marks Scored ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResultsComponent_div_1_div_33_div_2_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.marksObtained, " ");
} }
function ResultsComponent_div_1_div_33_div_2_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.getPercentage(), " ");
} }
function ResultsComponent_div_1_div_33_div_2_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Total Marks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ResultsComponent_div_1_div_33_div_2_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r24.outOf, " ");
} }
function ResultsComponent_div_1_div_33_div_2_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "td", 39);
} }
function ResultsComponent_div_1_div_33_div_2_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 40);
} }
function ResultsComponent_div_1_div_33_div_2_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 41);
} }
function ResultsComponent_div_1_div_33_div_2_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 42);
} }
function ResultsComponent_div_1_div_33_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Name : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ResultsComponent_div_1_div_33_div_2_th_8_Template, 2, 0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ResultsComponent_div_1_div_33_div_2_td_9_Template, 2, 1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ResultsComponent_div_1_div_33_div_2_td_10_Template, 2, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ResultsComponent_div_1_div_33_div_2_th_12_Template, 2, 0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ResultsComponent_div_1_div_33_div_2_td_13_Template, 2, 1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ResultsComponent_div_1_div_33_div_2_td_14_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ResultsComponent_div_1_div_33_div_2_th_16_Template, 2, 0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ResultsComponent_div_1_div_33_div_2_td_17_Template, 2, 1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ResultsComponent_div_1_div_33_div_2_td_18_Template, 1, 0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ResultsComponent_div_1_div_33_div_2_tr_19_Template, 1, 0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ResultsComponent_div_1_div_33_div_2_tr_20_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ResultsComponent_div_1_div_33_div_2_tr_21_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r9.apiEndpoint + ctx_r9.result.userImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx_r9.result.username, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r9.result.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r9.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r9.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matFooterRowDef", ctx_r9.displayedColumns);
} }
function ResultsComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResultsComponent_div_1_div_33_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ResultsComponent_div_1_div_33_div_2_Template, 22, 6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.result.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.result.data);
} }
function ResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " VIEW YOUR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " RESULT HERE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "form", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Select your standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ResultsComponent_div_1_mat_option_25_Template, 1, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Select your exam");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ResultsComponent_div_1_mat_option_30_Template, 1, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResultsComponent_div_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ResultsComponent_div_1_div_33_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.resultForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.examination);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.standard);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.resultForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.result);
} }
class ResultsComponent {
    constructor(fb, examinationService, resultService, dialog, notificationService, standardService) {
        this.fb = fb;
        this.examinationService = examinationService;
        this.resultService = resultService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.standardService = standardService;
        this.isLoading = true;
        this.apiEndpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_endpoint;
        this.sendEmail = true;
        this.displayedColumns = ['subject', 'marksObtained', 'outOf'];
    }
    ngOnInit() {
        this.examinationService.getExamination()
            .subscribe(res => {
            this.examination = res;
        });
        this.standardService.getStandard()
            .subscribe(res => {
            this.standard = res;
        });
        this.resultForm = this.fb.group({
            examinationId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: [null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]
            ],
            standardId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            otp: [''],
        });
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
    openDialog() {
        this.onSubmit();
        const dialogRef = this.dialog.open(_verify_verify_component__WEBPACK_IMPORTED_MODULE_1__["VerifyComponent"], {
            disableClose: true,
            width: '350px',
            data: {
                email: this.resultForm.value.email,
                sendEmail: this.sendEmail,
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.resultForm.get('otp').setValue(+result.data.otp);
            // if (result.data.message == "Verified") {
            //   this.onSubmit();
            // }
        });
        this.sendEmail = false;
    }
    onSubmit() {
        this.resultService.postResult(this.resultForm.value).subscribe(res => {
            this.result = res;
            this.resultForm.reset();
            this.formDirective.resetForm();
        }, (error) => {
            this.notificationService.show(_core_model__WEBPACK_IMPORTED_MODULE_3__["AlertType"].Error, error.message);
        });
    }
    getPercentage() {
        let totalMarks = 0;
        let obtainedMarks = 0;
        if (this.result.data) {
            for (const r of this.result.data) {
                totalMarks += r.marksObtained;
                obtainedMarks += r.outOf;
            }
        }
        return `${(totalMarks / obtainedMarks * 100).toFixed(2)}%`;
    }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_5__["ExaminationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_5__["ResultService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_system_service_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_5__["StandardService"])); };
ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], viewQuery: function ResultsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.formDirective = _t.first);
    } }, decls: 2, vars: 2, consts: [["mode", "indeterminate", 4, "ngIf"], ["fxLayout", "row", "fxLayout.sm", "column", "class", "pb-40", "fxLayout.xs", "column", 4, "ngIf"], ["mode", "indeterminate"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "pb-40"], ["fxFlex", "45", "fxFlex.sm", "60", "fxFlex.xs", "100", "align", "center", 1, "div-one"], ["src", "./assets/result.png", 1, "img-div-one"], [1, "mat-display-2", "scd-font"], ["fxFlex", "55", "fxFlex.sm", "100", "fxFlex.xs", "100", "align", "center", 1, "div-two"], ["align", "center", 1, "mat-display-1", "scd-font"], [1, "fas", "fa-poll", "m-10", "fa-sm"], [1, "form-div"], [1, "mb-35"], [1, "p-10"], [3, "formGroup"], ["formDirective", "ngForm"], ["appearance", "standard", 2, "width", "100% !important"], ["matInput", "", "formControlName", "email"], ["formControlName", "examinationId"], [3, "value", "innerHtml", 4, "ngFor", "ngForOf"], ["formControlName", "standardId"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [4, "ngIf"], [3, "value", "innerHtml"], [3, "innerHtml"], ["height", "200", 3, "src"], ["align", "left"], [1, "mat-subheading-2"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "subject"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "marksObtained"], ["matColumnDef", "outOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ResultsComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResultsComponent_div_1_Template, 34, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatFooterRow"]], styles: [".div-one[_ngcontent-%COMP%] {\n  margin-left: 1%;\n  width: 30%;\n  margin-left: 1%;\n  position: fixed;\n  top: 50%;\n  margin-top: -200px;\n}\n.div-one[_ngcontent-%COMP%]   .img-div-one[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.div-two[_ngcontent-%COMP%] {\n  padding: 2%;\n  margin-left: 40%;\n  margin-bottom: 50px;\n}\n.div-two[_ngcontent-%COMP%]   .div-two-text[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: 300;\n  padding-left: 30px;\n  margin: 50px 0;\n}\n.div-two[_ngcontent-%COMP%]   .form-div[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.div-two[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.div-two[_ngcontent-%COMP%]   tr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n@media only screen and (max-width: 960px) {\n  .div-one[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .div-two[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlc3VsdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUdBO0VBQ0MsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRDtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUNFO0VBQ0UsV0FBQTtBQUNKO0FBQ0U7RUFDRSxpQkFBQTtBQUNKO0FBR0E7RUFDRTtJQUNFLGFBQUE7RUFBRjs7RUFFQTtJQUNJLGdCQUFBO0VBQ0o7QUFDRiIsImZpbGUiOiJyZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1vbmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICB3aWR0aDogMzAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTIwMHB4O1xyXG5cclxuICAuaW1nLWRpdi1vbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uZGl2LXR3byB7IFxyXG4gcGFkZGluZzogMiU7XHJcbiBtYXJnaW4tbGVmdDogNDAlO1xyXG4gbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAuZGl2LXR3by10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggMDtcclxuICB9XHJcbiAgLmZvcm0tZGl2IHsgIFxyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHRyLm1hdC1mb290ZXItcm93IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5kaXYtb25lIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxuICB9XHJcbiAgLmRpdi10d28ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "PoNi":
/*!***************************************************!*\
  !*** ./src/app/results/results-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ResultsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsRoutingModule", function() { return ResultsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results.component */ "NUXy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Views



const routes = [
    {
        path: '',
        component: _results_component__WEBPACK_IMPORTED_MODULE_1__["ResultsComponent"],
    }
];
class ResultsRoutingModule {
}
ResultsRoutingModule.ɵfac = function ResultsRoutingModule_Factory(t) { return new (t || ResultsRoutingModule)(); };
ResultsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ResultsRoutingModule });
ResultsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ResultsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _results_component__WEBPACK_IMPORTED_MODULE_1__["ResultsComponent"]
];


/***/ })

}]);
//# sourceMappingURL=results-results-module.js.map