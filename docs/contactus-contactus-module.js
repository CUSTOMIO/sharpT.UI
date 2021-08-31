(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "7U2a":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusModule", function() { return ContactusModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactus-routing.module */ "vRFT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus.component */ "sOoW");





class ContactusModule {
}
ContactusModule.ɵfac = function ContactusModule_Factory(t) { return new (t || ContactusModule)(); };
ContactusModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactusModule });
ContactusModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactusRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactusModule, { declarations: [_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _contactus_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContactusRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "sOoW":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/model */ "rW8v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../core/data-service */ "7hpk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function ContactusComponent_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
function ContactusComponent_div_1_mat_hint_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " REACH US ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Murga Giran chsg, opposite Hotel Kalpana Palace, near Daulat Complex, Grant Road(East), Mumbai 400 008 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " +91 9167945708 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " +91 7021186955 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " info@sharptutorials.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "iframe", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-card-title", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Fill in the Form to Secure a Strong Foundation For Your Child's Career");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactusComponent_div_1_Template_form_ngSubmit_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, ContactusComponent_div_1_mat_hint_37_Template, 2, 0, "mat-hint", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-form-field", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.contactUs);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.name.touched && ctx_r1.name.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.contactUs.valid);
} }
class ContactusComponent {
    constructor(fb, reachusService) {
        this.fb = fb;
        this.reachusService = reachusService;
        this.isLoading = true;
        this.contactUs = _core_model__WEBPACK_IMPORTED_MODULE_1__["ReachUs"][''];
    }
    ngOnInit() {
        this.contactUs = this.fb.group({
            name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]
            ],
            email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
            ],
            message: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            ]
        });
        setTimeout(() => {
            this.isLoading = false;
        }, 500);
    }
    get name() {
        return this.contactUs.get('name');
    }
    onSubmit() {
        this.reachusService.postReachus(this.contactUs.value)
            .subscribe((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_data_service__WEBPACK_IMPORTED_MODULE_3__["ReachUsService"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 2, vars: 2, consts: [["mode", "indeterminate", 4, "ngIf"], [4, "ngIf"], ["mode", "indeterminate"], [1, "reachus-header"], [1, "mat-display-1", "reachus-header-text", "ml-20"], [1, "fas", "fa-user-friends", "fa-sm"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayout.sm", "row", "fxLayoutGap", "20px", 1, "contact-detail", "p-10"], ["fxFlex", "50", "fxFlex.sm", "50", "fxFlex.xs", "100", 1, "contact-element"], [1, "fas", "fa-map-signs", "fa-sm", "address", 2, "float", "left"], [1, "mat-body-2", "address"], ["fxFlex", "20", "fxFlex.sm", "25", "fxFlex.xs", "100", 1, "contact-element"], [1, "phone"], [1, "fas", "fa-phone", "fa-sm"], ["href", "tel:+919167945708", "matTooltip", "Click on me to call!", "matTooltipPosition", "before", 1, "mat-body-2"], [1, "fas", "fa-tty", "fa-sm"], ["href", "tel:+917021186955", "matTooltip", "Click on me to call!", "matTooltipPosition", "before", 1, "mat-body-2"], [1, "fas", "fa-at", "fa-envelope"], ["href", "mailto:info@sharptutorials.com", "matTooltip", "Click on me to send a mail!", "matTooltipPosition", "before", 1, "mat-body-2"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayout.sm", "column", "fxLayoutGap", "20px", 1, "pt-50", "contact-div", "mb-100", "pl-10", "pr-10"], ["fxFlex", "48", "fxFlex.xs", "100", "fxFlex.sm", "100", 1, "map", "ml-10", "mr-10"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.269539453101!2d72.81940221517473!3d18.963699960420048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce135bfaebaf%3A0x7797e4b4f588d0d3!2sMurga%20Giran%20Co.%20Op.%20Society%2C%20Bapty%20Rd%2C%20Navjeevan%20Society%2C%20Kamathipura%2C%20Mumbai%2C%20Maharashtra%20400008!5e0!3m2!1sen!2sin!4v1621401532859!5m2!1sen!2sin", "allowfullscreen", "", "loading", "lazy"], ["fxFlex", "48", "fxFlex.xs", "100", "fxFlex.sm", "100", "align", "center", 1, "contact-form", "flex-child", "pl-10", "pr-10"], [1, "mat-headline"], [1, "p-20"], [3, "formGroup", "ngSubmit"], ["appearance", "standard", 2, "width", "100% !important"], ["matInput", "", "formControlName", "name"], ["style", "color: red", 4, "ngIf"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "message"], ["type", "submit", "mat-raised-button", "", "color", "accent", 3, "disabled"], [2, "color", "red"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ContactusComponent_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContactusComponent_div_1_Template, 48, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]], styles: [".reachus-header[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 100px;\n  border-bottom: 1px solid #fca311;\n}\n.reachus-header[_ngcontent-%COMP%]   .reachus-header-text[_ngcontent-%COMP%] {\n  line-height: 100px;\n}\n.contact-element[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n.contact-element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.map[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 95%;\n  height: 377.38px;\n  border: 0;\n}\n.address[_ngcontent-%COMP%] {\n  \n  line-height: 60px;\n  vertical-align: middle;\n}\n.phone[_ngcontent-%COMP%] {\n  height: 30px;\n}\n@media only screen and (max-width: 600px) {\n  .map-div[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n\n  .contact-form[_ngcontent-%COMP%] {\n    border-radius: 0px;\n    box-shadow: none;\n    margin-top: 50px;\n  }\n\n  .reachus-header-text[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3R1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjtBQUdBO0VBQ0UsaUJBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtBQUFKO0FBTUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSEY7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUpGO0FBT0E7RUFDRSxZQUFBO0FBSkY7QUFRQTtFQUNFO0lBQ0UsY0FBQTtFQUxGOztFQVFBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBTEY7O0VBUUE7SUFDRSxnQkFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoiY29udGFjdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlYWNodXMtaGVhZGVyIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZjYTMxMTtcclxuXHJcbiAgLnJlYWNodXMtaGVhZGVyLXRleHQge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhY3QtZWxlbWVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ubWFwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hcCBpZnJhbWUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDM3Ny4zOHB4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuXHJcbi5hZGRyZXNzIHtcclxuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5waG9uZSB7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5tYXAtZGl2IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5yZWFjaHVzLWhlYWRlci10ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vRFT":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactusRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusRoutingModule", function() { return ContactusRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contactus_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.component */ "sOoW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Views



const routes = [
    {
        path: '',
        component: _contactus_component__WEBPACK_IMPORTED_MODULE_1__["ContactusComponent"],
    }
];
class ContactusRoutingModule {
}
ContactusRoutingModule.ɵfac = function ContactusRoutingModule_Factory(t) { return new (t || ContactusRoutingModule)(); };
ContactusRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactusRoutingModule });
ContactusRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactusRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routedComponents = [
    _contactus_component__WEBPACK_IMPORTED_MODULE_1__["ContactusComponent"],
];


/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module.js.map