(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testimonials-testimonials-module"],{

/***/ "3dMZ":
/*!*************************************************************!*\
  !*** ./src/app/testimonials/testimonials-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TestimonialsRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsRoutingModule", function() { return TestimonialsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _testimonials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testimonials.component */ "czZ8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Views



const routes = [
    {
        path: '',
        component: _testimonials_component__WEBPACK_IMPORTED_MODULE_1__["TestimonialsComponent"],
    }
];
class TestimonialsRoutingModule {
}
TestimonialsRoutingModule.ɵfac = function TestimonialsRoutingModule_Factory(t) { return new (t || TestimonialsRoutingModule)(); };
TestimonialsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TestimonialsRoutingModule });
TestimonialsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TestimonialsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _testimonials_component__WEBPACK_IMPORTED_MODULE_1__["TestimonialsComponent"],
];


/***/ }),

/***/ "Jt8I":
/*!*****************************************************!*\
  !*** ./src/app/testimonials/testimonials.module.ts ***!
  \*****************************************************/
/*! exports provided: TestimonialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsModule", function() { return TestimonialsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _testimonials_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testimonials-routing.module */ "3dMZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _testimonials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonials.component */ "czZ8");





class TestimonialsModule {
}
TestimonialsModule.ɵfac = function TestimonialsModule_Factory(t) { return new (t || TestimonialsModule)(); };
TestimonialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TestimonialsModule });
TestimonialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _testimonials_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestimonialsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TestimonialsModule, { declarations: [_testimonials_component__WEBPACK_IMPORTED_MODULE_4__["TestimonialsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _testimonials_routing_module__WEBPACK_IMPORTED_MODULE_2__["TestimonialsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "czZ8":
/*!********************************************************!*\
  !*** ./src/app/testimonials/testimonials.component.ts ***!
  \********************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





function TestimonialsComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
function TestimonialsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " OUR HAPPY STUDENTS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " REVIEWS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in scelerisque tortor. Nunc dictum nulla sit amet cursus molestie. Donec lacinia vehicula nunc eu tincidunt. Pellentesque scelerisque augue nec magna laoreet molestie. Cras eu risus hendrerit, semper eros non, hendrerit magna. Proin consequat, dui quis consectetur sollicitudin, erat sem molestie dolor, posuere aliquet metus ipsum fermentum orci. Morbi sit amet purus fermentum risus viverra accumsan vitae sit amet magna. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in scelerisque tortor. Nunc dictum nulla sit amet cursus molestie. Donec lacinia vehicula nunc eu tincidunt. Pellentesque scelerisque augue nec magna laoreet molestie. Cras eu risus hendrerit, semper eros non, hendrerit magna. Proin consequat, dui quis consectetur sollicitudin, erat sem molestie dolor, posuere aliquet metus ipsum fermentum orci. Morbi sit amet purus fermentum risus viverra accumsan vitae sit amet magna. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in scelerisque tortor. Nunc dictum nulla sit amet cursus molestie. Donec lacinia vehicula nunc eu tincidunt. Pellentesque scelerisque augue nec magna laoreet molestie. Cras eu risus hendrerit, semper eros non, hendrerit magna. Proin consequat, dui quis consectetur sollicitudin, erat sem molestie dolor, posuere aliquet metus ipsum fermentum orci. Morbi sit amet purus fermentum risus viverra accumsan vitae sit amet magna. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-card-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in scelerisque tortor. Nunc dictum nulla sit amet cursus molestie. Donec lacinia vehicula nunc eu tincidunt. Pellentesque scelerisque augue nec magna laoreet molestie. Cras eu risus hendrerit, semper eros non, hendrerit magna. Proin consequat, dui quis consectetur sollicitudin, erat sem molestie dolor, posuere aliquet metus ipsum fermentum orci. Morbi sit amet purus fermentum risus viverra accumsan vitae sit amet magna. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TestimonialsComponent {
    constructor() {
        this.isLoading = true;
    }
    ngOnInit() {
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
}
TestimonialsComponent.ɵfac = function TestimonialsComponent_Factory(t) { return new (t || TestimonialsComponent)(); };
TestimonialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestimonialsComponent, selectors: [["app-testimonials"]], decls: 2, vars: 2, consts: [["mode", "indeterminate", 4, "ngIf"], ["fxLayout", "row", "fxLayout.sm", "column", "class", "pb-40", "fxLayout.xs", "column", 4, "ngIf"], ["mode", "indeterminate"], ["fxLayout", "row", "fxLayout.sm", "column", "fxLayout.xs", "column", 1, "pb-40"], ["fxFlex", "45", "fxFlex.sm", "100", "fxFlex.xs", "100", "align", "center", 1, "div-one"], ["src", "./assets/testimonial.png", 1, "img-div-one"], [1, "mat-display-3"], ["fxFlex", "55", "fxFlex.sm", "100", "fxFlex.xs", "100", "align", "center", 1, "div-two"], ["align", "center", 1, "mat-display-2", "div-two-text"], [1, "fas", "fa-comment-dots", "m-10", "fa-sm"], [1, "mb-35"], ["mat-card-avatar", "", 1, "header-image"], [1, "p-10", 2, "border-top", "0.5px solid #5c5c5c"]], template: function TestimonialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestimonialsComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestimonialsComponent_div_1_Template, 49, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_2__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".div-one[_ngcontent-%COMP%] {\n  width: 30%;\n  margin-left: 1%;\n  position: fixed;\n  top: 50%;\n  margin-top: -150px;\n}\n.div-one[_ngcontent-%COMP%]   .img-div-one[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  text-align: left;\n}\n.mat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: left;\n}\n@media only screen and (max-width: 960px) {\n  .div-one[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.div-two[_ngcontent-%COMP%] {\n  padding: 2%;\n  margin-left: 40%;\n}\n.div-two[_ngcontent-%COMP%]   .header-image[_ngcontent-%COMP%] {\n  background-image: url('dp.jpg');\n  background-size: cover;\n}\n@media only screen and (max-width: 960px) {\n  .div-two[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRlc3RpbW9uaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7QUFHQTtFQUNFO0lBQ0UsYUFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSwrQkFBQTtFQUNBLHNCQUFBO0FBREo7QUFLQTtFQUNFO0lBQ0UsY0FBQTtFQUZGO0FBQ0YiLCJmaWxlIjoidGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1vbmUge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgLmltZy1kaXYtb25lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLmRpdi1vbmUge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG4gIH1cclxufVxyXG5cclxuLmRpdi10d28ge1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcblxyXG4gIC5oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvZHAuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5kaXYtdHdvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=testimonials-testimonials-module.js.map