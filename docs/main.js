(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\SharpTutorials\sharpT.UI\src\main.ts */"zUnb");


/***/ }),

/***/ "4bPa":
/*!*****************************************************************!*\
  !*** ./src/app/layout/layout-footer/layout-footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: LayoutFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFooterComponent", function() { return LayoutFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LayoutFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutFooterComponent.ɵfac = function LayoutFooterComponent_Factory(t) { return new (t || LayoutFooterComponent)(); };
LayoutFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutFooterComponent, selectors: [["app-layout-footer"]], decls: 3, vars: 0, consts: [[1, "footer"], ["align", "center", 1, "mat-caption"]], template: function LayoutFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2021 Sharp Tutorials. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  height: 16px;\n  width: 100%;\n  z-index: 11;\n  background-color: #fcddaa;\n}\n.footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 16px;\n  color: black;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJsYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkZGFhO1xyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "6zbl":
/*!*************************************************************************!*\
  !*** ./src/app/shared/component/notice-board/notice-board.component.ts ***!
  \*************************************************************************/
/*! exports provided: NoticeBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardComponent", function() { return NoticeBoardComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../doc-viewer/doc-viewer.component */ "JGdG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/data-service */ "7hpk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function NoticeBoardComponent_div_3_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoticeBoardComponent_div_3_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const notice_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.previewDocument(notice_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NoticeBoardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, NoticeBoardComponent_div_3_i_2_Template, 1, 0, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notice_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", notice_r1.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", notice_r1.file);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHtml", notice_r1.updatedAt, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
class NoticeBoardComponent {
    constructor(noticeService, data, dialogRef, dialog) {
        this.noticeService = noticeService;
        this.data = data;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_endpoint;
    }
    ngOnInit() {
        this.noticeService.getNotice()
            .subscribe(res => {
            this.notices = res;
            console.log(res);
        });
    }
    previewDocument(notice) {
        const pdfSource = this.endpoint + notice.file;
        const dialogData = {
            width: '90%',
            data: {
                pdfFileName: notice.file.replace('/assets/file/', ''),
                pdfSource,
                previewContentType: notice.mimetype
            }
        };
        const dialogRef = this.dialog.open(_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_2__["DocViewerComponent"], dialogData);
    }
    closeDialog() {
        this.dialogRef.close();
    }
}
NoticeBoardComponent.ɵfac = function NoticeBoardComponent_Factory(t) { return new (t || NoticeBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_data_service__WEBPACK_IMPORTED_MODULE_4__["NoticeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
NoticeBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NoticeBoardComponent, selectors: [["ng-component"]], decls: 4, vars: 1, consts: [["mat-dialog-title", "", 1, "dialog-header", "mb-0"], [1, "notice-board-div", "pt-20"], ["class", "notice-board-content mat-subheading-2 p-10", "style", "background-color: #EFEFEF", 4, "ngFor", "ngForOf"], [1, "notice-board-content", "mat-subheading-2", "p-10", 2, "background-color", "#EFEFEF"], ["class", "far fa-eye", 3, "click", 4, "ngIf"], [1, "mat-hint", "pl-10", 2, "font-size", "12px", 3, "innerHtml"], [1, "far", "fa-eye", 3, "click"]], template: function NoticeBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Notice Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, NoticeBoardComponent_div_3_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notices);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpY2UtYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "7hpk":
/*!********************************************!*\
  !*** ./src/app/core/data-service/index.ts ***!
  \********************************************/
/*! exports provided: CourseService, StandardService, ApplicationFormService, SubjectService, BlogService, ReachUsService, ExaminationService, ResultService, NoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _course_course_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./course/course.service */ "8LvI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return _course_course_service__WEBPACK_IMPORTED_MODULE_0__["CourseService"]; });

/* harmony import */ var _standard_standard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard/standard.service */ "HaPv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardService", function() { return _standard_standard_service__WEBPACK_IMPORTED_MODULE_1__["StandardService"]; });

/* harmony import */ var _application_form_application_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-form/application-form.service */ "jgex");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationFormService", function() { return _application_form_application_form_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationFormService"]; });

/* harmony import */ var _subject_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject/subject.service */ "CI8l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return _subject_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]; });

/* harmony import */ var _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.service */ "aaL1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return _blog_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"]; });

/* harmony import */ var _reach_us_reach_us_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reach-us/reach-us.service */ "IUM4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReachUsService", function() { return _reach_us_reach_us_service__WEBPACK_IMPORTED_MODULE_5__["ReachUsService"]; });

/* harmony import */ var _examination_examination_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examination/examination.service */ "DDF9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function() { return _examination_examination_service__WEBPACK_IMPORTED_MODULE_6__["ExaminationService"]; });

/* harmony import */ var _result_result_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.service */ "KwYH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return _result_result_service__WEBPACK_IMPORTED_MODULE_7__["ResultService"]; });

/* harmony import */ var _notice_notice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notice/notice.service */ "I5sb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoticeService", function() { return _notice_notice_service__WEBPACK_IMPORTED_MODULE_8__["NoticeService"]; });












/***/ }),

/***/ "8LvI":
/*!************************************************************!*\
  !*** ./src/app/core/data-service/course/course.service.ts ***!
  \************************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "rW8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class CourseService {
    constructor(http) {
        this.http = http;
    }
    getCourses() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/course`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Course"](x))));
    }
}
CourseService.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
CourseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CourseService, factory: CourseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    name: 'dev',
    api_endpoint: 'http://localhost:3000'
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

/***/ "CI8l":
/*!**************************************************************!*\
  !*** ./src/app/core/data-service/subject/subject.service.ts ***!
  \**************************************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "rW8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SubjectService {
    constructor(http) {
        this.http = http;
    }
    getSubject() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/subject`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Subject"](x))));
    }
    getSubjectByStandardId(standardId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/subject/${standardId}?getActive=true`;
        return this.http.get(url);
    }
}
SubjectService.ɵfac = function SubjectService_Factory(t) { return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SubjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SubjectService, factory: SubjectService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "DDF9":
/*!**********************************************************************!*\
  !*** ./src/app/core/data-service/examination/examination.service.ts ***!
  \**********************************************************************/
/*! exports provided: ExaminationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationService", function() { return ExaminationService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "rW8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ExaminationService {
    constructor(http) {
        this.http = http;
    }
    getExamination() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/examination`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Examination"](x))));
    }
}
ExaminationService.ɵfac = function ExaminationService_Factory(t) { return new (t || ExaminationService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ExaminationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ExaminationService, factory: ExaminationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "GmQM":
/*!********************************************************!*\
  !*** ./src/app/core/model/result/post-result.model.ts ***!
  \********************************************************/
/*! exports provided: PostResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostResult", function() { return PostResult; });
class PostResult {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "HaPv":
/*!****************************************************************!*\
  !*** ./src/app/core/data-service/standard/standard.service.ts ***!
  \****************************************************************/
/*! exports provided: StandardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardService", function() { return StandardService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "rW8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class StandardService {
    constructor(http) {
        this.http = http;
    }
    getStandard() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/standard`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Standard"](x))));
    }
    getStandardBycourseId(courseId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/standard/${courseId}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Standard"](x))));
    }
    getStandardByRank() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/standardByRank`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Standard"](x))));
    }
}
StandardService.ɵfac = function StandardService_Factory(t) { return new (t || StandardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
StandardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: StandardService, factory: StandardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "I5sb":
/*!************************************************************!*\
  !*** ./src/app/core/data-service/notice/notice.service.ts ***!
  \************************************************************/
/*! exports provided: NoticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeService", function() { return NoticeService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "rW8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class NoticeService {
    constructor(http) {
        this.http = http;
    }
    getNotice() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/notice`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Notice"](x))));
    }
}
NoticeService.ɵfac = function NoticeService_Factory(t) { return new (t || NoticeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NoticeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NoticeService, factory: NoticeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IUM4":
/*!****************************************************************!*\
  !*** ./src/app/core/data-service/reach-us/reach-us.service.ts ***!
  \****************************************************************/
/*! exports provided: ReachUsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachUsService", function() { return ReachUsService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ReachUsService {
    constructor(http) {
        this.http = http;
    }
    postReachus(reachUs) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/reachus`;
        return this.http.post(url, reachUs);
    }
}
ReachUsService.ɵfac = function ReachUsService_Factory(t) { return new (t || ReachUsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ReachUsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ReachUsService, factory: ReachUsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JGdG":
/*!*********************************************************************!*\
  !*** ./src/app/shared/component/doc-viewer/doc-viewer.component.ts ***!
  \*********************************************************************/
/*! exports provided: DocViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocViewerComponent", function() { return DocViewerComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ "E1wN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function DocViewerComponent_div_5_ngx_extended_pdf_viewer_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngx-extended-pdf-viewer", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageRendered", function DocViewerComponent_div_5_ngx_extended_pdf_viewer_2_Template_ngx_extended_pdf_viewer_pageRendered_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r5.onDocLoadComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", "/assets/ER.pdf")("zoom", 100)("showBookmarkButton", false)("showOpenFileButton", false)("showSecondaryToolbarButton", false);
} }
function DocViewerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DocViewerComponent_div_5_ngx_extended_pdf_viewer_2_Template, 1, 5, "ngx-extended-pdf-viewer", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.pdfSource);
} }
function DocViewerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function DocViewerComponent_div_6_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onDocLoadComplete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.pdfSource, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function DocViewerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " File not supported for preivew. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DocViewerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DocViewerComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.pdfSource = '';
        this.pdfBase64Source = '';
        this.pdfFileName = '';
        this.previewContentType = '';
        this.pdfIsLoading = true;
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__["pdfDefaultOptions"].assetsFolder = '/dist/assets';
        this.pdfFileName = data.pdfFileName;
        this.previewContentType = data.previewContentType;
        this.pdfSource = data.pdfSource;
        this.pdfBase64Source = data.pdfBase64Source;
        this.pdfIsLoading = !(!(this.previewContentType === 'application/pdf') && !this.isImage());
        console.log(this.pdfFileName, this.previewContentType, this.pdfSource, this.pdfIsLoading);
    }
    ngOnInit() {
    }
    onDocLoadComplete() {
        if (this.pdfIsLoading) {
            this.pdfIsLoading = false;
        }
    }
    isImage() {
        return this.previewContentType === 'image/jpeg'
            || this.previewContentType === 'image/jpg'
            || this.previewContentType === 'image/png'
            || this.previewContentType === 'image/gif'
            || this.previewContentType === 'image/tiff';
    }
    close() {
        console.log('Wotking!!!!!');
        this.dialogRef.close();
    }
}
DocViewerComponent.ɵfac = function DocViewerComponent_Factory(t) { return new (t || DocViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
DocViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DocViewerComponent, selectors: [["app-doc-viewer"]], decls: 14, vars: 6, consts: [["mat-dialog-title", "", 1, "dialog-header", "mb-0"], [2, "height", "70vh"], [1, "justify-content-center", "h-100"], [1, "flex-column", "col", "h-100", 2, "padding-left", "0", "padding-right", "0"], ["class", "d-flex h-100", 4, "ngIf"], ["class", "d-flex h-100 justify-content-center p-3", 4, "ngIf"], ["class", "d-flex h-100 justify-content-center p-5", 4, "ngIf"], ["class", "overlay text-center", 4, "ngIf"], [1, "dialog-actions", 2, "justify-content", "space-between"], ["mat-button", "", 1, "p-0", "m-0", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "href"], [1, "d-flex", "h-100"], [2, "overflow-y", "auto", "min-height", "0", "flex", "1 1 auto"], ["useBrowserLocale", "true", "delayFirstView", "1250", 3, "src", "zoom", "showBookmarkButton", "showOpenFileButton", "showSecondaryToolbarButton", "pageRendered", 4, "ngIf"], ["useBrowserLocale", "true", "delayFirstView", "1250", 3, "src", "zoom", "showBookmarkButton", "showOpenFileButton", "showSecondaryToolbarButton", "pageRendered"], [1, "d-flex", "h-100", "justify-content-center", "p-3"], [1, "img-fluid", 3, "src", "load"], [1, "d-flex", "h-100", "justify-content-center", "p-5"], [1, "overlay", "text-center"]], template: function DocViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DocViewerComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocViewerComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocViewerComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DocViewerComponent_div_8_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-dialog-actions", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocViewerComponent_Template_button_click_10_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.pdfFileName, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previewContentType === "application/pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isImage());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.previewContentType !== "application/pdf" && !ctx.isImage());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pdfIsLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx.pdfSource, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]], styles: [".overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  padding-top: 100px;\n  width: 100%;\n  z-index: 100;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  max-height: 75vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZG9jLXZpZXdlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVKIiwiZmlsZSI6ImRvYy12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbn1cclxuaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "KwYH":
/*!************************************************************!*\
  !*** ./src/app/core/data-service/result/result.service.ts ***!
  \************************************************************/
/*! exports provided: ResultService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultService", function() { return ResultService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ResultService {
    constructor(http) {
        this.http = http;
    }
    postResult(form) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/result`;
        return this.http.post(url, form);
    }
}
ResultService.ɵfac = function ResultService_Factory(t) { return new (t || ResultService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ResultService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResultService, factory: ResultService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OkuZ":
/*!***************************************************!*\
  !*** ./src/app/core/model/notice/notice.model.ts ***!
  \***************************************************/
/*! exports provided: Notice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return Notice; });
class Notice {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "P4u7":
/*!***************************************************!*\
  !*** ./src/app/core/model/course/course.model.ts ***!
  \***************************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
class Course {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-material-components/datetime-picker */ "n1FK");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _component_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/doc-viewer/doc-viewer.component */ "JGdG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");



































// Format used for the Intl format functions
const fullDateTimeOptions = {
    year: 'numeric', month: 'numeric',
    day: 'numeric', hour: 'numeric', minute: 'numeric'
}; // Can also add seconds
const CUSTOM_DATE_FORMATS = Object.assign({}, _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_NATIVE_DATE_FORMATS"], {
    parse: { dateInput: fullDateTimeOptions },
    display: { dateInput: fullDateTimeOptions }
});
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NGX_MAT_DATE_FORMATS"], useValue: CUSTOM_DATE_FORMATS }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
            _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatNativeDateModule"],
        // Material references
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MatChipsModule"],
        //Flex references
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_component_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_33__["DocViewerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatDatetimePickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatTimepickerModule"],
        _angular_material_components_datetime_picker__WEBPACK_IMPORTED_MODULE_2__["NgxMatNativeDateModule"],
        // Custom Components
        _component_doc_viewer_doc_viewer_component__WEBPACK_IMPORTED_MODULE_33__["DocViewerComponent"],
        // Material references
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltipModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_32__["MatChipsModule"],
        //Flex references
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_31__["FlexLayoutModule"]] }); })();


/***/ }),

/***/ "S6CB":
/*!*******************************************************!*\
  !*** ./src/app/core/model/reach-us/reach-us.model.ts ***!
  \*******************************************************/
/*! exports provided: ReachUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReachUs", function() { return ReachUs; });
class ReachUs {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'sharp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UOV8":
/*!***********************************************************************!*\
  !*** ./src/app/core/model/application-form/application-form.model.ts ***!
  \***********************************************************************/
/*! exports provided: ApplicationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationForm", function() { return ApplicationForm; });
class ApplicationForm {
}


/***/ }),

/***/ "XFy1":
/*!*******************************************************!*\
  !*** ./src/app/core/model/standard/standard.model.ts ***!
  \*******************************************************/
/*! exports provided: Standard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Standard", function() { return Standard; });
class Standard {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "XklU":
/*!*********************************************************************!*\
  !*** ./src/app/layout/layout-sidemenu/layout-sidemenu.component.ts ***!
  \*********************************************************************/
/*! exports provided: LayoutSidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSidemenuComponent", function() { return LayoutSidemenuComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_component_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/component/notice-board/notice-board.component */ "6zbl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/data-service */ "7hpk");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
















function LayoutSidemenuComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutSidemenuComponent_span_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutSidemenuComponent_span_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21); return !_r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "path", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "path", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_33_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LayoutSidemenuComponent_span_33_span_2_Template, 2, 0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.isMenuOpen);
} }
const _c0 = function (a0) { return { "rotated": a0 }; };
function LayoutSidemenuComponent_mat_icon_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx_r6.showSubmenu));
} }
function LayoutSidemenuComponent_div_35_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/course/", c_r18.name.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r18.name);
} }
const _c1 = function (a0) { return { "expanded": a0 }; };
function LayoutSidemenuComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LayoutSidemenuComponent_div_35_a_1_Template, 2, 2, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ctx_r7.showSubmenu));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.course);
} }
function LayoutSidemenuComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Testimonials");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LayoutSidemenuComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return { "menu-open": a0, "menu-close": a1 }; };
const _c3 = function () { return ["/"]; };
const _c4 = function () { return ["active-nav-item"]; };
const _c5 = function () { return { exact: true }; };
const _c6 = function () { return ["/about"]; };
const _c7 = function () { return ["/course"]; };
const _c8 = function () { return { exact: false }; };
const _c9 = function () { return ["/testimonials"]; };
const _c10 = function () { return ["/results"]; };
const _c11 = function () { return ["/blog"]; };
const _c12 = function () { return ["/contactus"]; };
const _c13 = function (a0) { return { "margin-left.px": a0, "transition": "300ms" }; };
class LayoutSidemenuComponent {
    constructor(breakpointObserver, courseService, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.courseService = courseService;
        this.dialog = dialog;
        this.contentMargin = 200;
        this.isExpanded = true;
        this.isMenuOpen = true;
        this.isShowing = false;
        this.showSubmenu = false;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_endpoint;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    ngOnInit() {
        this.courseService.getCourses().subscribe(res => {
            this.course = res;
        }, (error) => {
            console.log(`THis is the error: ${error}`);
        });
    }
    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        }
        else {
            this.contentMargin = 200;
        }
    }
    toggleBoard() {
        const dialogRef = this.dialog.open(src_app_shared_component_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardComponent"], {
            width: '90%',
            height: '80%'
        });
        // dialogRef.afterClosed().subscribe(result => {
        // });
    }
}
LayoutSidemenuComponent.ɵfac = function LayoutSidemenuComponent_Factory(t) { return new (t || LayoutSidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
LayoutSidemenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LayoutSidemenuComponent, selectors: [["app-layout-sidemenu"]], decls: 53, vars: 73, consts: [[1, "bgcolor-yellow-light", "bottom-shadow"], [4, "ngIf"], ["src", "./assets/logo_notext.png", 1, "logo-img"], [1, "title", "color-not-so-black"], [1, "social-icon"], ["href", "https://www.instagram.com/sharptutorials_/"], [1, "fab", "fa-instagram", "fa-md", "mr-10"], ["href", "https://www.facebook.com/632508334061501/posts/632574827388185/"], [1, "fab", "fa-facebook", "fa-md", "mr-10"], ["href", "https://www.linkedin.com/company/sharp-tutorials/"], [1, "fab", "fa-linkedin", "fa-md", "mr-10"], ["href", "https://www.youtube.com/channel/UCid9_yoxEfu02gtVXItEiYQ?app=desktop"], [1, "fab", "fa-youtube", "fa-md", "mr-10"], ["href", "https://wa.me/917021186955?text=I%27m%20Interested%20with%20Sharp%20Tutorials"], [1, "fab", "fa-whatsapp", "fa-md"], [1, "sidenav-container"], ["disableClose", "", "fixedInViewport", "false", "id", "sidenav", 1, "sidenav", "bgcolor-blue-light", 3, "mode", "opened", "ngClass"], ["drawer", ""], ["role", "main", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], [1, "fas", "fa-home", "fa-md", "m-10", "color-not-so-black"], [1, "fas", "fa-address-card", "m-10", "fa-md", "color-not-so-black"], [1, "parent", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions", "click"], ["class", "full-width", 4, "ngIf"], ["class", "menu-button", "style", "color: #b5b5b5", 3, "ngClass", 4, "ngIf"], ["class", "submenu", 3, "ngClass", 4, "ngIf"], [1, "fas", "fa-quote-right", "fa-md", "m-10", "color-not-so-black"], [1, "fas", "fa-poll", "fa-md", "m-10", "color-not-so-black"], [1, "fas", "fa-blog", "fa-md", "m-10", "color-not-so-black"], [1, "fas", "fa-address-book", "fa-md", "m-10", "color-not-so-black"], [3, "ngStyle"], ["mat-mini-fab", "", 1, "notice-button", 3, "click"], ["onclick", "this.classList.toggle('active')", 1, "plate", "plate4", 3, "click"], ["version", "1.1", "height", "100", "width", "100", "viewBox", "0 0 100 100", 1, "burger"], ["d", "M 50,35 H 30", 1, "line", "line1"], ["d", "M 50,35 H 70", 1, "line", "line2"], ["d", "M 50,50 H 30", 1, "line", "line3"], ["d", "M 50,50 H 70", 1, "line", "line4"], ["d", "M 50,65 H 30", 1, "line", "line5"], ["d", "M 50,65 H 70", 1, "line", "line6"], ["version", "1.1", "height", "100", "width", "100", "viewBox", "0 0 100 100", 1, "x"], ["d", "M 34,32 L 66,68", 1, "line"], ["d", "M 66,32 L 34,68", 1, "line"], [1, "full-width"], [1, "fas", "fa-book", "fa-md", "m-10", "color-not-so-black"], [1, "menu-button", 2, "color", "#b5b5b5", 3, "ngClass"], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", "href", "...", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-list-item", "", "href", "...", 3, "routerLink"]], template: function LayoutSidemenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LayoutSidemenuComponent_span_1_Template, 12, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LayoutSidemenuComponent_span_3_Template, 12, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Sharp Tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-sidenav-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-sidenav", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, LayoutSidemenuComponent_span_28_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, LayoutSidemenuComponent_span_31_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-list-item", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutSidemenuComponent_Template_mat_list_item_click_32_listener() { return ctx.showSubmenu = !ctx.showSubmenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, LayoutSidemenuComponent_span_33_Template, 3, 1, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, LayoutSidemenuComponent_mat_icon_34_Template, 2, 3, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, LayoutSidemenuComponent_div_35_Template, 2, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, LayoutSidemenuComponent_span_38_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, LayoutSidemenuComponent_span_41_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, LayoutSidemenuComponent_span_44_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-list-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, LayoutSidemenuComponent_span_47_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "mat-sidenav-content", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LayoutSidemenuComponent_Template_button_click_49_listener() { return ctx.toggleBoard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "assignment_late");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](52, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 37, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 39, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 43, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 45, ctx.isHandset$) === false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](47, _c2, ctx.isMenuOpen, !ctx.isMenuOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 41, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](50, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](51, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](52, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](53, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](54, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](55, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](56, _c7))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](57, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](58, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isExpanded || ctx.isShowing);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.isExpanded || ctx.isShowing) && ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowing || ctx.isExpanded && ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](59, _c9))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](60, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](61, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](62, _c10))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](63, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](64, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](65, _c11))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](66, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](67, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](68, _c12))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](69, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](70, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](71, _c13, ctx.contentMargin));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&display=swap\");\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  position: -webkit-sticky;\n  width: 100% !important;\n  top: 0;\n  z-index: 1000;\n  padding: 0;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 900;\n  line-height: 64px;\n  vertical-align: middle;\n  padding-left: 7px;\n}\n.logo-img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 40px;\n  padding-bottom: 8px;\n}\n.social-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  height: 100% !important;\n}\n.social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 100ms;\n  line-height: 64px;\n  height: 100%;\n  vertical-align: middle;\n  text-decoration: none;\n  color: #545454;\n}\n.social-icon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  display: inline-block;\n  transition: 100ms ease-out;\n  -webkit-transform: scale(1.25);\n  padding: 0 5px;\n  color: black;\n}\n.bottom-shadow[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.16), 0px 1px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 3px 0px rgba(0, 0, 0, 0.1);\n}\n.notice-button[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1;\n  bottom: 25px;\n  right: 10px;\n}\n@media only screen and (max-width: 600px) {\n  .social-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    font-size: 28px;\n    padding-left: 5px;\n  }\n\n  .logo-img[_ngcontent-%COMP%] {\n    height: 30px;\n    padding-top: 2px;\n    padding-left: 5px;\n  }\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.sidenav[_ngcontent-%COMP%] {\n  border-right: 1px solid #e8e8ed !important;\n  width: 200px;\n}\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n.active-nav-item[_ngcontent-%COMP%] {\n  padding-left: 3px;\n  border-left: 3px solid #0a4191;\n  background-color: rgba(255, 233, 0, 0.1);\n}\n.active-nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 7px !important;\n}\n.active-nav-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 233, 0, 0.1);\n}\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.menu-button[_ngcontent-%COMP%] {\n  transition: 300ms ease-in-out;\n  transform: rotate(0deg);\n}\n.menu-button.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.submenu[_ngcontent-%COMP%] {\n  display: none;\n  overflow-y: hidden;\n  transition: transform 300ms ease;\n  transform: scaleY(0);\n  transform-origin: top;\n  padding-left: 30px;\n}\n.submenu.expanded[_ngcontent-%COMP%] {\n  transition: 1s;\n  display: block;\n  transform: scaleY(1);\n}\n.mat-button[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.mat-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 25px;\n}\n@media only screen and (min-width: 768px) {\n  #sidenav.menu-close[_ngcontent-%COMP%] {\n    transition: 300ms ease-in;\n    width: 70px !important;\n  }\n\n  #sidenav.menu-open[_ngcontent-%COMP%] {\n    width: 200px !important;\n  }\n\n  .mat-button[_ngcontent-%COMP%] {\n    width: 70px;\n  }\n}\n.mat-toolbar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nsvg[_ngcontent-%COMP%] {\n  height: 40px;\n  position: absolute;\n  width: 40px;\n}\n.plate[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  padding: 16px;\n}\n.burger[_ngcontent-%COMP%] {\n  filter: url(#gooeyness);\n}\n.x[_ngcontent-%COMP%] {\n  transform: scale(0);\n  transition: transform 400ms;\n}\n.line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: black;\n  stroke-width: 6px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  transform-origin: 50%;\n  transition: stroke-dasharray 500ms 200ms, stroke-dashoffset 500ms 200ms, transform 500ms 200ms;\n}\n.x[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  stroke-width: 5.5px;\n}\n@media (max-width: 640px) {\n  .plate[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n.plate4[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%] {\n  transition: transform 400ms;\n}\n.plate4[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  transform-origin: 50%;\n  transition: transform 400ms 100ms;\n}\n.active.plate4[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  transition: transform 400ms;\n}\n.active.plate4[_ngcontent-%COMP%]   .line1[_ngcontent-%COMP%] {\n  transform: translateX(18px) translateY(-3px) rotate(-45deg) scale(0.7);\n}\n.active.plate4[_ngcontent-%COMP%]   .line2[_ngcontent-%COMP%] {\n  transform: translateX(-18px) translateY(-3px) rotate(45deg) scale(0.7);\n}\n.active.plate4[_ngcontent-%COMP%]   .line3[_ngcontent-%COMP%] {\n  transform: translateY(0px) rotate(45deg) scale(0.7);\n}\n.active.plate4[_ngcontent-%COMP%]   .line4[_ngcontent-%COMP%] {\n  transform: translateY(0px) rotate(-45deg) scale(0.7);\n}\n.active.plate4[_ngcontent-%COMP%]   .line5[_ngcontent-%COMP%] {\n  transform: translateX(18px) translateY(3px) rotate(45deg) scale(0.7);\n}\n.active.plate4[_ngcontent-%COMP%]   .line6[_ngcontent-%COMP%] {\n  transform: translateX(-18px) translateY(3px) rotate(-45deg) scale(0.7);\n}\n.active.plate4[_ngcontent-%COMP%]   .x[_ngcontent-%COMP%] {\n  transition: transform 400ms 100ms;\n  transform: scale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYXlvdXQtc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVRLHNHQUFBO0FBRlIsZ0JBQUE7QUFJQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQURGO0FBSUE7RUFDRSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQURGO0FBSUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURGO0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBRko7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHdIQUFBO0FBSEY7QUFNQTtFQUtFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQRjtBQVVBO0VBQ0U7SUFDRSxhQUFBO0VBUEY7O0VBU0E7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUFORjs7RUFTQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBTkY7QUFDRjtBQVNBLGNBQUE7QUFFQTtFQUNFLFlBQUE7QUFSRjtBQVdBO0VBQ0UsMENBQUE7RUFDQSxZQUFBO0FBUkY7QUFXQTtFQUNFLG1CQUFBO0FBUkY7QUFXQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3Q0FBQTtBQVJGO0FBU0U7RUFDRSwyQkFBQTtBQVBKO0FBV0E7RUFDRSx3Q0FBQTtBQVJGO0FBWUE7RUFDRSx5QkFBQTtBQVRGO0FBWUE7RUFDRSxXQUFBO0FBVEY7QUFZQTtFQUNFLDZCQUFBO0VBQ0EsdUJBQUE7QUFURjtBQVlBO0VBQ0UseUJBQUE7QUFURjtBQVlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFURjtBQVlBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQVRGO0FBWUE7RUFDSSxXQUFBO0FBVEo7QUFVRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBUko7QUFZQTtFQUNFO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtFQVRGOztFQVlBO0lBQ0UsdUJBQUE7RUFURjs7RUFXQTtJQUNFLFdBQUE7RUFSRjtBQUNGO0FBYUU7RUFDRSxlQUFBO0FBWEo7QUFnQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBYkY7QUFpQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFkRjtBQWdCQTtFQUNFLHVCQUFBO0FBYkY7QUFlQTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFaRjtBQWNBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhGQUFBO0FBWEY7QUFhQTtFQUNFLG1CQUFBO0FBVkY7QUFhQTtFQUNFO0lBQ0YsVUFBQTtFQVZFO0FBQ0Y7QUFhQSxzQkFBQTtBQUNBO0VBQ0UsMkJBQUE7QUFYRjtBQWFBO0VBQ0UscUJBQUE7RUFDQSxpQ0FBQTtBQVZGO0FBWUE7RUFDRSwyQkFBQTtBQVRGO0FBV0E7RUFDRSxzRUFBQTtBQVJGO0FBVUE7RUFDRSxzRUFBQTtBQVBGO0FBU0E7RUFDRSxtREFBQTtBQU5GO0FBUUE7RUFDRSxvREFBQTtBQUxGO0FBT0E7RUFDRSxvRUFBQTtBQUpGO0FBTUE7RUFDRSxzRUFBQTtBQUhGO0FBS0E7RUFDRSxpQ0FBQTtFQUNBLG1CQUFBO0FBRkYiLCJmaWxlIjoibGF5b3V0LXNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypUT09MQkFSIFNUQVJUKi9cclxuLy9AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BYnJpbCtGYXRmYWNlJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OndnaHRANzAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5OyBcclxuICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbn1cclxuXHJcbi5sb2dvLWltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTZweDtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuXHJcbiAgYSB7XHJcbiAgICB0cmFuc2l0aW9uOiAxMDBtcztcclxuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAxMDBtcyBlYXNlLW91dDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMjUpO1xyXG4gICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uYm90dG9tLXNoYWRvdyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IC0xcHggcmdiKDAgMCAwIC8gMTYlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEwJSksIDBweCAxcHggM3B4IDBweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG59XHJcblxyXG4ubm90aWNlLWJ1dHRvbiB7XHJcbiAgLy8gcG9zaXRpb246IHN0aWNreTtcclxuICAvLyB6LWluZGV4OiAxMDA7XHJcbiAgLy8gdG9wOiA4NnZoO1xyXG4gIC8vIGxlZnQ6IDE3M3ZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJvdHRvbTogMjVweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5zb2NpYWwtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgfVxyXG5cclxuICAubG9nby1pbWcge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4XHJcbiAgfVxyXG59XHJcblxyXG4vKlRPT0xCQVIgRU5EKi9cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlZCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYWN0aXZlLW5hdi1pdGVtIHtcclxuICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMwYTQxOTE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIzMywgMCwgMC4xKTtcclxuICBpIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5hY3RpdmUtbmF2LWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzMsIDAsIDAuMSk7XHJcbn0gICAgXHJcblxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9uIHtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxufVxyXG5cclxuLm1lbnUtYnV0dG9uLnJvdGF0ZWQge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5zdWJtZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3VibWVudS5leHBhbmRlZCB7XHJcbiAgdHJhbnNpdGlvbjogMXM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjc2lkZW5hdi5tZW51LWNsb3NlIHtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2UtaW47XHJcbiAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50XHJcbiAgfVxyXG5cclxuICAjc2lkZW5hdi5tZW51LW9wZW4ge1xyXG4gICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnRcclxuICB9XHJcbiAgLm1hdC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICAubWF0LWljb246aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbnN2ZyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuXHJcbi5wbGF0ZSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuLmJ1cmdlciB7XHJcbiAgZmlsdGVyOiB1cmwoI2dvb2V5bmVzcyk7XHJcbn1cclxuLngge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xyXG59XHJcbi5saW5lIHtcclxuICBmaWxsOiBub25lO1xyXG4gIHN0cm9rZTogYmxhY2s7XHJcbiAgc3Ryb2tlLXdpZHRoOiA2cHg7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xyXG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNoYXJyYXkgNTAwbXMgMjAwbXMsIHN0cm9rZS1kYXNob2Zmc2V0IDUwMG1zIDIwMG1zLCB0cmFuc2Zvcm0gNTAwbXMgMjAwbXM7XHJcbn1cclxuLnggLmxpbmUge1xyXG4gIHN0cm9rZS13aWR0aDogNS41cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xyXG4gIC5wbGF0ZSB7XHJcbnBhZGRpbmc6IDA7IFxyXG4gIH1cclxufVxyXG5cclxuLyogRGllIHZpZXJ0ZSB0ZWxsZXIgKi9cclxuLnBsYXRlNCAueCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xyXG59XHJcbi5wbGF0ZTQgLmxpbmUge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgMTAwbXM7XHJcbn1cclxuLmFjdGl2ZS5wbGF0ZTQgLmxpbmUge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcztcclxufVxyXG4uYWN0aXZlLnBsYXRlNCAubGluZTEge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxOHB4KSB0cmFuc2xhdGVZKC0zcHgpIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKC43KTtcclxufVxyXG4uYWN0aXZlLnBsYXRlNCAubGluZTIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMThweCkgdHJhbnNsYXRlWSgtM3B4KSByb3RhdGUoNDVkZWcpIHNjYWxlKC43KTtcclxufVxyXG4uYWN0aXZlLnBsYXRlNCAubGluZTMge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZykgc2NhbGUoLjcpO1xyXG59XHJcbi5hY3RpdmUucGxhdGU0IC5saW5lNCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZykgc2NhbGUoLjcpO1xyXG59XHJcbi5hY3RpdmUucGxhdGU0IC5saW5lNSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE4cHgpIHRyYW5zbGF0ZVkoM3B4KSByb3RhdGUoNDVkZWcpIHNjYWxlKC43KTtcclxufVxyXG4uYWN0aXZlLnBsYXRlNCAubGluZTYge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMThweCkgdHJhbnNsYXRlWSgzcHgpIHJvdGF0ZSgtNDVkZWcpIHNjYWxlKC43KTtcclxufVxyXG4uYWN0aXZlLnBsYXRlNCAueCB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIDEwMG1zO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _layout_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/layout-footer/layout-footer.component */ "4bPa");
/* harmony import */ var _layout_layout_sidemenu_layout_sidemenu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/layout-sidemenu/layout-sidemenu.component */ "XklU");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _shared_component_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/component/notice-board/notice-board.component */ "6zbl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");











//Custom







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_11__["LayoutComponent"],
        _layout_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_12__["LayoutFooterComponent"],
        _layout_layout_sidemenu_layout_sidemenu_component__WEBPACK_IMPORTED_MODULE_13__["LayoutSidemenuComponent"],
        _shared_component_notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_15__["NoticeBoardComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_14__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();


/***/ }),

/***/ "aaL1":
/*!********************************************************!*\
  !*** ./src/app/core/data-service/blog/blog.service.ts ***!
  \********************************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model */ "rW8v");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BlogService {
    constructor(http) {
        this.http = http;
    }
    getBlog() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/blog`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => data.map(x => new _model__WEBPACK_IMPORTED_MODULE_1__["Blog"](x))));
    }
    getBlogbyId(id) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/blog/${id}`;
        return this.http.get(url);
        //.pipe(
        //  map(data =>
        //    data.map(x => new BlogById(x))
        //  )
        //);
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dNoI":
/*!***************************************************!*\
  !*** ./src/app/core/model/blog/blogById.model.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "dbZr":
/*!***********************************************!*\
  !*** ./src/app/core/model/blog/blog.model.ts ***!
  \***********************************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
class Blog {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "jfuS":
/*!*****************************************************!*\
  !*** ./src/app/core/model/subject/subject.model.ts ***!
  \*****************************************************/
/*! exports provided: Subject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return Subject; });
class Subject {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "jgex":
/*!********************************************************************************!*\
  !*** ./src/app/core/data-service/application-form/application-form.service.ts ***!
  \********************************************************************************/
/*! exports provided: ApplicationFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationFormService", function() { return ApplicationFormService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//export class ApplicationFormService {
//  constructor(private http: HttpClient) { }
//  public postApplicationForm(appForm: ApplicationForm) {
//    const url = `${environment.api_endpoint}/application-form`;
//    return this.http.post<ApplicationForm[]>(url, appForm);
//  }
//}
class ApplicationFormService {
    constructor(http) {
        this.http = http;
    }
    postApplicationForm(appForm) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api_endpoint}/application-form`;
        return this.http.post(url, appForm);
    }
}
ApplicationFormService.ɵfac = function ApplicationFormService_Factory(t) { return new (t || ApplicationFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ApplicationFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApplicationFormService, factory: ApplicationFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rW8v":
/*!*************************************!*\
  !*** ./src/app/core/model/index.ts ***!
  \*************************************/
/*! exports provided: ApplicationForm, Course, Standard, Subject, ReachUs, Blog, Examination, PostResult, SystemNotification, AlertType, Notice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_form_application_form_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application-form/application-form.model */ "UOV8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplicationForm", function() { return _application_form_application_form_model__WEBPACK_IMPORTED_MODULE_0__["ApplicationForm"]; });

/* harmony import */ var _course_course_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./course/course.model */ "P4u7");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return _course_course_model__WEBPACK_IMPORTED_MODULE_1__["Course"]; });

/* harmony import */ var _standard_standard_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./standard/standard.model */ "XFy1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Standard", function() { return _standard_standard_model__WEBPACK_IMPORTED_MODULE_2__["Standard"]; });

/* harmony import */ var _subject_subject_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subject/subject.model */ "jfuS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subject", function() { return _subject_subject_model__WEBPACK_IMPORTED_MODULE_3__["Subject"]; });

/* harmony import */ var _reach_us_reach_us_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reach-us/reach-us.model */ "S6CB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReachUs", function() { return _reach_us_reach_us_model__WEBPACK_IMPORTED_MODULE_4__["ReachUs"]; });

/* harmony import */ var _auth_verify_otp_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/verify-otp.model */ "vSw/");
/* empty/unused harmony star reexport *//* harmony import */ var _blog_blog_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog/blog.model */ "dbZr");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return _blog_blog_model__WEBPACK_IMPORTED_MODULE_6__["Blog"]; });

/* harmony import */ var _blog_blogById_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blogById.model */ "dNoI");
/* empty/unused harmony star reexport *//* harmony import */ var _examination_examination_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examination/examination.model */ "xXFO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Examination", function() { return _examination_examination_model__WEBPACK_IMPORTED_MODULE_8__["Examination"]; });

/* harmony import */ var _result_post_result_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./result/post-result.model */ "GmQM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostResult", function() { return _result_post_result_model__WEBPACK_IMPORTED_MODULE_9__["PostResult"]; });

/* harmony import */ var _system_notification_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system-notification.model */ "zpgO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SystemNotification", function() { return _system_notification_model__WEBPACK_IMPORTED_MODULE_10__["SystemNotification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return _system_notification_model__WEBPACK_IMPORTED_MODULE_10__["AlertType"]; });

/* harmony import */ var _notice_notice_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notice/notice.model */ "OkuZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return _notice_notice_model__WEBPACK_IMPORTED_MODULE_11__["Notice"]; });















/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_sidemenu_layout_sidemenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-sidemenu/layout-sidemenu.component */ "XklU");
/* harmony import */ var _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-footer/layout-footer.component */ "4bPa");



class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 2, vars: 0, template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout-sidemenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-layout-footer");
    } }, directives: [_layout_sidemenu_layout_sidemenu_component__WEBPACK_IMPORTED_MODULE_1__["LayoutSidemenuComponent"], _layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vSw/":
/*!*****************************************************!*\
  !*** ./src/app/core/model/auth/verify-otp.model.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomeModule) }]
    },
    {
        path: 'about',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "FQ1g")).then(m => m.AboutModule) }]
    },
    {
        path: 'course',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => Promise.all(/*! import() | course-course-module */[__webpack_require__.e("default~course-course-module~results-results-module"), __webpack_require__.e("course-course-module")]).then(__webpack_require__.bind(null, /*! ./course/course.module */ "S4wv")).then(m => m.CourseModule) }]
    },
    {
        path: 'testimonials',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | testimonials-testimonials-module */ "testimonials-testimonials-module").then(__webpack_require__.bind(null, /*! ./testimonials/testimonials.module */ "Jt8I")).then(m => m.TestimonialsModule) }]
    },
    {
        path: 'results',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => Promise.all(/*! import() | results-results-module */[__webpack_require__.e("default~course-course-module~results-results-module"), __webpack_require__.e("results-results-module")]).then(__webpack_require__.bind(null, /*! ./results/results.module */ "4LYy")).then(m => m.ResultsModule) }]
    },
    {
        path: 'blog',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule) }]
    },
    {
        path: 'contactus',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        children: [{ path: '', loadChildren: () => __webpack_require__.e(/*! import() | contactus-contactus-module */ "contactus-contactus-module").then(__webpack_require__.bind(null, /*! ./contactus/contactus.module */ "7U2a")).then(m => m.ContactusModule) }]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xXFO":
/*!*************************************************************!*\
  !*** ./src/app/core/model/examination/examination.model.ts ***!
  \*************************************************************/
/*! exports provided: Examination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Examination", function() { return Examination; });
class Examination {
    constructor(item) {
        Object.assign(this, item);
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zpgO":
/*!*********************************************************!*\
  !*** ./src/app/core/model/system-notification.model.ts ***!
  \*********************************************************/
/*! exports provided: SystemNotification, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemNotification", function() { return SystemNotification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
class SystemNotification {
    constructor(init) {
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map