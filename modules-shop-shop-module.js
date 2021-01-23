(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-shop-shop-module"],{

/***/ "+Hkd":
/*!*****************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/widgets/widget-filters/widget-filters.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WidgetFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetFiltersComponent", function() { return WidgetFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../filters/filter-handlers */ "dFvW");
/* harmony import */ var _services_page_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/page-shop.service */ "4g39");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collapse_directives_collapse_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../collapse/directives/collapse-item.directive */ "enV0");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _collapse_directives_collapse_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../collapse/directives/collapse-content.directive */ "Iowo");
/* harmony import */ var _filters_filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../filters/filter-category/filter-category.component */ "vwn3");
/* harmony import */ var _filters_filter_vehicle_filter_vehicle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../filters/filter-vehicle/filter-vehicle.component */ "k+P5");
/* harmony import */ var _filters_filter_range_filter_range_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../filters/filter-range/filter-range.component */ "kN33");
/* harmony import */ var _filters_filter_check_filter_check_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../filters/filter-check/filter-check.component */ "D53K");
/* harmony import */ var _filters_filter_radio_filter_radio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../filters/filter-radio/filter-radio.component */ "vQrs");
/* harmony import */ var _filters_filter_rating_filter_rating_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../filters/filter-rating/filter-rating.component */ "ktfE");
/* harmony import */ var _filters_filter_color_filter_color_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../filters/filter-color/filter-color.component */ "IEcU");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















function WidgetFiltersComponent_div_5_app_filter_category_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-category", 15);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1);
} }
function WidgetFiltersComponent_div_5_app_filter_vehicle_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-vehicle", 16);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1)("formControlName", filter_r1.slug);
} }
function WidgetFiltersComponent_div_5_app_filter_range_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-range", 16);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1)("formControlName", filter_r1.slug);
} }
function WidgetFiltersComponent_div_5_app_filter_check_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-check", 16);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1)("formControlName", filter_r1.slug);
} }
function WidgetFiltersComponent_div_5_app_filter_radio_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-radio", 16);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1)("formControlName", filter_r1.slug);
} }
function WidgetFiltersComponent_div_5_app_filter_rating_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-rating", 16);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1)("formControlName", filter_r1.slug);
} }
function WidgetFiltersComponent_div_5_app_filter_color_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-filter-color", 16);
} if (rf & 2) {
    const filter_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", filter_r1)("formControlName", filter_r1.slug);
} }
function WidgetFiltersComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetFiltersComponent_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetFiltersComponent_div_5_app_filter_category_9_Template, 1, 1, "app-filter-category", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WidgetFiltersComponent_div_5_app_filter_vehicle_10_Template, 1, 2, "app-filter-vehicle", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WidgetFiltersComponent_div_5_app_filter_range_11_Template, 1, 2, "app-filter-range", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WidgetFiltersComponent_div_5_app_filter_check_12_Template, 1, 2, "app-filter-check", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WidgetFiltersComponent_div_5_app_filter_radio_13_Template, 1, 2, "app-filter-radio", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WidgetFiltersComponent_div_5_app_filter_rating_14_Template, 1, 2, "app-filter-rating", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WidgetFiltersComponent_div_5_app_filter_color_15_Template, 1, 2, "app-filter-color", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", filter_r1.type === "color");
} }
class WidgetFiltersComponent {
    constructor(page, fb) {
        this.page = page;
        this.fb = fb;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.filters = [];
        this.classWidget = true;
        this.classWidgetFilters = true;
    }
    get classWidgetFiltersOffcanvasAlways() {
        return this.offcanvasSidebar === 'always';
    }
    get classWidgetFiltersOffcanvasMobile() {
        return this.offcanvasSidebar === 'mobile';
    }
    ngOnInit() {
        this.page.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(x => x.filters), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(filters => {
            this.filters = filters;
            const filtersWithHandlers = this.page.filters
                .map(filter => ({ filter, handler: _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_3__["filterHandlers"].find(x => x.type === filter.type) }))
                .filter(x => x.handler);
            const fields = {};
            filtersWithHandlers.forEach(({ filter, handler }) => {
                fields[filter.slug] = this.fb.control(filter.value);
                fields[filter.slug].valueChanges.subscribe(value => {
                    this.page.setFilterValue(filter.slug, handler.serialize(value));
                });
            });
            this.form = this.fb.group(fields);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    trackBySlug(index, filter) {
        return filter.slug;
    }
}
WidgetFiltersComponent.ɵfac = function WidgetFiltersComponent_Factory(t) { return new (t || WidgetFiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_shop_service__WEBPACK_IMPORTED_MODULE_4__["PageShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
WidgetFiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetFiltersComponent, selectors: [["app-widget-filters"]], hostVars: 8, hostBindings: function WidgetFiltersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("widget", ctx.classWidget)("widget-filters", ctx.classWidgetFilters)("widget-filters--offcanvas--always", ctx.classWidgetFiltersOffcanvasAlways)("widget-filters--offcanvas--mobile", ctx.classWidgetFiltersOffcanvasMobile);
    } }, inputs: { offcanvasSidebar: "offcanvasSidebar" }, decls: 10, vars: 9, consts: [[1, "widget__header", "widget-filters__header"], [1, "widget-filters__list", 3, "formGroup"], ["class", "widget-filters__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "widget-filters__actions", "d-flex"], [1, "btn", "btn-secondary", "btn-sm"], [1, "widget-filters__item"], ["appCollapseItem", "filter--opened", 1, "filter", "filter--opened"], ["collapseItem", "appCollapseItem"], ["type", "button", 1, "filter__title", 3, "click"], [1, "filter__arrow"], ["icon", "arrow-rounded-down-12x7"], ["appCollapseContent", "", 1, "filter__body"], [1, "filter__container"], [3, "options", 4, "ngIf"], [3, "options", "formControlName", 4, "ngIf"], [3, "options"], [3, "options", "formControlName"]], template: function WidgetFiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WidgetFiltersComponent_div_5_Template, 16, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "HEADER_FILTERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters)("ngForTrackBy", ctx.trackBySlug);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "BUTTON_RESET"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _collapse_directives_collapse_item_directive__WEBPACK_IMPORTED_MODULE_7__["CollapseItemDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _collapse_directives_collapse_content_directive__WEBPACK_IMPORTED_MODULE_9__["CollapseContentDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _filters_filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_10__["FilterCategoryComponent"], _filters_filter_vehicle_filter_vehicle_component__WEBPACK_IMPORTED_MODULE_11__["FilterVehicleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _filters_filter_range_filter_range_component__WEBPACK_IMPORTED_MODULE_12__["FilterRangeComponent"], _filters_filter_check_filter_check_component__WEBPACK_IMPORTED_MODULE_13__["FilterCheckComponent"], _filters_filter_radio_filter_radio_component__WEBPACK_IMPORTED_MODULE_14__["FilterRadioComponent"], _filters_filter_rating_filter_rating_component__WEBPACK_IMPORTED_MODULE_15__["FilterRatingComponent"], _filters_filter_color_filter_color_component__WEBPACK_IMPORTED_MODULE_16__["FilterColorComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtZmlsdGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetFiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-filters',
                templateUrl: './widget-filters.component.html',
                styleUrls: ['./widget-filters.component.scss'],
            }]
    }], function () { return [{ type: _services_page_shop_service__WEBPACK_IMPORTED_MODULE_4__["PageShopService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, { offcanvasSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget']
        }], classWidgetFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget-filters']
        }], classWidgetFiltersOffcanvasAlways: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget-filters--offcanvas--always']
        }], classWidgetFiltersOffcanvasMobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget-filters--offcanvas--mobile']
        }] }); })();


/***/ }),

/***/ "/Zgx":
/*!*******************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/widgets/widget-products/widget-products.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: WidgetProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetProductsComponent", function() { return WidgetProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function WidgetProductsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.widgetTitle);
} }
function WidgetProductsComponent_div_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, product_r2.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, product_r2.compareAtPrice));
} }
function WidgetProductsComponent_div_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, product_r2.price));
} }
function WidgetProductsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WidgetProductsComponent_div_2_ng_container_9_Template, 7, 6, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WidgetProductsComponent_div_2_ng_container_10_Template, 4, 3, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.product(product_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r2.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.product(product_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.compareAtPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !product_r2.compareAtPrice);
} }
class WidgetProductsComponent {
    constructor(url) {
        this.url = url;
        this.products = [];
        this.classCard = true;
        this.classWidget = true;
        this.classWidgetProducts = true;
    }
}
WidgetProductsComponent.ɵfac = function WidgetProductsComponent_Factory(t) { return new (t || WidgetProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"])); };
WidgetProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetProductsComponent, selectors: [["app-widget-products"]], hostVars: 6, hostBindings: function WidgetProductsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("card", ctx.classCard)("widget", ctx.classWidget)("widget-products", ctx.classWidgetProducts);
    } }, inputs: { widgetTitle: "widgetTitle", products: "products" }, decls: 3, vars: 2, consts: [["class", "widget__header", 4, "ngIf"], [1, "widget-products__list"], ["class", "widget-products__item", 4, "ngFor", "ngForOf"], [1, "widget__header"], [1, "widget-products__item"], [1, "widget-products__image"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "widget-products__info"], [1, "widget-products__name"], [1, "widget-products__prices"], [4, "ngIf"], [1, "widget-products__price", "widget-products__price--new"], [1, "widget-products__price", "widget-products__price--old"], [1, "widget-products__price", "widget-products__price--current"]], template: function WidgetProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WidgetProductsComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetProductsComponent_div_2_Template, 11, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.widgetTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-products',
                templateUrl: './widget-products.component.html',
                styleUrls: ['./widget-products.component.scss'],
            }]
    }], function () { return [{ type: _services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"] }]; }, { widgetTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.card']
        }], classWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget']
        }], classWidgetProducts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget-products']
        }] }); })();


/***/ }),

/***/ "1MAT":
/*!***************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/guards/checkout.guard.ts ***!
  \***************************************************************************/
/*! exports provided: CheckoutGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutGuard", function() { return CheckoutGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/cart.service */ "S0zV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CheckoutGuard {
    constructor(cart, router) {
        this.cart = cart;
        this.router = router;
    }
    canActivate(next, state) {
        return this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(quantity => {
            if (quantity) {
                return true;
            }
            this.router.navigateByUrl('/shop/cart').then();
            return false;
        }));
    }
}
CheckoutGuard.ɵfac = function CheckoutGuard_Factory(t) { return new (t || CheckoutGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CheckoutGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckoutGuard, factory: CheckoutGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "1aig":
/*!****************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/product-tabs/product-tabs.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProductTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabsComponent", function() { return ProductTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-tab/product-tab.component */ "4KRK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProductTabsComponent_li_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r1.counter);
} }
function ProductTabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductTabsComponent_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const tab_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onTabClick($event, tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductTabsComponent_li_1_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product-tabs__item--active", ctx_r0.activeTab === tab_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.getTabUrl(tab_r1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r1.showCounter);
} }
const _c0 = ["*"];
class ProductTabsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.classProductTabs = true;
    }
    get classProductTabsLayoutFull() {
        return this.layout === 'full';
    }
    get classProductTabsLayoutSidebar() {
        return this.layout === 'sidebar';
    }
    ngAfterContentInit() {
        this.route.fragment.subscribe(fragment => {
            const activeTab = this.tabs.find(x => x.id === fragment) || this.tabs.first;
            this.setActiveTab(activeTab);
        });
    }
    setActiveTab(tab) {
        this.activeTab = tab;
        this.tabs.forEach(x => x.isActive = x === tab);
    }
    onTabClick(event, tab) {
        event.preventDefault();
        this.setActiveTab(tab);
    }
    getTabUrl(tab) {
        return this.router.createUrlTree([], { relativeTo: this.route, fragment: tab.id }).toString();
    }
}
ProductTabsComponent.ɵfac = function ProductTabsComponent_Factory(t) { return new (t || ProductTabsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductTabsComponent, selectors: [["app-product-tabs"]], contentQueries: function ProductTabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_1__["ProductTabComponent"], false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, hostVars: 6, hostBindings: function ProductTabsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product-tabs", ctx.classProductTabs)("product-tabs--layout--full", ctx.classProductTabsLayoutFull)("product-tabs--layout--sidebar", ctx.classProductTabsLayoutSidebar);
    } }, inputs: { layout: "layout" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "product-tabs__list"], ["class", "product-tabs__item", 3, "product-tabs__item--active", 4, "ngFor", "ngForOf"], [1, "product-tabs__content"], [1, "product-tabs__item"], [3, "href", "click"], ["class", "product-tabs__item-counter", 4, "ngIf"], [1, "product-tabs__item-counter"]], template: function ProductTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductTabsComponent_li_1_Template, 4, 5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-tabs',
                templateUrl: './product-tabs.component.html',
                styleUrls: ['./product-tabs.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_1__["ProductTabComponent"]]
        }], classProductTabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.product-tabs']
        }], classProductTabsLayoutFull: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.product-tabs--layout--full']
        }], classProductTabsLayoutSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.product-tabs--layout--sidebar']
        }] }); })();


/***/ }),

/***/ "21yF":
/*!***************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-vehicle/filter-vehicle.handler.ts ***!
  \***************************************************************************************************/
/*! exports provided: FilterVehicleHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterVehicleHandler", function() { return FilterVehicleHandler; });
/* harmony import */ var _filter_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.handler */ "ty/I");

class FilterVehicleHandler extends _filter_handler__WEBPACK_IMPORTED_MODULE_0__["FilterHandler"] {
    constructor() {
        super(...arguments);
        this.type = 'vehicle';
    }
    serialize(value) {
        return value ? value.toString() : null;
    }
    deserialize(value) {
        return value ? parseFloat(value) : null;
    }
    isDefaultValue(filter, value) {
        return value === null;
    }
    activeFilters(filter) {
        return filter.value ? [{ id: filter.slug, type: 'vehicle', original: filter }] : [];
    }
    getResetValue(activeFilters) {
        return null;
    }
}


/***/ }),

/***/ "2aQO":
/*!****************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/resolvers/root-categories.resolver.ts ***!
  \****************************************************************************************/
/*! exports provided: RootCategoriesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootCategoriesResolver", function() { return RootCategoriesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/base */ "+mav");



class RootCategoriesResolver {
    constructor(shop) {
        this.shop = shop;
    }
    resolve(route, state) {
        return this.shop.getCategories({ depth: 1 });
    }
}
RootCategoriesResolver.ɵfac = function RootCategoriesResolver_Factory(t) { return new (t || RootCategoriesResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_base__WEBPACK_IMPORTED_MODULE_1__["ShopApi"])); };
RootCategoriesResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootCategoriesResolver, factory: RootCategoriesResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootCategoriesResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_1__["ShopApi"] }]; }, null); })();


/***/ }),

/***/ "4KRK":
/*!**************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/product-tab/product-tab.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTabComponent", function() { return ProductTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
let uniqueId = 0;
class ProductTabComponent {
    constructor() {
        this.id = `product-tab-${++uniqueId}`;
        this.label = '';
        this.counter = 0;
        this.showCounter = false;
        this.isActive = false;
        this.classProductTabsPane = true;
    }
    get classProductTabsPaneActive() { return this.isActive; }
}
ProductTabComponent.ɵfac = function ProductTabComponent_Factory(t) { return new (t || ProductTabComponent)(); };
ProductTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductTabComponent, selectors: [["app-product-tab"]], hostVars: 5, hostBindings: function ProductTabComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product-tabs__pane", ctx.classProductTabsPane)("product-tabs__pane--active", ctx.classProductTabsPaneActive);
    } }, inputs: { id: "id", label: "label", counter: "counter", showCounter: "showCounter", isActive: "isActive" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ProductTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXRhYi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-tab',
                templateUrl: './product-tab.component.html',
                styleUrls: ['./product-tab.component.scss'],
            }]
    }], function () { return []; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], counter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showCounter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classProductTabsPane: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.product-tabs__pane']
        }], classProductTabsPaneActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.product-tabs__pane--active']
        }] }); })();


/***/ }),

/***/ "4g39":
/*!********************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/services/page-shop.service.ts ***!
  \********************************************************************************/
/*! exports provided: PageShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageShopService", function() { return PageShopService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/filter-handlers */ "dFvW");




class PageShopService {
    constructor() {
        this.listSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.optionsState = {};
        this.removedFiltersState = [];
        /**
         * All active filters.
         */
        this.activeFiltersSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        /**
         * Active filters except removed ones.
         */
        this.currentFiltersSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.isLoading = false;
        this.optionsChange$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeFilters$ = this.activeFiltersSubject$.asObservable();
        this.currentFilters$ = this.currentFiltersSubject$.asObservable();
        this.list$ = this.listSubject$.asObservable();
        this.defaultOptions = {
            page: 1,
            limit: 16,
            sort: 'default',
            filters: {},
        };
    }
    get options() {
        return this.optionsState;
    }
    get activeFilters() {
        return this.activeFiltersSubject$.value;
    }
    // getters for list
    get items() { return this.listState.items; }
    get page() { return this.listState.page; }
    get limit() { return this.listState.limit; }
    get sort() { return this.listState.sort; }
    get total() { return this.listState.total; }
    get pages() { return this.listState.pages; }
    get from() { return this.listState.from; }
    get to() { return this.listState.to; }
    get filters() { return this.listState.filters; }
    setList(list) {
        this.listState = list;
        this.listSubject$.next(this.listState);
        const filtersWithHandlers = this.listState.filters
            .map(filter => ({ filter, handler: _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_2__["filterHandlers"].find(x => x.type === filter.type) }))
            .filter(x => x.handler);
        const activeFilters = filtersWithHandlers.reduce((acc, { filter, handler }) => {
            return [...acc, ...handler.activeFilters(filter)];
        }, []);
        this.removedFiltersState = [];
        this.activeFiltersSubject$.next(activeFilters);
        this.currentFiltersSubject$.next(activeFilters);
        const filters = {};
        filtersWithHandlers.forEach(({ filter, handler }) => {
            filters[filter.slug] = handler.serialize(filter.value);
        });
        this.optionsState = {
            page: list.page,
            limit: list.limit,
            sort: list.sort,
            filters,
        };
    }
    setOptionValue(optionSlug, optionValue) {
        this.setOptions(Object.assign(Object.assign({}, this.optionsState), { page: 1, [optionSlug]: optionValue }));
    }
    setFilterValue(filterSlug, filterValue) {
        this.setOptions(Object.assign(Object.assign({}, this.optionsState), { page: 1, filters: Object.assign(Object.assign({}, this.options.filters), { [filterSlug]: filterValue }) }));
    }
    resetFilter(activeFilter) {
        const handler = _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_2__["filterHandlers"].find(x => x.type === activeFilter.type);
        if (!handler) {
            return;
        }
        const removedFilters = [...this.removedFiltersState, activeFilter];
        // All removed filters with the same slug.
        const all = removedFilters.filter(x => x.original.slug === activeFilter.original.slug);
        this.setFilterValue(activeFilter.original.slug, handler.getResetValue(all));
        this.setRemovedFilters(removedFilters);
    }
    resetAllFilters() {
        this.setOptions(Object.assign(Object.assign({}, this.optionsState), { page: 1, filters: {} }));
        this.setRemovedFilters(this.activeFilters);
    }
    setOptions(options) {
        this.optionsState = options;
        this.optionsChange$.emit(options);
    }
    setRemovedFilters(removedFilters) {
        this.removedFiltersState = removedFilters;
        this.currentFiltersSubject$.next(this.activeFilters.filter(x => removedFilters.indexOf(x) === -1));
    }
}
PageShopService.ɵfac = function PageShopService_Factory(t) { return new (t || PageShopService)(); };
PageShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PageShopService, factory: PageShopService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7j7p":
/*!*****************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-cart/page-cart.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCartComponent", function() { return PageCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/cart.service */ "S0zV");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/block-header/block-header.component */ "V3dM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_directives_remove_from_cart_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/remove-from-cart.directive */ "FKxi");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/input-number/input-number.component */ "/1qf");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");

















const _c0 = function (a0, a1) { return { label: a0, url: a1 }; };
const _c1 = function (a0, a1) { return [a0, a1]; };
function PageCartComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "LINK_HOME"), ctx_r0.url.home()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "LINK_CART"), ctx_r0.url.cart())));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "HEADER_SHOPPING_CART_EMPTY_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "HEADER_SHOPPING_CART_EMPTY_SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "BUTTON_GO_TO_HOMEPAGE"));
} }
function PageCartComponent_ng_container_1_tr_29_ul_9_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", option_r10.name, ": ", option_r10.value, "");
} }
function PageCartComponent_ng_container_1_tr_29_ul_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCartComponent_ng_container_1_tr_29_ul_9_li_1_Template, 2, 2, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r5.options);
} }
function PageCartComponent_ng_container_1_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PageCartComponent_ng_container_1_tr_29_ul_9_Template, 2, 1, "ul", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-input-number", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCartComponent_ng_container_1_tr_29_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r5 = ctx.$implicit; const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r7.remove(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.url.product(item_r5.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.url.product(item_r5.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r5.options.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, "TABLE_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, item_r5.product.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "TABLE_QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.quantityControls[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, "TABLE_TOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 21, item_r5.product.price * item_r5.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", _r7.inProgress);
} }
function PageCartComponent_ng_container_1_thead_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "TABLE_SUBTOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, ctx_r3.cart.subtotal$)));
} }
function PageCartComponent_ng_container_1_tbody_58_tr_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCartComponent_ng_container_1_tbody_58_tr_1_div_7_Template_a_click_1_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "LINK_CALCULATE_SHIPPING"));
} }
function PageCartComponent_ng_container_1_tbody_58_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PageCartComponent_ng_container_1_tbody_58_tr_1_div_7_Template, 4, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "TABLE_TOTAL_" + total_r15.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, total_r15.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", total_r15.type === "shipping");
} }
function PageCartComponent_ng_container_1_tbody_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCartComponent_ng_container_1_tbody_58_tr_1_Template, 8, 7, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.cart.totals$));
} }
function PageCartComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PageCartComponent_ng_container_1_tr_29_Template, 24, 23, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tfoot", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCartComponent_ng_container_1_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.update(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, PageCartComponent_ng_container_1_thead_56_Template, 9, 8, "thead", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, PageCartComponent_ng_container_1_tbody_58_Template, 3, 3, "tbody", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 22, "HEADER_SHOPPING_CART"))("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](66, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](60, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 24, "LINK_HOME"), ctx_r1.url.home()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](63, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 26, "LINK_CART"), ctx_r1.url.cart())));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 28, "TABLE_IMAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 30, "TABLE_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 32, "TABLE_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 34, "TABLE_QUANTITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 36, "TABLE_TOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cart.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 38, "INPUT_COUPON_CODE_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 40, "INPUT_COUPON_CODE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 42, "BUTTON_APPLY_COUPON"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", ctx_r1.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.needUpdate());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 44, "BUTTON_UPDATE_CART"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 46, "HEADER_CART_TOTALS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 48, ctx_r1.cart.totals$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 50, ctx_r1.cart.totals$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 52, "TABLE_TOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 54, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 56, ctx_r1.cart.total$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.checkout());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 58, "BUTTON_PROCEED_TO_CHECKOUT"), " ");
} }
class PageCartComponent {
    constructor(cart, url) {
        this.cart = cart;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.items = [];
        this.quantityControls = [];
        this.updating = false;
    }
    ngOnInit() {
        this.cart.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(items => {
            this.items = items;
            this.quantityControls = items.map(item => new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](item.quantity));
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    update() {
        const entries = [];
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const quantityControl = this.quantityControls[i];
            if (item.quantity !== quantityControl.value) {
                entries.push({
                    item,
                    quantity: quantityControl.value,
                });
            }
        }
        if (entries.length <= 0) {
            return;
        }
        this.updating = true;
        this.cart.update(entries).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe({
            complete: () => this.updating = false,
        });
    }
    needUpdate() {
        let needUpdate = false;
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            const quantityControl = this.quantityControls[i];
            if (!quantityControl.valid) {
                return false;
            }
            if (quantityControl.value !== item.quantity) {
                needUpdate = true;
            }
        }
        return needUpdate;
    }
}
PageCartComponent.ɵfac = function PageCartComponent_Factory(t) { return new (t || PageCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
PageCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageCartComponent, selectors: [["app-page-cart"]], decls: 3, vars: 2, consts: [[4, "ngIf"], ["layout", "before-footer"], [3, "breadcrumb"], [1, "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__title"], [1, "block-empty__message", 3, "innerHTML"], [1, "block-empty__action"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [3, "pageTitle", "breadcrumb"], [1, "block"], [1, "cart"], [1, "cart__table", "cart-table"], [1, "cart-table__table"], [1, "cart-table__head"], [1, "cart-table__row"], [1, "cart-table__column", "cart-table__column--image"], [1, "cart-table__column", "cart-table__column--product"], [1, "cart-table__column", "cart-table__column--price"], [1, "cart-table__column", "cart-table__column--quantity"], [1, "cart-table__column", "cart-table__column--total"], [1, "cart-table__column", "cart-table__column--remove"], [1, "cart-table__body"], ["class", "cart-table__row", "appRemoveFromCart", "", 4, "ngFor", "ngForOf"], [1, "cart-table__foot"], ["colspan", "6"], [1, "cart-table__actions"], [1, "cart-table__coupon-form", "form-row"], [1, "form-group", "mb-0", "col", "flex-grow-1"], ["for", "coupon-code", 1, "sr-only"], ["type", "text", "id", "coupon-code", 1, "form-control", "form-control-sm", 3, "placeholder"], [1, "form-group", "mb-0", "col-auto"], ["type", "button", 1, "btn", "btn-sm", "btn-primary"], [1, "cart-table__update-button"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "cart__totals"], [1, "card"], [1, "card-body", "card-body--padding--2"], [1, "card-title"], [1, "cart__totals-table"], [1, "btn", "btn-primary", "btn-xl", "btn-block", 3, "routerLink"], ["appRemoveFromCart", "", 1, "cart-table__row"], ["removeFromCart", "removeFromCart"], [1, "image", "image--type--product"], [1, "image__body", 3, "routerLink"], ["alt", "", 1, "image__tag", 3, "src"], [1, "cart-table__product-name", 3, "routerLink"], ["class", "cart-table__options", 4, "ngIf"], ["min", "1", 1, "cart-table__quantity", 3, "formControl"], ["type", "button", 1, "cart-table__remove", "btn", "btn-sm", "btn-icon", "btn-muted", 3, "click"], ["icon", "cross-12"], [1, "cart-table__options"], [4, "ngFor", "ngForOf"], ["href", "", 3, "click"]], template: function PageCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageCartComponent_ng_container_0_Template, 16, 23, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCartComponent_ng_container_1_Template, 72, 69, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-space", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.items.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.items.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_7__["BlockSpaceComponent"], _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_8__["BlockHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _shared_directives_remove_from_cart_directive__WEBPACK_IMPORTED_MODULE_10__["RemoveFromCartDirective"], _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_11__["InputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_14__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-cart',
                templateUrl: './page-cart.component.html',
                styleUrls: ['./page-cart.component.scss'],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "A/ap":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafgraph/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "BGDE":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-rating/filter-rating.handler.ts ***!
  \*************************************************************************************************/
/*! exports provided: FilterRatingHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRatingHandler", function() { return FilterRatingHandler; });
/* harmony import */ var _filter_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.handler */ "ty/I");

class FilterRatingHandler extends _filter_handler__WEBPACK_IMPORTED_MODULE_0__["FilterHandler"] {
    constructor() {
        super(...arguments);
        this.type = 'rating';
    }
    serialize(value) {
        return value.join(',');
    }
    deserialize(value) {
        return value !== '' ? value.split(',').map(parseFloat) : [];
    }
    isDefaultValue(filter, value) {
        return value.length === 0;
    }
    activeFilters(filter) {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }
        return filter.items.filter(x => filter.value.includes(x.rating)).map(item => ({
            id: `${filter.slug}/${item.rating}`,
            type: 'rating',
            original: filter,
            item,
        }));
    }
    getResetValue(activeFilters) {
        const itemSlugs = activeFilters.map(x => x.item.rating);
        return this.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
    }
}


/***/ }),

/***/ "BcTD":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-radio/filter-radio.handler.ts ***!
  \***********************************************************************************************/
/*! exports provided: FilterRadioHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRadioHandler", function() { return FilterRadioHandler; });
/* harmony import */ var _filter_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.handler */ "ty/I");

class FilterRadioHandler extends _filter_handler__WEBPACK_IMPORTED_MODULE_0__["FilterHandler"] {
    constructor() {
        super(...arguments);
        this.type = 'radio';
    }
    serialize(value) {
        return value;
    }
    deserialize(value) {
        return value;
    }
    isDefaultValue(filter, value) {
        return filter.items[0].slug === value;
    }
    activeFilters(filter) {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }
        return [{
                id: filter.slug,
                type: filter.type,
                original: filter,
                item: filter.items.find(x => x.slug === filter.value),
            }];
    }
    getResetValue(activeFilters) {
        return activeFilters[0].original.items[0].slug;
    }
}


/***/ }),

/***/ "CxYz":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-wishlist/page-wishlist.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PageWishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageWishlistComponent", function() { return PageWishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/wishlist.service */ "zsKQ");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/block-header/block-header.component */ "V3dM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ "fHWZ");
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ "SluW");
/* harmony import */ var _shared_directives_add_to_cart_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/directives/add-to-cart.directive */ "ZKBD");
/* harmony import */ var _shared_directives_remove_from_wishlist_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/directives/remove-from-wishlist.directive */ "2SA3");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");















const _c0 = function (a0) { return { label: a0, url: "/" }; };
const _c1 = function (a0) { return { label: a0, url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
function PageWishlistComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "LINK_HOME")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "LINK_WISHLIST"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "HEADER_WISHLIST_EMPTY_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "HEADER_WISHLIST_EMPTY_SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "BUTTON_GO_TO_HOMEPAGE"));
} }
const _c3 = function (a0, a1) { return { rating: a0, reviews: a1 }; };
const _c4 = function () { return { "in-stock": "success", "out-of-stock": "failure", "on-backorder": "warning" }; };
const _c5 = function () { return { "in-stock": "TEXT_STOCK_IN_STOCK", "out-of-stock": "TEXT_STOCK_OUT_OF_STOCK", "on-backorder": "TEXT_STOCK_ON_BACKORDER" }; };
function PageWishlistComponent_ng_container_2_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-rating", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-status-badge", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageWishlistComponent_ng_container_2_tr_26_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const product_r3 = ctx.$implicit; const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return _r4.add(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageWishlistComponent_ng_container_2_tr_26_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const product_r3 = ctx.$implicit; const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return _r5.remove(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.url.product(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.url.product(product_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r3.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 14, "TEXT_RATING_LABEL", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](23, _c3, product_r3.rating, product_r3.reviews)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4)[product_r3.stock])("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c5)[product_r3.stock]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 19, product_r3.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", _r4.inProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, "BUTTON_ADD_TO_CART"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", _r5.inProgress);
} }
function PageWishlistComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PageWishlistComponent_ng_container_2_tr_26_Template, 30, 28, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, "HEADER_WISHLIST"))("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](27, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "LINK_HOME")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "LINK_WISHLIST"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "TABLE_IMAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "TABLE_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "TABLE_STOCK_STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, "TABLE_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 21, ctx_r1.wishlist.items$));
} }
class PageWishlistComponent {
    constructor(wishlist, url) {
        this.wishlist = wishlist;
        this.url = url;
    }
}
PageWishlistComponent.ɵfac = function PageWishlistComponent_Factory(t) { return new (t || PageWishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"])); };
PageWishlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageWishlistComponent, selectors: [["app-page-wishlist"]], decls: 5, vars: 6, consts: [[4, "ngIf"], ["layout", "before-footer"], [3, "breadcrumb"], [1, "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__title"], [1, "block-empty__message", 3, "innerHTML"], [1, "block-empty__action"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [3, "pageTitle", "breadcrumb"], [1, "block"], [1, "container", "container--max--xl"], [1, "wishlist"], [1, "wishlist__table"], [1, "wishlist__head"], [1, "wishlist__row", "wishlist__row--head"], [1, "wishlist__column", "wishlist__column--head", "wishlist__column--image"], [1, "wishlist__column", "wishlist__column--head", "wishlist__column--product"], [1, "wishlist__column", "wishlist__column--head", "wishlist__column--stock"], [1, "wishlist__column", "wishlist__column--head", "wishlist__column--price"], [1, "wishlist__column", "wishlist__column--head", "wishlist__column--button"], [1, "wishlist__column", "wishlist__column--head", "wishlist__column--remove"], [1, "wishlist__body"], ["class", "wishlist__row wishlist__row--body", 4, "ngFor", "ngForOf"], [1, "wishlist__row", "wishlist__row--body"], [1, "wishlist__column", "wishlist__column--body", "wishlist__column--image"], [1, "image", "image--type--product"], [1, "image__body", 3, "routerLink"], ["alt", "", 1, "image__tag", 3, "src"], [1, "wishlist__column", "wishlist__column--body", "wishlist__column--product"], [1, "wishlist__product-name"], [3, "routerLink"], [1, "wishlist__product-rating"], [1, "wishlist__product-rating-stars"], [3, "value"], [1, "wishlist__product-rating-title"], [1, "wishlist__column", "wishlist__column--body", "wishlist__column--stock"], [1, "product__stock", 3, "type", "text"], [1, "wishlist__column", "wishlist__column--body", "wishlist__column--price"], [1, "wishlist__column", "wishlist__column--body", "wishlist__column--button"], ["appAddToCart", "", "type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["addToCart", "addToCart"], [1, "wishlist__column", "wishlist__column--body", "wishlist__column--remove"], ["appRemoveFromWishlist", "", "type", "button", 1, "wishlist__remove", "btn", "btn-sm", "btn-muted", "btn-icon", 3, "click"], ["removeFromWishlist", "removeFromWishlist"], ["icon", "cross-12"]], template: function PageWishlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageWishlistComponent_ng_container_0_Template, 16, 21, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageWishlistComponent_ng_container_2_Template, 28, 30, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-block-space", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.wishlist.items$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.wishlist.items$).length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_4__["BlockSpaceComponent"], _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_5__["BlockHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"], _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_8__["StatusBadgeComponent"], _shared_directives_add_to_cart_directive__WEBPACK_IMPORTED_MODULE_9__["AddToCartDirective"], _shared_directives_remove_from_wishlist_directive__WEBPACK_IMPORTED_MODULE_10__["RemoveFromWishlistDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_13__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXdpc2hsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageWishlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-wishlist',
                templateUrl: './page-wishlist.component.html',
                styleUrls: ['./page-wishlist.component.scss'],
            }]
    }], function () { return [{ type: _services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_2__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "D53K":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-check/filter-check.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FilterCheckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCheckComponent", function() { return FilterCheckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _checkbox_directives_checkbox_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../checkbox/directives/checkbox-group.directive */ "PbKZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../checkbox/components/checkbox/checkbox.component */ "X6gf");









function FilterCheckComponent_label_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count);
} }
function FilterCheckComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-checkbox", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterCheckComponent_label_1_span_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-list__item--disabled", item_r1.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.slug)("disabled", item_r1.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.count);
} }
class FilterCheckComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
        this.classFilterList = true;
        this.changeFn = () => { };
        this.touchedFn = () => { };
    }
    ngOnInit() {
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(value => value !== this.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(value => this.changeFn(value));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    writeValue(obj) {
        this.control.setValue(this.value = obj, { emitEvent: false });
    }
    trackBy(index, item) {
        return item.slug;
    }
}
FilterCheckComponent.ɵfac = function FilterCheckComponent_Factory(t) { return new (t || FilterCheckComponent)(); };
FilterCheckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterCheckComponent, selectors: [["app-filter-check"]], hostVars: 2, hostBindings: function FilterCheckComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-list", ctx.classFilterList);
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterCheckComponent),
                multi: true,
            },
        ])], decls: 2, vars: 3, consts: [["appCheckboxGroup", "", 1, "filter-list__list", 3, "formControl"], ["class", "filter-list__item", 3, "filter-list__item--disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-list__item"], [1, "filter-list__input", 3, "value", "disabled"], [1, "filter-list__title"], ["class", "filter-list__counter", 4, "ngIf"], [1, "filter-list__counter"]], template: function FilterCheckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCheckComponent_label_1_Template, 5, 6, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.items)("ngForTrackBy", ctx.trackBy);
    } }, directives: [_checkbox_directives_checkbox_group_directive__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY2hlY2suY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterCheckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-check',
                templateUrl: './filter-check.component.html',
                styleUrls: ['./filter-check.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterCheckComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-list']
        }] }); })();


/***/ }),

/***/ "EZk/":
/*!*******************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-track-order/page-track-order.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: PageTrackOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTrackOrderComponent", function() { return PageTrackOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





class PageTrackOrderComponent {
    constructor() { }
}
PageTrackOrderComponent.ɵfac = function PageTrackOrderComponent_Factory(t) { return new (t || PageTrackOrderComponent)(); };
PageTrackOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTrackOrderComponent, selectors: [["app-page-track-order"]], decls: 31, vars: 21, consts: [["layout", "after-header"], [1, "block"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6", "col-xl-5", "col-xxl-4"], [1, "card", "ml-md-3", "mr-md-3"], [1, "card-body", "card-body--padding--2"], [1, "card-title", "card-title--lg"], [1, "mb-4"], [1, "form-group"], ["for", "track-order-id"], ["id", "track-order-id", "type", "text", 1, "form-control", 3, "placeholder"], ["for", "track-email"], ["id", "track-email", "type", "email", 1, "form-control", 3, "placeholder"], [1, "form-group", "pt-4", "mb-1"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "btn-block"], ["layout", "before-footer"]], template: function PageTrackOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-space", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-block-space", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "HEADER_TRACK_ORDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "TEXT_TRACK_ORDER_HELP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "INPUT_ORDER_ID_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "INPUT_ORDER_ID_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "INPUT_EMAIL_ADDRESS_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 17, "INPUT_EMAIL_ADDRESS_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 19, "BUTTON_TRACK"), " ");
    } }, directives: [_shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_1__["BlockSpaceComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRyYWNrLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTrackOrderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-track-order',
                templateUrl: './page-track-order.component.html',
                styleUrls: ['./page-track-order.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IEcU":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-color/filter-color.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FilterColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterColorComponent", function() { return FilterColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _functions_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../functions/color */ "gfQw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");






function FilterColorComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FilterColorComponent_label_1_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onItemChange(item_r1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", item_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-check-color--white", ctx_r0.colorType(item_r1.color) === "white")("input-check-color--light", ctx_r0.colorType(item_r1.color) === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isItemChecked(item_r1))("disabled", item_r1.count === 0);
} }
class FilterColorComponent {
    constructor() {
        this.value = [];
        this.classFilterColor = true;
        this.changeFn = () => { };
        this.touchedFn = () => { };
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    colorType(color) {
        return Object(_functions_color__WEBPACK_IMPORTED_MODULE_2__["colorType"])(color);
    }
    onItemChange(item, event) {
        const checked = event.target.checked;
        if (checked && !this.isItemChecked(item)) {
            this.value = [...this.value, item.slug];
            this.changeFn(this.value);
        }
        if (!checked && this.isItemChecked(item)) {
            this.value = this.value.filter(x => x !== item.slug);
            this.changeFn(this.value);
        }
    }
    isItemChecked(item) {
        return this.value.includes(item.slug);
    }
    trackBySlug(index, item) {
        return item.slug;
    }
}
FilterColorComponent.ɵfac = function FilterColorComponent_Factory(t) { return new (t || FilterColorComponent)(); };
FilterColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterColorComponent, selectors: [["app-filter-color"]], hostVars: 2, hostBindings: function FilterColorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-color", ctx.classFilterColor);
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterColorComponent),
                multi: true,
            },
        ])], decls: 2, vars: 2, consts: [[1, "filter-color__list"], ["class", "filter-color__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-color__item"], [1, "filter-color__check", "input-check-color"], [1, "input-check-color__body"], ["type", "checkbox", 1, "input-check-color__input", 3, "checked", "disabled", "change"], [1, "input-check-color__box"], [1, "input-check-color__icon"], ["icon", "check-12x9"], [1, "input-check-color__stick"]], template: function FilterColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterColorComponent_label_1_Template, 8, 8, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.items)("ngForTrackBy", ctx.trackBySlug);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY29sb3IuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterColorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-color',
                templateUrl: './filter-color.component.html',
                styleUrls: ['./filter-color.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterColorComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-color']
        }] }); })();


/***/ }),

/***/ "IMeI":
/*!****************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/shop-sidebar/shop-sidebar.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ShopSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarComponent", function() { return ShopSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _functions_rxjs_from_match_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../functions/rxjs/from-match-media */ "URAG");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "c/8G");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../widgets/widget-filters/widget-filters.component */ "+Hkd");
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widgets/widget-products/widget-products.component */ "/Zgx");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













const _c0 = function (a0) { return { "d-none d-lg-block": a0 }; };
function ShopSidebarComponent_app_widget_products_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-products", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.offcanvas === "mobile"))("widgetTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "HEADER_LATEST_PRODUCTS"))("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r0.latestProducts$));
} }
class ShopSidebarComponent {
    constructor(shop, sidebar, platformId) {
        this.shop = shop;
        this.sidebar = sidebar;
        this.platformId = platformId;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.latestProducts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.classSidebar = true;
        this.sidebar.isOpen$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(isOpen => {
            if (isOpen) {
                this.open();
            }
            else {
                this.close();
            }
        });
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            Object(_functions_rxjs_from_match_media__WEBPACK_IMPORTED_MODULE_4__["fromMatchMedia"])('(max-width: 991px)').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(media => {
                if (this.offcanvas === 'mobile' && this.sidebar.isOpen && !media.matches) {
                    this.sidebar.close();
                }
            });
        }
    }
    get classSidebarOffcanvasAlways() {
        return this.offcanvas === 'always';
    }
    get classSidebarOffcanvasMobile() {
        return this.offcanvas === 'mobile';
    }
    get classSidebarOpen() {
        return this.sidebar.isOpen;
    }
    ngOnInit() {
        this.latestProducts$ = this.shop.getLatestProducts(5);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    open() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            const bodyWidth = document.body.offsetWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = (document.body.offsetWidth - bodyWidth) + 'px';
        }
    }
    close() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId)) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }
}
ShopSidebarComponent.ɵfac = function ShopSidebarComponent_Factory(t) { return new (t || ShopSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["ShopSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
ShopSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopSidebarComponent, selectors: [["app-shop-sidebar"]], hostVars: 8, hostBindings: function ShopSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sidebar", ctx.classSidebar)("sidebar--offcanvas--always", ctx.classSidebarOffcanvasAlways)("sidebar--offcanvas--mobile", ctx.classSidebarOffcanvasMobile)("sidebar--open", ctx.classSidebarOpen);
    } }, inputs: { offcanvas: "offcanvas" }, decls: 11, vars: 5, consts: [[1, "sidebar__backdrop", 3, "click"], [1, "sidebar__body"], [1, "sidebar__header"], [1, "sidebar__title"], ["type", "button", 1, "sidebar__close", 3, "click"], ["icon", "cross-12"], [1, "sidebar__content"], [3, "offcanvasSidebar"], [3, "ngClass", "widgetTitle", "products", 4, "ngIf"], [3, "ngClass", "widgetTitle", "products"]], template: function ShopSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopSidebarComponent_Template_div_click_0_listener() { return ctx.sidebar.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopSidebarComponent_Template_button_click_6_listener() { return ctx.sidebar.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-widget-filters", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ShopSidebarComponent_app_widget_products_10_Template, 3, 9, "app-widget-products", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "HEADER_FILTERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("offcanvasSidebar", ctx.offcanvas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offcanvas !== "always");
    } }, directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_8__["WidgetFiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_9__["WidgetProductsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop-sidebar',
                templateUrl: './shop-sidebar.component.html',
                styleUrls: ['./shop-sidebar.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"] }, { type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["ShopSidebarService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { offcanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sidebar']
        }], classSidebarOffcanvasAlways: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sidebar--offcanvas--always']
        }], classSidebarOffcanvasMobile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sidebar--offcanvas--mobile']
        }], classSidebarOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.sidebar--open']
        }] }); })();


/***/ }),

/***/ "Kic8":
/*!*****************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-shop/page-shop.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageShopComponent", function() { return PageShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "c/8G");
/* harmony import */ var _services_page_shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-shop.service */ "4g39");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _functions_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../functions/utils */ "P+Ov");
/* harmony import */ var _services_current_vehicle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/current-vehicle.service */ "QOaP");
/* harmony import */ var _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../filters/filter-handlers */ "dFvW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../language/services/language.service */ "YfDW");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
















function PageShopComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shop-sidebar", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("offcanvas", ctx_r1.offCanvasSidebar);
} }
function PageShopComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageShopComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageShopComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function PageShopComponent_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageShopComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageShopComponent_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function PageShopComponent_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageShopComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageShopComponent_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
class PageShopComponent {
    constructor(router, route, page, shop, location, url, language, translate) {
        this.router = router;
        this.route = route;
        this.page = page;
        this.shop = shop;
        this.location = location;
        this.url = url;
        this.language = language;
        this.translate = translate;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.layout = 'grid';
        this.gridLayout = 'grid-4-sidebar';
        this.sidebarPosition = 'start';
    }
    get offCanvasSidebar() {
        return ['grid-4-full', 'grid-5-full', 'grid-6-full'].includes(this.gridLayout) ? 'always' : 'mobile';
    }
    get hasSidebar() {
        return this.sidebarPosition && ['grid-3-sidebar', 'grid-4-sidebar'].includes(this.gridLayout);
    }
    ngOnInit() {
        const data$ = this.route.data;
        const category$ = data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.category));
        this.pageTitle$ = category$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(category => category ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(category.name) : this.translate.stream('HEADER_SHOP')));
        this.breadcrumbs$ = this.language.current$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => category$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(category => [
            { label: this.translate.instant('LINK_HOME'), url: this.url.home() },
            { label: this.translate.instant('LINK_SHOP'), url: this.url.shop() },
            ...Object(_functions_utils__WEBPACK_IMPORTED_MODULE_5__["getCategoryPath"])(category).map(x => ({ label: x.name, url: this.url.category(x) })),
        ]))));
        this.route.data.subscribe((data) => {
            this.layout = data.layout;
            this.gridLayout = data.gridLayout;
            this.sidebarPosition = data.sidebarPosition;
        });
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((data) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(data.productsList), this.page.optionsChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            this.updateUrl();
            const categorySlug = this.route.snapshot.params.categorySlug || this.route.snapshot.data.categorySlug || null;
            return Object.assign(Object.assign({}, this.page.options), { filters: Object.assign(Object.assign({}, this.page.options.filters), { category: categorySlug }) });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.page.isLoading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(options => this.shop.getProductsList(options))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(list => {
            this.page.isLoading = false;
            this.page.setList(list);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateUrl() {
        const tree = this.router.parseUrl(this.router.url);
        tree.queryParams = this.getQueryParams();
        this.location.replaceState(tree.toString());
    }
    getQueryParams() {
        const params = {};
        const options = this.page.options;
        const filterValues = options.filters;
        if ('page' in options && options.page !== this.page.defaultOptions.page) {
            params.page = options.page;
        }
        if ('limit' in options && options.limit !== this.page.defaultOptions.limit) {
            params.limit = options.limit;
        }
        if ('sort' in options && options.sort !== this.page.defaultOptions.sort) {
            params.sort = options.sort;
        }
        if ('filters' in options) {
            this.page.filters
                .map(filter => ({
                filter,
                handler: _filters_filter_handlers__WEBPACK_IMPORTED_MODULE_7__["filterHandlers"].find(x => x.type === filter.type),
            }))
                .filter(x => x.handler && filterValues[x.filter.slug])
                .forEach(({ filter, handler }) => {
                const value = handler.deserialize(filterValues[filter.slug]);
                if (!handler.isDefaultValue(filter, value)) {
                    params[`filter_${filter.slug}`] = handler.serialize(value);
                }
            });
        }
        return params;
    }
}
PageShopComponent.ɵfac = function PageShopComponent_Factory(t) { return new (t || PageShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_shop_service__WEBPACK_IMPORTED_MODULE_2__["PageShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_9__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_11__["UrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"])); };
PageShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageShopComponent, selectors: [["app-page-shop"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["ShopSidebarService"],
            _services_page_shop_service__WEBPACK_IMPORTED_MODULE_2__["PageShopService"],
            _services_current_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["CurrentVehicleService"],
        ])], decls: 15, vars: 14, consts: [[3, "pageTitle", "breadcrumb"], ["sidebar", ""], [1, "block-split"], [4, "ngIf"], [1, "container"], [1, "block-split__row", "row", "no-gutters"], [1, "block-split__item", "block-split__item-content", "col-auto"], [1, "block"], [3, "layout", "gridLayout", "offCanvasSidebar"], ["layout", "before-footer"], [3, "offcanvas"], [4, "ngTemplateOutlet"], [1, "block-split__item", "block-split__item-sidebar", "col-auto"]], template: function PageShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageShopComponent_ng_template_3_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageShopComponent_ng_container_6_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PageShopComponent_ng_container_9_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-products-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PageShopComponent_ng_container_13_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-block-space", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 10, ctx.pageTitle$))("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 12, ctx.breadcrumbs$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-split--has-sidebar", ctx.hasSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.offCanvasSidebar === "always");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarPosition === "start" && ctx.hasSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layout", ctx.layout)("gridLayout", ctx.gridLayout)("offCanvasSidebar", ctx.offCanvasSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarPosition === "end" && ctx.hasSidebar);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXNob3AuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-shop',
                templateUrl: './page-shop.component.html',
                styleUrls: ['./page-shop.component.scss'],
                providers: [
                    _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["ShopSidebarService"],
                    _services_page_shop_service__WEBPACK_IMPORTED_MODULE_2__["PageShopService"],
                    _services_current_vehicle_service__WEBPACK_IMPORTED_MODULE_6__["CurrentVehicleService"],
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _services_page_shop_service__WEBPACK_IMPORTED_MODULE_2__["PageShopService"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_9__["ShopApi"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_11__["UrlService"] }, { type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_12__["LanguageService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "Mbdd":
/*!*****************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/shop.module.ts ***!
  \*****************************************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/blocks.module */ "NntI");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../collapse */ "eX/l");
/* harmony import */ var _radio_radio_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../radio/radio.module */ "krOz");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "4fzT");
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shop-routing.module */ "obNJ");
/* harmony import */ var _components_analogs_table_analogs_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/analogs-table/analogs-table.component */ "vt7+");
/* harmony import */ var _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/product-sidebar/product-sidebar.component */ "UoDK");
/* harmony import */ var _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/products-view/products-view.component */ "xT4v");
/* harmony import */ var _components_product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/product-tab/product-tab.component */ "4KRK");
/* harmony import */ var _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/product-tabs/product-tabs.component */ "1aig");
/* harmony import */ var _components_reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/reviews-list/reviews-list.component */ "ytXK");
/* harmony import */ var _components_reviews_view_reviews_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/reviews-view/reviews-view.component */ "ms1l");
/* harmony import */ var _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shop-sidebar/shop-sidebar.component */ "IMeI");
/* harmony import */ var _components_spec_spec_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/spec/spec.component */ "ZYoo");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "7j7p");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "aYu0");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "wCFk");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "ORHE");
/* harmony import */ var _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/page-order-success/page-order-success.component */ "kRhF");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "P15n");
/* harmony import */ var _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/page-shop/page-shop.component */ "Kic8");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "EZk/");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "CxYz");
/* harmony import */ var _widgets_widget_categories_list_widget_categories_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./widgets/widget-categories-list/widget-categories-list.component */ "QhRq");
/* harmony import */ var _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./widgets/widget-filters/widget-filters.component */ "+Hkd");
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./widgets/widget-products/widget-products.component */ "/Zgx");
/* harmony import */ var _filters_filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./filters/filter-category/filter-category.component */ "vwn3");
/* harmony import */ var _filters_filter_check_filter_check_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./filters/filter-check/filter-check.component */ "D53K");
/* harmony import */ var _filters_filter_color_filter_color_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./filters/filter-color/filter-color.component */ "IEcU");
/* harmony import */ var _filters_filter_radio_filter_radio_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./filters/filter-radio/filter-radio.component */ "vQrs");
/* harmony import */ var _filters_filter_range_filter_range_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./filters/filter-range/filter-range.component */ "kN33");
/* harmony import */ var _filters_filter_rating_filter_rating_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filters/filter-rating/filter-rating.component */ "ktfE");
/* harmony import */ var _filters_filter_vehicle_filter_vehicle_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./filters/filter-vehicle/filter-vehicle.component */ "k+P5");
/* harmony import */ var _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../shared/components/block-header/block-header.component */ "V3dM");
/* harmony import */ var _shared_components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../shared/components/product-gallery/product-gallery.component */ "yaMD");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../shared/components/rating/rating.component */ "fHWZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../shared/components/status-badge/status-badge.component */ "SluW");
/* harmony import */ var _shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../shared/components/product-form/product-form.component */ "j9gD");
/* harmony import */ var _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../shared/components/input-number/input-number.component */ "/1qf");
/* harmony import */ var _shared_directives_add_to_wishlist_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../shared/directives/add-to-wishlist.directive */ "LdBd");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _shared_directives_add_to_compare_directive__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../shared/directives/add-to-compare.directive */ "xFJN");
/* harmony import */ var _shared_components_share_links_share_links_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../shared/components/share-links/share-links.component */ "gHNO");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../blocks/block-products-carousel/block-products-carousel.component */ "EmqW");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../currency/pipes/currency-format.pipe */ "i2U0");

// modules (angular)


// modules (third-party)




// modules





// components









// pages









// widgets



// filters

























class ShopModule {
}
ShopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopModule });
ShopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopModule_Factory(t) { return new (t || ShopModule)(); }, imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
            ngx_paypal__WEBPACK_IMPORTED_MODULE_4__["NgxPayPalModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["NgxSliderModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_7__["BlocksModule"],
            _collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
            _radio_radio_module__WEBPACK_IMPORTED_MODULE_9__["RadioModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _shop_routing_module__WEBPACK_IMPORTED_MODULE_11__["ShopRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [
        // components
        _components_analogs_table_analogs_table_component__WEBPACK_IMPORTED_MODULE_12__["AnalogsTableComponent"],
        _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["ProductSidebarComponent"],
        _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_14__["ProductsViewComponent"],
        _components_product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_15__["ProductTabComponent"],
        _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_16__["ProductTabsComponent"],
        _components_reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_17__["ReviewsListComponent"],
        _components_reviews_view_reviews_view_component__WEBPACK_IMPORTED_MODULE_18__["ReviewsViewComponent"],
        _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["ShopSidebarComponent"],
        _components_spec_spec_component__WEBPACK_IMPORTED_MODULE_20__["SpecComponent"],
        // pages
        _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_21__["PageCartComponent"],
        _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_22__["PageCategoryComponent"],
        _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_23__["PageCheckoutComponent"],
        _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_24__["PageCompareComponent"],
        _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_25__["PageOrderSuccessComponent"],
        _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_26__["PageProductComponent"],
        _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_27__["PageShopComponent"],
        _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_28__["PageTrackOrderComponent"],
        _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_29__["PageWishlistComponent"],
        // widgets
        _widgets_widget_categories_list_widget_categories_list_component__WEBPACK_IMPORTED_MODULE_30__["WidgetCategoriesListComponent"],
        _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_31__["WidgetFiltersComponent"],
        _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_32__["WidgetProductsComponent"],
        // filters
        _filters_filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_33__["FilterCategoryComponent"],
        _filters_filter_check_filter_check_component__WEBPACK_IMPORTED_MODULE_34__["FilterCheckComponent"],
        _filters_filter_color_filter_color_component__WEBPACK_IMPORTED_MODULE_35__["FilterColorComponent"],
        _filters_filter_radio_filter_radio_component__WEBPACK_IMPORTED_MODULE_36__["FilterRadioComponent"],
        _filters_filter_range_filter_range_component__WEBPACK_IMPORTED_MODULE_37__["FilterRangeComponent"],
        _filters_filter_rating_filter_rating_component__WEBPACK_IMPORTED_MODULE_38__["FilterRatingComponent"],
        _filters_filter_vehicle_filter_vehicle_component__WEBPACK_IMPORTED_MODULE_39__["FilterVehicleComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
        ngx_paypal__WEBPACK_IMPORTED_MODULE_4__["NgxPayPalModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["NgxSliderModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], 
        // modules
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_7__["BlocksModule"],
        _collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
        _radio_radio_module__WEBPACK_IMPORTED_MODULE_9__["RadioModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _shop_routing_module__WEBPACK_IMPORTED_MODULE_11__["ShopRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // components
                    _components_analogs_table_analogs_table_component__WEBPACK_IMPORTED_MODULE_12__["AnalogsTableComponent"],
                    _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["ProductSidebarComponent"],
                    _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_14__["ProductsViewComponent"],
                    _components_product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_15__["ProductTabComponent"],
                    _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_16__["ProductTabsComponent"],
                    _components_reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_17__["ReviewsListComponent"],
                    _components_reviews_view_reviews_view_component__WEBPACK_IMPORTED_MODULE_18__["ReviewsViewComponent"],
                    _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["ShopSidebarComponent"],
                    _components_spec_spec_component__WEBPACK_IMPORTED_MODULE_20__["SpecComponent"],
                    // pages
                    _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_21__["PageCartComponent"],
                    _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_22__["PageCategoryComponent"],
                    _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_23__["PageCheckoutComponent"],
                    _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_24__["PageCompareComponent"],
                    _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_25__["PageOrderSuccessComponent"],
                    _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_26__["PageProductComponent"],
                    _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_27__["PageShopComponent"],
                    _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_28__["PageTrackOrderComponent"],
                    _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_29__["PageWishlistComponent"],
                    // widgets
                    _widgets_widget_categories_list_widget_categories_list_component__WEBPACK_IMPORTED_MODULE_30__["WidgetCategoriesListComponent"],
                    _widgets_widget_filters_widget_filters_component__WEBPACK_IMPORTED_MODULE_31__["WidgetFiltersComponent"],
                    _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_32__["WidgetProductsComponent"],
                    // filters
                    _filters_filter_category_filter_category_component__WEBPACK_IMPORTED_MODULE_33__["FilterCategoryComponent"],
                    _filters_filter_check_filter_check_component__WEBPACK_IMPORTED_MODULE_34__["FilterCheckComponent"],
                    _filters_filter_color_filter_color_component__WEBPACK_IMPORTED_MODULE_35__["FilterColorComponent"],
                    _filters_filter_radio_filter_radio_component__WEBPACK_IMPORTED_MODULE_36__["FilterRadioComponent"],
                    _filters_filter_range_filter_range_component__WEBPACK_IMPORTED_MODULE_37__["FilterRangeComponent"],
                    _filters_filter_rating_filter_rating_component__WEBPACK_IMPORTED_MODULE_38__["FilterRatingComponent"],
                    _filters_filter_vehicle_filter_vehicle_component__WEBPACK_IMPORTED_MODULE_39__["FilterVehicleComponent"],
                ],
                imports: [
                    // modules (angular)
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    // modules (third-party)
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"],
                    ngx_paypal__WEBPACK_IMPORTED_MODULE_4__["NgxPayPalModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["NgxSliderModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                    // modules
                    _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_7__["BlocksModule"],
                    _collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
                    _radio_radio_module__WEBPACK_IMPORTED_MODULE_9__["RadioModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _shop_routing_module__WEBPACK_IMPORTED_MODULE_11__["ShopRoutingModule"],
                ],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_26__["PageProductComponent"], [_shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_40__["BlockHeaderComponent"], _components_product_sidebar_product_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["ProductSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _shared_components_product_gallery_product_gallery_component__WEBPACK_IMPORTED_MODULE_41__["ProductGalleryComponent"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_42__["RatingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_43__["RouterLinkWithHref"], _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_44__["StatusBadgeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _shared_components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_45__["ProductFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _shared_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_46__["InputNumberComponent"], _shared_directives_add_to_wishlist_directive__WEBPACK_IMPORTED_MODULE_47__["AddToWishlistDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_48__["IconComponent"], _shared_directives_add_to_compare_directive__WEBPACK_IMPORTED_MODULE_49__["AddToCompareDirective"], _shared_components_share_links_share_links_component__WEBPACK_IMPORTED_MODULE_50__["ShareLinksComponent"], _components_product_tabs_product_tabs_component__WEBPACK_IMPORTED_MODULE_16__["ProductTabsComponent"],
    _components_product_tab_product_tab_component__WEBPACK_IMPORTED_MODULE_15__["ProductTabComponent"],
    _components_spec_spec_component__WEBPACK_IMPORTED_MODULE_20__["SpecComponent"],
    _components_reviews_view_reviews_view_component__WEBPACK_IMPORTED_MODULE_18__["ReviewsViewComponent"],
    // components
    _components_analogs_table_analogs_table_component__WEBPACK_IMPORTED_MODULE_12__["AnalogsTableComponent"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_51__["BlockSpaceComponent"], _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_52__["BlockProductsCarouselComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_53__["CurrencyFormatPipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_27__["PageShopComponent"], [_shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_40__["BlockHeaderComponent"], _components_shop_sidebar_shop_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["ShopSidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _components_products_view_products_view_component__WEBPACK_IMPORTED_MODULE_14__["ProductsViewComponent"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_51__["BlockSpaceComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]]);


/***/ }),

/***/ "ORHE":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-compare/page-compare.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PageCompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCompareComponent", function() { return PageCompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_compare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/compare.service */ "UdwE");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/block-header/block-header.component */ "V3dM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ "fHWZ");
/* harmony import */ var _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/status-badge/status-badge.component */ "SluW");
/* harmony import */ var _shared_directives_add_to_cart_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/directives/add-to-cart.directive */ "ZKBD");
/* harmony import */ var _shared_directives_remove_from_compare_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/directives/remove-from-compare.directive */ "9UMN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");


















const _c0 = function (a0) { return { label: a0, url: "/" }; };
const _c1 = function (a0) { return { label: a0, url: "" }; };
const _c2 = function (a0, a1) { return [a0, a1]; };
function PageCompareComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "LINK_HOME")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "LINK_COMPARE"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, "HEADER_COMPARE_EMPTY_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "HEADER_COMPARE_EMPTY_SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, "BUTTON_GO_TO_HOMEPAGE"));
} }
function PageCompareComponent_ng_container_2_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.url.product(product_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r10.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r10.name, " ");
} }
const _c3 = function (a0, a1) { return { rating: a0, reviews: a1 }; };
function PageCompareComponent_ng_container_2_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-rating", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", product_r11.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, "TEXT_RATING_LABEL", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c3, product_r11.rating, product_r11.reviews)), " ");
} }
const _c4 = function () { return { "in-stock": "success", "out-of-stock": "failure", "on-backorder": "warning" }; };
const _c5 = function () { return { "in-stock": "TEXT_STOCK_IN_STOCK", "out-of-stock": "TEXT_STOCK_OUT_OF_STOCK", "on-backorder": "TEXT_STOCK_ON_BACKORDER" }; };
function PageCompareComponent_ng_container_2_td_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-status-badge", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c4)[product_r12.stock])("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c5)[product_r12.stock]));
} }
function PageCompareComponent_ng_container_2_td_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, product_r13.price), " ");
} }
function PageCompareComponent_ng_container_2_td_64_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCompareComponent_ng_container_2_td_64_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const product_r14 = ctx.$implicit; const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r15.add(product_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", _r15.inProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "BUTTON_ADD_TO_CART"), " ");
} }
function PageCompareComponent_ng_container_2_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r18.sku, " ");
} }
function PageCompareComponent_ng_container_2_tr_74_td_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u2014");
} }
function PageCompareComponent_ng_container_2_tr_74_td_3_ng_container_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function PageCompareComponent_ng_container_2_tr_74_td_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageCompareComponent_ng_container_2_tr_74_td_3_ng_container_3_ng_container_1_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r26 = ctx.$implicit;
    const last_r27 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r26.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r27);
} }
function PageCompareComponent_ng_container_2_tr_74_td_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCompareComponent_ng_container_2_tr_74_td_3_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const attribute_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attribute_r19.values[product_r21.id]);
} }
function PageCompareComponent_ng_container_2_tr_74_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCompareComponent_ng_container_2_tr_74_td_3_ng_template_1_Template, 1, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageCompareComponent_ng_container_2_tr_74_td_3_ng_container_3_Template, 2, 1, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r21 = ctx.$implicit;
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const attribute_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (attribute_r19.values[product_r21.id] == null ? null : attribute_r19.values[product_r21.id].length) > 0)("ngIfElse", _r22);
} }
function PageCompareComponent_ng_container_2_tr_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageCompareComponent_ng_container_2_tr_74_td_3_Template, 4, 2, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r19 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attribute_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, ctx_r8.products$));
} }
function PageCompareComponent_ng_container_2_td_78_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCompareComponent_ng_container_2_td_78_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const product_r32 = ctx.$implicit; const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r33.remove(product_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", _r33.inProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "BUTTON_REMOVE"), " ");
} }
function PageCompareComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCompareComponent_ng_container_2_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, PageCompareComponent_ng_container_2_td_38_Template, 7, 3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, PageCompareComponent_ng_container_2_td_45_Template, 7, 8, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PageCompareComponent_ng_container_2_td_52_Template, 3, 6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PageCompareComponent_ng_container_2_td_59_Template, 3, 3, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, PageCompareComponent_ng_container_2_td_64_Template, 5, 5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, PageCompareComponent_ng_container_2_td_71_Template, 2, 1, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, PageCompareComponent_ng_container_2_tr_74_Template, 6, 4, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, PageCompareComponent_ng_container_2_td_78_Template, 5, 5, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 23, "HEADER_COMPARE"))("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](63, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 25, "LINK_HOME")), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](65, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 27, "LINK_COMPARE"))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 29, "INPUT_SHOW_LABEL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 31, "INPUT_SHOW_OPTION_ALL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 33, "INPUT_SHOW_OPTION_DIFFERENT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", ctx_r1.clearInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 35, "BUTTON_CLEAR_LIST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 37, "TABLE_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 39, ctx_r1.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 41, "TABLE_RATING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 43, ctx_r1.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 45, "TABLE_STOCK_STATUS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 47, ctx_r1.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 49, "TABLE_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 51, ctx_r1.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 53, ctx_r1.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 55, "TABLE_SKU"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 57, ctx_r1.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 59, ctx_r1.show.value === "all" ? ctx_r1.attributes$ : ctx_r1.differentAttributes$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 61, ctx_r1.products$));
} }
class PageCompareComponent {
    constructor(compare, url) {
        this.compare = compare;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.show = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('all');
        this.clearInProgress = false;
        this.products$ = this.compare.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.attributes$ = this.products$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(products => {
            const attributes = [];
            products.forEach(product => product.attributes.forEach(pa => {
                let attribute = attributes.find(x => x.slug === pa.slug);
                if (!attribute) {
                    attribute = {
                        slug: pa.slug,
                        name: pa.name,
                        sameValues: false,
                        values: {},
                    };
                    attributes.push(attribute);
                }
                attribute.values[product.id] = pa.values;
            }));
            attributes.forEach(attribute => {
                const values = products.map(product => {
                    return (attribute.values[product.id] || []).map(x => x.slug).sort();
                });
                attribute.sameValues = values.reduce((sameValues, curr) => {
                    return sameValues && (values[0].length === curr.length && values[0].join() === curr.join());
                }, true);
            });
            return attributes;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        this.differentAttributes$ = this.attributes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(attributes => attributes.filter(x => !x.sameValues)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    clear() {
        if (this.clearInProgress) {
            return;
        }
        this.clearInProgress = true;
        this.compare.clear().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe({
            complete: () => {
                this.clearInProgress = false;
            },
        });
    }
}
PageCompareComponent.ɵfac = function PageCompareComponent_Factory(t) { return new (t || PageCompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
PageCompareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageCompareComponent, selectors: [["app-page-compare"]], decls: 5, vars: 6, consts: [[4, "ngIf"], ["layout", "before-footer"], [3, "breadcrumb"], [1, "block-empty"], [1, "container"], [1, "block-empty__body"], [1, "block-empty__title"], [1, "block-empty__message", 3, "innerHTML"], [1, "block-empty__action"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-sm"], [3, "pageTitle", "breadcrumb"], [1, "block"], [1, "compare", "card"], [1, "compare__options-list"], [1, "compare__option"], [1, "compare__option-label"], [1, "compare__option-control"], [1, "button-toggle"], [1, "button-toggle__list"], [1, "button-toggle__item"], ["type", "radio", "name", "compare-filter", "value", "all", 1, "button-toggle__input", 3, "formControl"], [1, "button-toggle__button"], ["type", "radio", "name", "compare-filter", "value", "different", 1, "button-toggle__input", 3, "formControl"], ["type", "button", 1, "btn", "btn-secondary", "btn-xs", 3, "click"], [1, "table-responsive"], [1, "compare__table", "compare-table"], [1, "compare-table__row"], [1, "compare-table__column", "compare-table__column--header"], ["class", "compare-table__column compare-table__column--product", 4, "ngFor", "ngForOf"], [1, "compare-table__column", "compare-table__column--fake"], ["class", "compare-table__row", 4, "ngFor", "ngForOf"], [1, "compare-table__column", "compare-table__column--product"], [1, "compare-table__product", 3, "routerLink"], [1, "compare-table__product-image", "image", "image--type--product"], [1, "image__body"], ["alt", "", 1, "image__tag", 3, "src"], [1, "compare-table__product-name"], [1, "compare-table__rating"], [1, "compare-table__rating-stars"], [3, "value"], [1, "compare-table__rating-title"], [1, "product__stock", 3, "type", "text"], ["appAddToCart", "", "type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], ["addToCart", "addToCart"], ["empty", ""], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["appRemoveFromCompare", "", "type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "click"], ["removeFromCompare", "removeFromCompare"]], template: function PageCompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageCompareComponent_ng_container_0_Template, 16, 21, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageCompareComponent_ng_container_2_Template, 81, 70, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-block-space", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.compare.items$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.compare.items$).length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_7__["BlockSpaceComponent"], _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_8__["BlockHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_10__["RatingComponent"], _shared_components_status_badge_status_badge_component__WEBPACK_IMPORTED_MODULE_11__["StatusBadgeComponent"], _shared_directives_add_to_cart_directive__WEBPACK_IMPORTED_MODULE_12__["AddToCartDirective"], _shared_directives_remove_from_compare_directive__WEBPACK_IMPORTED_MODULE_13__["RemoveFromCompareDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_15__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbXBhcmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCompareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-compare',
                templateUrl: './page-compare.component.html',
                styleUrls: ['./page-compare.component.scss'],
            }]
    }], function () { return [{ type: _services_compare_service__WEBPACK_IMPORTED_MODULE_4__["CompareService"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "P+Ov":
/*!********************************************************!*\
  !*** ./projects/storefront/src/app/functions/utils.ts ***!
  \********************************************************/
/*! exports provided: getCategoryPath, parseProductsListParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryPath", function() { return getCategoryPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseProductsListParams", function() { return parseProductsListParams; });
function getCategoryPath(category) {
    return category ? [...getCategoryPath(category.parent), category] : [];
}
function parseProductsListParams(params) {
    const options = {};
    if (params.page) {
        options.page = parseFloat(params.page);
    }
    if (params.limit) {
        options.limit = parseFloat(params.limit);
    }
    if (params.sort) {
        options.sort = params.sort;
    }
    for (const param of Object.keys(params)) {
        const mr = param.match(/^filter_([-_A-Za-z0-9]+)$/);
        if (!mr) {
            continue;
        }
        const filterSlug = mr[1];
        if (!('filters' in options)) {
            options.filters = {};
        }
        options.filters[filterSlug] = params[param];
    }
    return options;
}


/***/ }),

/***/ "P15n":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-product/page-product.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageProductComponent", function() { return PageProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _functions_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../functions/utils */ "P+Ov");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../language/services/language.service */ "YfDW");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/cart.service */ "S0zV");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");













const _c0 = ["tabs"];
function PageProductComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-sidebar", 64);
} }
function PageProductComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageProductComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageProductComponent_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c1 = function () { return { "all": "unknown", "fit": "success", "not-fit": "failure", "unknown": "warning" }; };
const _c2 = function () { return { "all": "success", "fit": "success", "not-fit": "failure", "unknown": "failure" }; };
const _c3 = function () { return { "all": "TEXT_COMPATIBILITY_ALL", "fit": "TEXT_COMPATIBILITY_FIT", "not-fit": "TEXT_COMPATIBILITY_NOT_FIT", "unknown": "TEXT_COMPATIBILITY_UNKNOWN" }; };
const _c4 = function (a0, a1, a2) { return { year: a0, make: a1, model: a2 }; };
function PageProductComponent_app_status_badge_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-status-badge", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1)[ctx_r3.compatibility()])("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2)[ctx_r3.compatibility()])("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3)[ctx_r3.compatibility()], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c4, ctx_r3.vehicle.year, ctx_r3.vehicle.make, ctx_r3.vehicle.model)))("tooltipContent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3)[ctx_r3.compatibility()], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](18, _c4, ctx_r3.vehicle.year, ctx_r3.vehicle.make, ctx_r3.vehicle.model)));
} }
function PageProductComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.product.excerpt);
} }
function PageProductComponent_div_26_div_2_li_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r23 = ctx.$implicit;
    const last_r24 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r23.name + (!last_r24 ? ", " : ""), " ");
} }
function PageProductComponent_div_26_div_2_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageProductComponent_div_26_div_2_li_5_ng_container_3_Template, 2, 1, "ng-container", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attribute_r21.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attribute_r21.values);
} }
function PageProductComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageProductComponent_div_26_div_2_li_5_Template, 4, 2, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProductComponent_div_26_div_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.scrollToTabs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "TEXT_KEY_FEATURES"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.featuredAttributes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, "LINK_SEE_FULL_SPECIFICATION"), " ");
} }
function PageProductComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageProductComponent_div_26_div_1_Template, 2, 1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageProductComponent_div_26_div_2_Template, 10, 7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.product.excerpt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.featuredAttributes.length > 0);
} }
function PageProductComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "TEXT_BADGE_SALE"));
} }
function PageProductComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r6.product.compareAtPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r6.product.price));
} }
function PageProductComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r7.product.price));
} }
function PageProductComponent_ng_container_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "TABLE_BRAND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r8.url.brand(ctx_r8.product.brand));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.product.brand.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, "TABLE_COUNTRY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "COUNTRY_NAME_" + ctx_r8.product.brand.country));
} }
function PageProductComponent_app_product_form_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-form", 81);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.product.options);
} }
function PageProductComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input-number", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProductComponent_ng_container_55_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", ctx_r10.addToCartInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "BUTTON_ADD_TO_CART"), " ");
} }
function PageProductComponent_div_69_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r30);
} }
function PageProductComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageProductComponent_div_69_a_2_Template, 2, 1, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.product.tags);
} }
function PageProductComponent_ng_container_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-space", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-products-carousel", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "HEADER_RELATED_PRODUCTS"))("products", ctx_r15.relatedProducts)("layout", ctx_r15.layout === "sidebar" ? "grid-4-sidebar" : "grid-5");
} }
function PageProductComponent_ng_container_132_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageProductComponent_ng_container_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageProductComponent_ng_container_132_ng_container_1_Template, 1, 0, "ng-container", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c5 = function (a0, a1) { return { rating: a0, reviews: a1 }; };
const _c6 = function () { return { "in-stock": "success", "out-of-stock": "failure", "on-backorder": "warning" }; };
const _c7 = function () { return { "in-stock": "TEXT_STOCK_IN_STOCK", "out-of-stock": "TEXT_STOCK_OUT_OF_STOCK", "on-backorder": "TEXT_STOCK_ON_BACKORDER" }; };
class PageProductComponent {
    constructor(fb, router, route, translate, language, cart, shop, vehicleService, url) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.language = language;
        this.cart = cart;
        this.shop = shop;
        this.vehicleService = vehicleService;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.layout = 'sidebar';
        this.sidebarPosition = 'start';
        this.vehicle = null;
        this.featuredAttributes = [];
        this.spec = [];
        this.relatedProducts = [];
        this.addToCartInProgress = false;
    }
    get tabsElement() {
        return this.tabsElementRef.nativeElement;
    }
    get galleryLayout() {
        return `product-${this.layout}`;
    }
    ngOnInit() {
        const product$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.product));
        this.route.data.subscribe((data) => {
            this.layout = data.layout;
            this.sidebarPosition = data.sidebarPosition;
            this.product = data.product;
            this.featuredAttributes = this.product.attributes.filter(x => x.featured);
            this.spec = this.product.type.attributeGroups.map(group => (Object.assign(Object.assign({}, group), { attributes: group.attributes.map(attribute => (this.product.attributes.find(x => x.slug === attribute) || null)).filter(x => x !== null) }))).filter(x => x.attributes.length > 0);
        });
        this.breadcrumb$ = this.language.current$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => product$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(product => [
            { label: this.translate.instant('LINK_HOME'), url: '/' },
            { label: this.translate.instant('LINK_SHOP'), url: this.url.shop() },
            ...Object(_functions_utils__WEBPACK_IMPORTED_MODULE_4__["getCategoryPath"])(product.categories[0]).map(x => ({ label: x.name, url: this.url.category(x) })),
            { label: product.name, url: '/' },
        ]))));
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(product => {
            if (!product) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
            return this.shop.getRelatedProducts(product.id, 8);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(x => this.relatedProducts = x);
        this.vehicleService.currentVehicle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(vehicle => this.vehicle = vehicle);
        this.form = this.fb.group({
            options: [{}],
            quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    scrollToTabs() {
        this.tabsElement.scrollIntoView({ behavior: 'smooth' });
    }
    addToCart() {
        if (this.addToCartInProgress) {
            return;
        }
        if (this.form.get('quantity').invalid) {
            alert(this.translate.instant('ERROR_ADD_TO_CART_QUANTITY'));
            return;
        }
        if (this.form.get('options').invalid) {
            alert(this.translate.instant('ERROR_ADD_TO_CART_OPTIONS'));
            return;
        }
        const options = [];
        const formOptions = this.form.get('options').value;
        Object.keys(formOptions).forEach(optionSlug => {
            const option = this.product.options.find(x => x.slug === optionSlug);
            if (!option) {
                return;
            }
            const value = option.values.find(x => x.slug === formOptions[optionSlug]);
            if (!value) {
                return;
            }
            options.push({ name: option.name, value: value.name });
        });
        this.addToCartInProgress = true;
        this.cart.add(this.product, this.form.get('quantity').value, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.addToCartInProgress = false)).subscribe();
    }
    compatibility() {
        if (!this.vehicle) {
            return null;
        }
        if (this.product.compatibility === 'all') {
            return 'all';
        }
        if (this.product.compatibility === 'unknown') {
            return 'unknown';
        }
        if (this.product.compatibility.includes(this.vehicle.id)) {
            return 'fit';
        }
        else {
            return 'not-fit';
        }
    }
}
PageProductComponent.ɵfac = function PageProductComponent_Factory(t) { return new (t || PageProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_9__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_9__["VehicleApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"])); };
PageProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageProductComponent, selectors: [["app-page-product"]], viewQuery: function PageProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabsElementRef = _t.first);
    } }, decls: 134, vars: 101, consts: [[3, "breadcrumb"], ["sidebar", ""], [1, "block-split"], [1, "container"], [1, "block-split__row", "row", "no-gutters"], [4, "ngIf"], [1, "block-split__item", "block-split__item-content", "col-auto"], [1, "product"], [1, "product__body"], [1, "product__card", "product__card--one"], [1, "product__card", "product__card--two"], [1, "product__gallery", 3, "images", "layout"], [1, "product__header"], [1, "product__title"], [1, "product__subtitle"], [1, "product__rating"], [1, "product__rating-stars"], [3, "value"], [1, "product__rating-label"], ["routerLink", "./", "fragment", "product-tab-reviews", 3, "click"], ["class", "product__fit", 3, "type", "icon", "text", "tooltipContent", 4, "ngIf"], ["class", "product__main", 4, "ngIf"], [1, "product__info"], [1, "product__info-card", 3, "formGroup"], [1, "product__info-body"], ["class", "product__badge tag-badge tag-badge--sale", 4, "ngIf"], [1, "product__prices-stock"], [1, "product__prices"], [1, "product__stock", 3, "type", "text"], [1, "product__meta"], ["formControlName", "options", "class", "product__form", 3, "options", 4, "ngIf"], [1, "product__actions"], ["appAddToWishlist", "", "type", "button", 1, "product__actions-item", "product__actions-item--wishlist", 3, "click"], ["addToWishlist", "addToWishlist"], ["icon", "wishlist-16"], ["appAddToCompare", "", "type", "button", 1, "product__actions-item", "product__actions-item--compare", 3, "click"], ["addToCompare", "addToCompare"], ["icon", "compare-16"], [1, "product__tags-and-share-links"], ["class", "product__tags tags tags--sm", 4, "ngIf"], [1, "product__share-links"], [1, "product__shop-features", "shop-features"], [1, "shop-features__list"], [1, "shop-features__item"], [1, "shop-features__item-icon"], ["icon", "fi-free-delivery-48"], [1, "shop-features__info"], [1, "shop-features__item-title"], [1, "shop-features__item-subtitle"], ["role", "presentation", 1, "shop-features__divider"], ["icon", "fi-24-hours-48"], ["icon", "fi-payment-security-48"], ["icon", "fi-tag-48"], [1, "product__tabs", 3, "layout"], ["tabs", ""], ["id", "product-tab-description", 3, "label"], [1, "typography", 3, "innerHTML"], ["id", "product-tab-specification", 3, "label"], [3, "groups"], ["id", "product-tab-reviews", 3, "label", "counter", "showCounter"], [3, "productPageLayout", "productId"], ["id", "product-tab-analogs", 3, "label"], [3, "productId"], ["layout", "before-footer"], [1, "block-split__item", "block-split__item-sidebar", "col-auto"], [4, "ngTemplateOutlet"], [1, "product__fit", 3, "type", "icon", "text", "tooltipContent"], [1, "product__main"], ["class", "product__excerpt", 4, "ngIf"], ["class", "product__features", 4, "ngIf"], [1, "product__excerpt"], [1, "product__features"], [1, "product__features-title"], [4, "ngFor", "ngForOf"], [1, "product__features-link"], ["routerLink", "./", "fragment", "product-tab-specification", 3, "click"], [1, "product__badge", "tag-badge", "tag-badge--sale"], [1, "product__price", "product__price--old"], [1, "product__price", "product__price--new"], [1, "product__price", "product__price--current"], [3, "routerLink"], ["formControlName", "options", 1, "product__form", 3, "options"], [1, "product__actions-item", "product__actions-item--quantity"], ["formControlName", "quantity", "size", "lg", "min", "1"], [1, "product__actions-item", "product__actions-item--addtocart"], [1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], [1, "product__actions-divider"], [1, "product__tags", "tags", "tags--sm"], [1, "tags__list"], ["routerLink", "/", 4, "ngFor", "ngForOf"], ["routerLink", "/"], ["layout", "divider-nl"], [3, "blockTitle", "products", "layout"]], template: function PageProductComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageProductComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PageProductComponent_ng_container_7_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-product-gallery", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-rating", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProductComponent_Template_a_click_22_listener() { return ctx.scrollToTabs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PageProductComponent_app_status_badge_25_Template, 3, 22, "app-status-badge", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PageProductComponent_div_26_Template, 3, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PageProductComponent_div_30_Template, 3, 3, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PageProductComponent_ng_container_33_Template, 7, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PageProductComponent_ng_container_34_Template, 4, 3, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-status-badge", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PageProductComponent_ng_container_46_Template, 15, 11, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, PageProductComponent_app_product_form_53_Template, 1, 1, "app-product-form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, PageProductComponent_ng_container_55_Template, 8, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProductComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57); return _r11.add(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageProductComponent_Template_button_click_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63); return _r12.add(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "app-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, PageProductComponent_div_69_Template, 3, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-share-links", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-icon", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "app-icon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "app-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "app-icon", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "app-product-tabs", 53, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "app-product-tab", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "app-product-tab", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](123, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "app-spec", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "app-product-tab", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](126, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-reviews-view", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "app-product-tab", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "app-analogs-table", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, PageProductComponent_ng_container_131_Template, 4, 5, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, PageProductComponent_ng_container_132_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "app-block-space", 63);
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 57, ctx.breadcrumb$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-split--has-sidebar", ctx.layout === "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "sidebar" && ctx.sidebarPosition === "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product--layout--full", ctx.layout === "full")("product--layout--sidebar", ctx.layout === "sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.product.images)("layout", ctx.galleryLayout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 59, "TEXT_RATING_LABEL", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](96, _c5, ctx.product.rating, ctx.product.reviews)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vehicle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "full");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.compareAtPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.compareAtPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.product.compareAtPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](99, _c6)[ctx.product.stock])("text", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](100, _c7)[ctx.product.stock]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 64, "TABLE_SKU"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.sku);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 66, "TABLE_PART_NUMBER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.partNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.options.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.stock !== "out-of-stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product__actions-item--loading", _r11.inProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 68, "BUTTON_ADD_TO_WISHLIST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("product__actions-item--loading", _r12.inProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 70, "BUTTON_ADD_TO_COMPARE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.product.tags == null ? null : ctx.product.tags.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 72, "TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 74, "TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 76, "TEXT_SHOP_FEATURE_SUPPORT_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](93, 78, "TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](101, 80, "TEXT_SHOP_FEATURE_SECURITY_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](104, 82, "TEXT_SHOP_FEATURE_SECURITY_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 84, "TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 86, "TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layout", ctx.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](120, 88, "TEXT_TAB_DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.product.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](123, 90, "TEXT_TAB_SPECIFICATION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groups", ctx.spec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](126, 92, "TEXT_TAB_REVIEWS"))("counter", ctx.product.reviews)("showCounter", ctx.product.reviews > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productPageLayout", ctx.layout)("productId", ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 94, "TEXT_TAB_ANALOGS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productId", ctx.product.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.relatedProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "sidebar" && ctx.sidebarPosition === "end");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-product',
                templateUrl: './page-product.component.html',
                styleUrls: ['./page-product.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_8__["CartService"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_9__["ShopApi"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_9__["VehicleApi"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_10__["UrlService"] }]; }, { tabsElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['tabs', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]
        }] }); })();


/***/ }),

/***/ "QhRq":
/*!*********************************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/widgets/widget-categories-list/widget-categories-list.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: WidgetCategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetCategoriesListComponent", function() { return WidgetCategoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _collapse_directives_collapse_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../collapse/directives/collapse-item.directive */ "enV0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _collapse_directives_collapse_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../collapse/directives/collapse-content.directive */ "Iowo");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");








function WidgetCategoriesListComponent_li_2_ng_container_4_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r5.url.category(sub_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r6.name);
} }
function WidgetCategoriesListComponent_li_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetCategoriesListComponent_li_2_ng_container_4_li_2_Template, 3, 2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, category_r1.children, 0, category_r1.children.length > 6 ? 5 : 6));
} }
function WidgetCategoriesListComponent_li_2_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r8.url.category(sub_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r9.name);
} }
function WidgetCategoriesListComponent_li_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetCategoriesListComponent_li_2_ng_container_5_li_2_Template, 3, 2, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WidgetCategoriesListComponent_li_2_ng_container_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return _r2.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Show More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show Less");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const category_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, category_r1.children, 5));
} }
function WidgetCategoriesListComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WidgetCategoriesListComponent_li_2_ng_container_4_Template, 4, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WidgetCategoriesListComponent_li_2_ng_container_5_Template, 11, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("widget-categories-list__root-item--has-children", category_r1.children == null ? null : category_r1.children.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.url.category(category_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (category_r1 == null ? null : category_r1.children == null ? null : category_r1.children.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (category_r1 == null ? null : category_r1.children == null ? null : category_r1.children.length) > 6);
} }
class WidgetCategoriesListComponent {
    constructor(url) {
        this.url = url;
        this.categories = [];
        this.classCard = true;
        this.classWidget = true;
        this.classWidgetCategoriesList = true;
    }
}
WidgetCategoriesListComponent.ɵfac = function WidgetCategoriesListComponent_Factory(t) { return new (t || WidgetCategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"])); };
WidgetCategoriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WidgetCategoriesListComponent, selectors: [["app-widget-categories-list"]], hostVars: 6, hostBindings: function WidgetCategoriesListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("card", ctx.classCard)("widget", ctx.classWidget)("widget-categories-list", ctx.classWidgetCategoriesList);
    } }, inputs: { categories: "categories" }, decls: 3, vars: 1, consts: [[1, "widget-categories-list__body"], [1, "widget-categories-list__root"], ["class", "widget-categories-list__root-item", "appCollapseItem", "widget-categories-list--open", 3, "widget-categories-list__root-item--has-children", 4, "ngFor", "ngForOf"], ["appCollapseItem", "widget-categories-list--open", 1, "widget-categories-list__root-item"], ["collapseItem", "appCollapseItem"], [1, "widget-categories-list__root-link", 3, "routerLink"], [4, "ngIf"], [1, "widget-categories-list__child"], ["class", "widget-categories-list__child-item", 4, "ngFor", "ngForOf"], [1, "widget-categories-list__child-item"], [1, "widget-categories-list__child-link", 3, "routerLink"], ["appCollapseContent", "", 1, "widget-categories-list__child"], ["type", "button", 1, "widget-categories-list__show-more", 3, "click"], [1, "widget-categories-list__show-more-expand-text"], [1, "widget-categories-list__show-more-collapse-text"], [1, "widget-categories-list__show-more-arrow"], ["icon", "arrow-down-9x6"]], template: function WidgetCategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WidgetCategoriesListComponent_li_2_Template, 6, 6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _collapse_directives_collapse_item_directive__WEBPACK_IMPORTED_MODULE_3__["CollapseItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _collapse_directives_collapse_content_directive__WEBPACK_IMPORTED_MODULE_5__["CollapseContentDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQtY2F0ZWdvcmllcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WidgetCategoriesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-widget-categories-list',
                templateUrl: './widget-categories-list.component.html',
                styleUrls: ['./widget-categories-list.component.scss'],
            }]
    }], function () { return [{ type: _services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"] }]; }, { categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.card']
        }], classWidget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget']
        }], classWidgetCategoriesList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.widget-categories-list']
        }] }); })();


/***/ }),

/***/ "QiFY":
/*!*********************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/resolvers/category.resolver.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryResolver", function() { return CategoryResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api */ "P1eJ");



class CategoryResolver {
    constructor(shop) {
        this.shop = shop;
    }
    resolve(route, state) {
        return this.shop.getCategoryBySlug(route.params.categorySlug || route.data.categorySlug, { depth: 2 });
    }
}
CategoryResolver.ɵfac = function CategoryResolver_Factory(t) { return new (t || CategoryResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api__WEBPACK_IMPORTED_MODULE_1__["ShopApi"])); };
CategoryResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryResolver, factory: CategoryResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api__WEBPACK_IMPORTED_MODULE_1__["ShopApi"] }]; }, null); })();


/***/ }),

/***/ "UoDK":
/*!**********************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/product-sidebar/product-sidebar.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ProductSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSidebarComponent", function() { return ProductSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _shared_widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/widgets/widget-categories/widget-categories.component */ "cCGz");
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widgets/widget-products/widget-products.component */ "/Zgx");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







class ProductSidebarComponent {
    constructor(shop) {
        this.shop = shop;
    }
    ngOnInit() {
        this.categories$ = this.shop.getCategories({ depth: 1 });
        this.latestProducts$ = this.shop.getLatestProducts(5);
    }
}
ProductSidebarComponent.ɵfac = function ProductSidebarComponent_Factory(t) { return new (t || ProductSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_1__["ShopApi"])); };
ProductSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductSidebarComponent, selectors: [["app-product-sidebar"]], decls: 6, vars: 12, consts: [[3, "widgetTitle", "categories"], [3, "widgetTitle", "products"]], template: function ProductSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-categories", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-widget-products", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "HEADER_CATEGORIES"))("categories", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx.categories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, "HEADER_LATEST_PRODUCTS"))("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.latestProducts$));
    } }, directives: [_shared_widgets_widget_categories_widget_categories_component__WEBPACK_IMPORTED_MODULE_2__["WidgetCategoriesComponent"], _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_3__["WidgetProductsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-sidebar',
                templateUrl: './product-sidebar.component.html',
                styleUrls: ['./product-sidebar.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_1__["ShopApi"] }]; }, null); })();


/***/ }),

/***/ "V+2u":
/*!**************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/resolvers/products-list.resolver.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductsListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListResolver", function() { return ProductsListResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _functions_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../functions/utils */ "P+Ov");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/base */ "+mav");




class ProductsListResolver {
    constructor(shop) {
        this.shop = shop;
    }
    resolve(route, state) {
        const categorySlug = route.params.categorySlug || route.data.categorySlug;
        const options = Object(_functions_utils__WEBPACK_IMPORTED_MODULE_1__["parseProductsListParams"])(route.queryParams);
        return this.shop.getProductsList(Object.assign(Object.assign({}, options), { filters: Object.assign(Object.assign({}, options.filters), { category: categorySlug }) }));
    }
}
ProductsListResolver.ɵfac = function ProductsListResolver_Factory(t) { return new (t || ProductsListResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_base__WEBPACK_IMPORTED_MODULE_2__["ShopApi"])); };
ProductsListResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsListResolver, factory: ProductsListResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsListResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_2__["ShopApi"] }]; }, null); })();


/***/ }),

/***/ "WiOn":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-color/filter-color.handler.ts ***!
  \***********************************************************************************************/
/*! exports provided: FilterColorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterColorHandler", function() { return FilterColorHandler; });
/* harmony import */ var _filter_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.handler */ "ty/I");

class FilterColorHandler extends _filter_handler__WEBPACK_IMPORTED_MODULE_0__["FilterHandler"] {
    constructor() {
        super(...arguments);
        this.type = 'color';
    }
    serialize(value) {
        return value.join(',');
    }
    deserialize(value) {
        return value !== '' ? value.split(',') : [];
    }
    isDefaultValue(filter, value) {
        return value.length === 0;
    }
    activeFilters(filter) {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }
        return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
            id: `${filter.slug}/${item.slug}`,
            type: filter.type,
            original: filter,
            item,
        }));
    }
    getResetValue(activeFilters) {
        const itemSlugs = activeFilters.map(x => x.item.slug);
        return this.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
    }
}


/***/ }),

/***/ "ZYoo":
/*!************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/spec/spec.component.ts ***!
  \************************************************************************************/
/*! exports provided: SpecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecComponent", function() { return SpecComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




function SpecComponent_div_0_div_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SpecComponent_div_0_div_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpecComponent_div_0_div_3_ng_container_4_ng_container_2_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r6);
} }
function SpecComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecComponent_div_0_div_3_ng_container_4_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attribute_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](attribute_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", attribute_r3.values);
} }
function SpecComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpecComponent_div_0_div_3_Template, 5, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.attributes);
} }
class SpecComponent {
    constructor() {
        this.groups = [];
        this.classSpec = true;
    }
}
SpecComponent.ɵfac = function SpecComponent_Factory(t) { return new (t || SpecComponent)(); };
SpecComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecComponent, selectors: [["app-spec"]], hostVars: 2, hostBindings: function SpecComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spec", ctx.classSpec);
    } }, inputs: { groups: "groups" }, decls: 4, vars: 4, consts: [["class", "spec__section", 4, "ngFor", "ngForOf"], [1, "spec__disclaimer"], [1, "spec__section"], [1, "spec__section-title"], ["class", "spec__row", 4, "ngFor", "ngForOf"], [1, "spec__row"], [1, "spec__name"], [1, "spec__value"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function SpecComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpecComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "TEXT_PRODUCT_DISCLAIMER"), "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVjLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spec',
                templateUrl: './spec.component.html',
                styleUrls: ['./spec.component.scss'],
            }]
    }], function () { return []; }, { groups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classSpec: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.spec']
        }] }); })();


/***/ }),

/***/ "aYu0":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-category/page-category.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PageCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCategoryComponent", function() { return PageCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _functions_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../functions/utils */ "P+Ov");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../language/services/language.service */ "YfDW");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/block-header/block-header.component */ "V3dM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/block-products-carousel/block-products-carousel.component */ "EmqW");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../blocks/block-brands/block-brands.component */ "ES/e");
/* harmony import */ var _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../widgets/widget-products/widget-products.component */ "/Zgx");
/* harmony import */ var _widgets_widget_categories_list_widget_categories_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../widgets/widget-categories-list/widget-categories-list.component */ "QhRq");

















function PageCategoryComponent_ng_template_3_app_widget_categories_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-widget-categories-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx_r5.children$));
} }
function PageCategoryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCategoryComponent_ng_template_3_app_widget_categories_list_1_Template, 2, 3, "app-widget-categories-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-widget-products", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r1.children$).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("widgetTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "HEADER_LATEST_PRODUCTS"))("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx_r1.latest$));
} }
function PageCategoryComponent_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageCategoryComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCategoryComponent_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function PageCategoryComponent_ng_container_10_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategory_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", subcategory_r8.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", subcategory_r8.name);
} }
const _c0 = function (a0) { return { count: a0 }; };
function PageCategoryComponent_ng_container_10_ng_container_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subcategory_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "TEXT_PRODUCTS_COUNT", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, subcategory_r8.items)), " ");
} }
function PageCategoryComponent_ng_container_10_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageCategoryComponent_ng_container_10_ng_container_4_div_3_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PageCategoryComponent_ng_container_10_ng_container_4_div_6_Template, 3, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subcategory_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("categories-list__item--has-image", subcategory_r8.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r7.url.category(subcategory_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subcategory_r8.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subcategory_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subcategory_r8.items);
} }
function PageCategoryComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PageCategoryComponent_ng_container_10_ng_container_4_Template, 8, 6, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-block-space", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("categories-list categories-list--layout--", ctx_r3.layout, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx_r3.children$));
} }
function PageCategoryComponent_ng_container_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PageCategoryComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageCategoryComponent_ng_container_22_ng_container_1_Template, 1, 0, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function asyncData(source$) {
    const container = {
        data$: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => container.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => source$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => container.loading = false)),
        loading: false,
    };
    return container;
}
class PageCategoryComponent {
    constructor(route, shop, translate, language, url) {
        this.route = route;
        this.shop = shop;
        this.translate = translate;
        this.language = language;
        this.url = url;
    }
    get hasSidebar() {
        return this.layout.endsWith('-sidebar');
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.layout = data.layout || 'columns-4-full';
            this.sidebarPosition = data.sidebarPosition || 'start';
        });
        this.category$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.category));
        this.children$ = this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.category ? data.category.children : data.children), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(categories => categories || []));
        this.pageTitle$ = this.category$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(category => category ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(category.name) : this.translate.stream('HEADER_SHOP')));
        this.breadcrumbs$ = this.language.current$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.category$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(category => [
            { label: this.translate.instant('LINK_HOME'), url: this.url.home() },
            { label: this.translate.instant('LINK_SHOP'), url: this.url.shop() },
            ...Object(_functions_utils__WEBPACK_IMPORTED_MODULE_3__["getCategoryPath"])(category).map(x => ({ label: x.name, url: this.url.category(x) })),
        ]))));
        this.bestsellers = asyncData(this.shop.getPopularProducts(null, 8));
        this.featured = asyncData(this.shop.getFeaturedProducts(null, 8));
        this.brands$ = this.shop.getBrands({ limit: (this.hasSidebar ? 7 : 8) * 2 });
        if (this.hasSidebar) {
            this.latest$ = this.shop.getLatestProducts(5);
        }
    }
}
PageCategoryComponent.ɵfac = function PageCategoryComponent_Factory(t) { return new (t || PageCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_8__["UrlService"])); };
PageCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageCategoryComponent, selectors: [["app-page-category"]], decls: 24, vars: 34, consts: [[3, "pageTitle", "breadcrumb"], ["sidebar", ""], [1, "block", "block-split"], [1, "container"], [1, "block-split__row", "row", "no-gutters"], [4, "ngIf"], [1, "block-split__item", "block-split__item-content", "col-auto", "flex-grow-1"], [3, "blockTitle", "layout", "products", "loading"], ["layout", "divider-nl"], [3, "blockTitle", "layout", "rows", "products", "loading"], [3, "layout", "brands"], ["layout", "before-footer"], [1, "block-split__item", "block-split__item-sidebar", "col-auto"], [3, "categories", 4, "ngIf"], [3, "widgetTitle", "products"], [3, "categories"], [4, "ngTemplateOutlet"], [1, "block"], [1, "categories-list__body"], [4, "ngFor", "ngForOf"], [1, "categories-list__item"], [3, "routerLink"], ["class", "image image--type--category", 4, "ngIf"], [1, "categories-list__item-name"], ["class", "categories-list__item-products", 4, "ngIf"], [1, "categories-list__divider"], [1, "image", "image--type--category"], [1, "image__body"], [1, "image__tag", 3, "src", "alt"], [1, "categories-list__item-products"]], template: function PageCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageCategoryComponent_ng_template_3_Template, 6, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PageCategoryComponent_ng_container_8_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PageCategoryComponent_ng_container_10_Template, 7, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-block-products-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-block-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-block-products-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-block-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-block-brands", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PageCategoryComponent_ng_container_22_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-block-space", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 18, ctx.pageTitle$))("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 20, ctx.breadcrumbs$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-split--has-sidebar", ctx.hasSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSidebar && ctx.sidebarPosition === "start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, ctx.children$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 24, "HEADER_BESTSELLERS"))("layout", ctx.hasSidebar ? "grid-4-sidebar" : "grid-5")("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 26, ctx.bestsellers.data$))("loading", ctx.bestsellers.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 28, "HEADER_FEATURED_PRODUCTS"))("layout", ctx.hasSidebar ? "horizontal-sidebar" : "horizontal")("rows", 2)("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 30, ctx.featured.data$))("loading", ctx.featured.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layout", ctx.hasSidebar ? "columns-7-sidebar" : "columns-8-full")("brands", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 32, ctx.brands$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSidebar && ctx.sidebarPosition === "end");
    } }, directives: [_shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_9__["BlockHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_11__["BlockProductsCarouselComponent"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_12__["BlockSpaceComponent"], _blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_13__["BlockBrandsComponent"], _widgets_widget_products_widget_products_component__WEBPACK_IMPORTED_MODULE_14__["WidgetProductsComponent"], _widgets_widget_categories_list_widget_categories_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetCategoriesListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-category',
                templateUrl: './page-category.component.html',
                styleUrls: ['./page-category.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }, { type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_8__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "c/8G":
/*!***********************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/services/shop-sidebar.service.ts ***!
  \***********************************************************************************/
/*! exports provided: ShopSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopSidebarService", function() { return ShopSidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ShopSidebarService {
    constructor() {
        this.isOpenState = false;
        this.isOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isOpen$ = this.isOpenSubject.asObservable();
    }
    get isOpen() {
        return this.isOpenState;
    }
    set isOpen(value) {
        if (this.isOpenState !== value) {
            this.isOpenState = value;
            this.isOpenSubject.next(value);
        }
    }
    open() {
        this.isOpen = true;
    }
    close() {
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
    }
}
ShopSidebarService.ɵfac = function ShopSidebarService_Factory(t) { return new (t || ShopSidebarService)(); };
ShopSidebarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShopSidebarService, factory: ShopSidebarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopSidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "dFvW":
/*!*****************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-handlers.ts ***!
  \*****************************************************************************/
/*! exports provided: filterHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterHandlers", function() { return filterHandlers; });
/* harmony import */ var _filter_check_filter_check_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-check/filter-check.handler */ "uJ5P");
/* harmony import */ var _filter_color_filter_color_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter-color/filter-color.handler */ "WiOn");
/* harmony import */ var _filter_radio_filter_radio_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-radio/filter-radio.handler */ "BcTD");
/* harmony import */ var _filter_range_filter_range_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-range/filter-range.handler */ "slmn");
/* harmony import */ var _filter_rating_filter_rating_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-rating/filter-rating.handler */ "BGDE");
/* harmony import */ var _filter_vehicle_filter_vehicle_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-vehicle/filter-vehicle.handler */ "21yF");






const filterHandlers = [
    new _filter_check_filter_check_handler__WEBPACK_IMPORTED_MODULE_0__["FilterCheckHandler"](),
    new _filter_color_filter_color_handler__WEBPACK_IMPORTED_MODULE_1__["FilterColorHandler"](),
    new _filter_radio_filter_radio_handler__WEBPACK_IMPORTED_MODULE_2__["FilterRadioHandler"](),
    new _filter_range_filter_range_handler__WEBPACK_IMPORTED_MODULE_3__["FilterRangeHandler"](),
    new _filter_rating_filter_rating_handler__WEBPACK_IMPORTED_MODULE_4__["FilterRatingHandler"](),
    new _filter_vehicle_filter_vehicle_handler__WEBPACK_IMPORTED_MODULE_5__["FilterVehicleHandler"](),
];


/***/ }),

/***/ "ejwX":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-paypal/__ivy_ngcc__/fesm2015/ngx-paypal.js ***!
  \*********************************************************************/
/*! exports provided: NgxPayPalModule, NgxPaypalComponent, PayPalScriptService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPayPalModule", function() { return NgxPayPalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaypalComponent", function() { return NgxPaypalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPalScriptService", function() { return PayPalScriptService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ScriptService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["payPalButtonContainer"];
let ScriptService = /** @class */ (() => {
    class ScriptService {
        /**
         * @param {?} zone
         */
        constructor(zone) {
            this.zone = zone;
        }
        /**
         * @param {?} url
         * @param {?} globalVar
         * @param {?} onReady
         * @return {?}
         */
        registerScript(url, globalVar, onReady) {
            /** @type {?} */
            const existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
            if (existingGlobalVar) {
                // global variable is present = script was already loaded
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    onReady(existingGlobalVar);
                }));
                return;
            }
            // prepare script elem
            /** @type {?} */
            const scriptElem = document.createElement('script');
            scriptElem.id = this.getElemId(globalVar);
            scriptElem.innerHTML = '';
            scriptElem.onload = (/**
             * @return {?}
             */
            () => {
                this.zone.run((/**
                 * @return {?}
                 */
                () => {
                    onReady(((/** @type {?} */ (window)))[globalVar]);
                }));
            });
            scriptElem.src = url;
            scriptElem.async = true;
            scriptElem.defer = true;
            // add script to header
            document.getElementsByTagName('head')[0].appendChild(scriptElem);
        }
        /**
         * @param {?} globalVar
         * @return {?}
         */
        cleanup(globalVar) {
            // remove script from DOM
            /** @type {?} */
            const scriptElem = document.getElementById(this.getElemId(globalVar));
            if (scriptElem) {
                scriptElem.remove();
            }
        }
        /**
         * @private
         * @param {?} globalVar
         * @return {?}
         */
        getElemId(globalVar) {
            return `ngx-paypal-script-elem-${globalVar}`;
        }
    }
ScriptService.ɵfac = function ScriptService_Factory(t) { return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
ScriptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScriptService, factory: function (t) { return ScriptService.ɵfac(t); } });
    /** @nocollapse */
    ScriptService.ctorParameters = () => [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, null); })();
    return ScriptService;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/paypal-script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let PayPalScriptService = /** @class */ (() => {
    class PayPalScriptService {
        /**
         * @param {?} scriptService
         */
        constructor(scriptService) {
            this.scriptService = scriptService;
            this.paypalWindowName = 'paypal';
        }
        /**
         * @param {?} config
         * @param {?} onReady
         * @return {?}
         */
        registerPayPalScript(config, onReady) {
            this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
        }
        /**
         * @return {?}
         */
        destroyPayPalScript() {
            this.scriptService.cleanup(this.paypalWindowName);
        }
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        getUrlForConfig(config) {
            /** @type {?} */
            const params = [
                {
                    name: 'client-id',
                    value: config.clientId
                }
            ];
            if (config.currency) {
                params.push({
                    name: 'currency',
                    value: config.currency
                });
            }
            if (config.commit) {
                params.push({
                    name: 'commit',
                    value: config.commit
                });
            }
            if (config.vault) {
                params.push({
                    name: 'vault',
                    value: config.vault
                });
            }
            if (config.extraParams) {
                params.push(...config.extraParams);
            }
            return `https://www.paypal.com/sdk/js${this.getQueryString(params)}`;
        }
        /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        getQueryString(queryParams) {
            /** @type {?} */
            let queryString = '';
            for (let i = 0; i < queryParams.length; i++) {
                /** @type {?} */
                const queryParam = queryParams[i];
                if (i === 0) {
                    queryString += '?';
                }
                else {
                    queryString += '&';
                }
                queryString += `${queryParam.name}=${queryParam.value}`;
            }
            return queryString;
        }
    }
PayPalScriptService.ɵfac = function PayPalScriptService_Factory(t) { return new (t || PayPalScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ScriptService)); };
PayPalScriptService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PayPalScriptService, factory: function (t) { return PayPalScriptService.ɵfac(t); } });
    /** @nocollapse */
    PayPalScriptService.ctorParameters = () => [
        { type: ScriptService }
    ];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PayPalScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: ScriptService }]; }, null); })();
    return PayPalScriptService;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/paypal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let NgxPaypalComponent = /** @class */ (() => {
    class NgxPaypalComponent {
        /**
         * @param {?} paypalScriptService
         * @param {?} cdr
         * @param {?} ngZone
         */
        constructor(paypalScriptService, cdr, ngZone) {
            this.paypalScriptService = paypalScriptService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            /**
             * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
             * sharing base configuration. In such a case only a single component may register script.
             */
            this.registerScript = true;
            /**
             * Emitted when paypal script is loaded
             */
            this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
            this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            /**
             * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
             */
            this.initializePayPal = true;
        }
        /**
         * @param {?} content
         * @return {?}
         */
        set payPalButtonContainer(content) {
            this.payPalButtonContainerElem = content;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ngOnChanges(changes) {
            if (!this.payPalButtonContainerId) {
                this.payPalButtonContainerId = this.generateElementId();
            }
            // first time config setup
            /** @type {?} */
            const config = this.config;
            if (changes.config.isFirstChange()) {
                if (config && this.registerScript) {
                    this.initPayPalScript(config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    (payPal) => {
                        // store reference to paypal global script
                        this.payPal = payPal;
                        this.doPayPalCheck();
                    }));
                }
            }
            // changes to config
            if (!changes.config.isFirstChange()) {
                this.reinitialize(config);
            }
        }
        /**
         * @return {?}
         */
        ngOnDestroy() {
            this.paypalScriptService.destroyPayPalScript();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
        }
        /**
         * @return {?}
         */
        ngAfterViewInit() {
            this.doPayPalCheck();
        }
        /**
         * @param {?} payPal
         * @return {?}
         */
        customInit(payPal) {
            this.payPal = payPal;
            this.doPayPalCheck();
        }
        /**
         * @param {?} config
         * @return {?}
         */
        reinitialize(config) {
            this.config = config;
            this.payPal = undefined;
            this.paypalScriptService.destroyPayPalScript();
            this.payPalButtonContainerId = this.generateElementId();
            this.initializePayPal = true;
            if (this.payPalButtonContainerElem) {
                while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                    this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
                }
            }
            this.cdr.detectChanges();
            if (this.config) {
                if (!this.payPal) {
                    this.initPayPalScript(this.config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    (payPal) => {
                        // store reference to paypal global script
                        this.payPal = payPal;
                        this.doPayPalCheck();
                    }));
                }
                else {
                    this.doPayPalCheck();
                }
            }
        }
        /**
         * @private
         * @return {?}
         */
        doPayPalCheck() {
            if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
                // make sure that id is also set
                if (this.payPalButtonContainerElem.nativeElement.id) {
                    this.initializePayPal = false;
                    this.initPayPal(this.config, this.payPal);
                }
            }
        }
        /**
         * @private
         * @param {?} config
         * @param {?} initPayPal
         * @return {?}
         */
        initPayPalScript(config, initPayPal) {
            this.paypalScriptService.registerPayPalScript({
                clientId: config.clientId,
                commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
                currency: config.currency,
                vault: config.vault,
                extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
            }, (/**
             * @param {?} paypal
             * @return {?}
             */
            (paypal) => {
                this.scriptLoaded.next(paypal);
                initPayPal(paypal);
            }));
        }
        /**
         * @private
         * @return {?}
         */
        generateElementId() {
            return `ngx-captcha-id-${new Date().valueOf()}`;
        }
        /**
         * @private
         * @param {?} config
         * @param {?} paypal
         * @return {?}
         */
        initPayPal(config, paypal) {
            // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
                /** @type {?} */
                const createOrder = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error(`Both 'createOrderOnClient' and 'createOrderOnServer' are defined.
                    Please choose one or the other.`);
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error(`Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.
                    Please define one of these to create order.`);
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error(`Invalid state for 'createOrder'.`);
                    }));
                });
                /** @type {?} */
                const createSubscription = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createSubscription) {
                            return config.createSubscription(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                const onShippingChange = (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onShippingChange) {
                            return config.onShippingChange(data, actions);
                        }
                    }));
                });
                /** @type {?} */
                const buttonsConfig = Object.assign(Object.assign(Object.assign({ style: config.style, onApprove: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        return this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onApprove) {
                                config.onApprove(data, actions);
                            }
                            // capture on server
                            if (config.authorizeOnServer) {
                                return config.authorizeOnServer(data, actions);
                            }
                            // capture on client
                            /** @type {?} */
                            const onClientAuthorization = config.onClientAuthorization;
                            if (onClientAuthorization) {
                                actions.order.capture().then((/**
                                 * @param {?} details
                                 * @return {?}
                                 */
                                (details) => {
                                    this.ngZone.run((/**
                                     * @return {?}
                                     */
                                    () => {
                                        onClientAuthorization(details);
                                    }));
                                }));
                                return;
                            }
                        }));
                    }), onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onError) {
                                config.onError(error);
                            }
                        }));
                    }), onCancel: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onCancel) {
                                config.onCancel(data, actions);
                            }
                        }));
                    }), onClick: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onClick) {
                                config.onClick(data, actions);
                            }
                        }));
                    }), onInit: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    (data, actions) => {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            if (config.onInit) {
                                config.onInit(data, actions);
                            }
                        }));
                    }) }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder })), (config.createSubscription && { createSubscription })), (config.onShippingChange && { onShippingChange }));
                paypal.Buttons(buttonsConfig).render(`#${this.payPalButtonContainerId}`);
            }));
        }
    }
NgxPaypalComponent.ɵfac = function NgxPaypalComponent_Factory(t) { return new (t || NgxPaypalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](PayPalScriptService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); };
NgxPaypalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxPaypalComponent, selectors: [["ngx-paypal"]], viewQuery: function NgxPaypalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.payPalButtonContainer = _t.first);
    } }, inputs: { registerScript: "registerScript", config: "config" }, outputs: { scriptLoaded: "scriptLoaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[3, "id"], ["payPalButtonContainer", ""]], template: function NgxPaypalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.payPalButtonContainerId);
    } }, encapsulation: 2, changeDetection: 0 });
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = () => [
        { type: PayPalScriptService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ];
    NgxPaypalComponent.propDecorators = {
        config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['payPalButtonContainer', { static: false },] }]
    };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPaypalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                selector: 'ngx-paypal',
                template: `
    <div #payPalButtonContainer [id]="payPalButtonContainerId"></div>
    `
            }]
    }], function () { return [{ type: PayPalScriptService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }]; }, { registerScript: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scriptLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], payPalButtonContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['payPalButtonContainer', { static: false }]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return NgxPaypalComponent;
})();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-paypal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let NgxPayPalModule = /** @class */ (() => {
    class NgxPayPalModule {
    }
NgxPayPalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxPayPalModule });
NgxPayPalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxPayPalModule_Factory(t) { return new (t || NgxPayPalModule)(); }, providers: [
        ScriptService,
        PayPalScriptService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxPayPalModule, { declarations: function () { return [NgxPaypalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]; }, exports: function () { return [NgxPaypalComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPayPalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
                ],
                declarations: [
                    NgxPaypalComponent,
                ],
                exports: [
                    NgxPaypalComponent,
                ],
                providers: [
                    ScriptService,
                    PayPalScriptService
                ]
            }]
    }], null, null); })();
    return NgxPayPalModule;
})();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paypal-models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IPayPalConfig() { }
if (false) {}
/**
 * @record
 */
function IPayPalUrlConfig() { }
if (false) {}
/**
 * @record
 */
function IOrderDetails() { }
if (false) {}
/**
 * @record
 */
function IClientAuthorizeCallbackData() { }
if (false) {}
/**
 * @record
 */
function ILinkDescription() { }
if (false) {}
/**
 * @record
 */
function IQueryParam() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeData() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeActions() { }
if (false) {}
/**
 * @record
 */
function IAdvancedConfiguration() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackData() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICancelCallbackData() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IOnInitCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IInitCallbackData() { }
/**
 * @record
 */
function ICreateSubscriptionCallbackData() { }
/**
 * @record
 */
function IOnClickCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IPayPalButtonStyle() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderRequest() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionRequest() { }
if (false) {}
/**
 * @record
 */
function IPayer() { }
if (false) {}
/**
 * @record
 */
function IApplicationContext() { }
if (false) {}
/**
 * @record
 */
function IPaymentMethod() { }
if (false) {}
/**
 * @record
 */
function IPhone() { }
if (false) {}
/**
 * @record
 */
function ITaxInfo() { }
if (false) {}
/**
 * @record
 */
function IPhoneNumber() { }
if (false) {}
/**
 * @record
 */
function IPurchaseUnit() { }
if (false) {}
/**
 * @record
 */
function IPayee() { }
if (false) {}
/**
 * @record
 */
function IPaymentInstructions() { }
if (false) {}
/**
 * @record
 */
function IPlatformFee() { }
if (false) {}
/**
 * @record
 */
function ITransactionItem() { }
if (false) {}
/**
 * @record
 */
function ITax() { }
if (false) {}
/**
 * @record
 */
function IUnitAmount() { }
if (false) {}
/**
 * @record
 */
function IMoney() { }
if (false) {}
/**
 * @record
 */
function IUnitBreakdown() { }
if (false) {}
/**
 * @record
 */
function IPartyName() { }
if (false) {}
/**
 * @record
 */
function IAddressPortable() { }
if (false) {}
/**
 * @record
 */
function IShipping() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-paypal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-paypal.js.map

/***/ }),

/***/ "k+P5":
/*!*****************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-vehicle/filter-vehicle.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FilterVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterVehicleComponent", function() { return FilterVehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_current_vehicle_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/current-vehicle.service */ "QOaP");
/* harmony import */ var _services_vehicle_picker_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/vehicle-picker-modal.service */ "fABz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../checkbox/components/checkbox/checkbox.component */ "X6gf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function FilterVehicleComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "TEXT_VEHICLE_FILTER_HELP"), " ");
} }
function FilterVehicleComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "INPUT_ONLY_EXACT_FIT_PARTS_LABEL"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r2.vehicle.year, " ", ctx_r2.vehicle.make, " ", ctx_r2.vehicle.model, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.vehicle.engine);
} }
class FilterVehicleComponent {
    constructor(currentVehicle, vehiclePicker) {
        this.currentVehicle = currentVehicle;
        this.vehiclePicker = vehiclePicker;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false);
        this.vehicle = null;
        this.classFilterVehicle = true;
        this.changeFn = () => { };
        this.touchedFn = () => { };
    }
    set options(options) {
        if (options.vehicle) {
            this.currentVehicle.value = options.vehicle;
        }
    }
    ngOnInit() {
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.currentVehicle.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(vehicle => this.control.value && vehicle ? vehicle.id : null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(vehicleId => this.changeFn(vehicleId));
        this.currentVehicle.value$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(x => this.vehicle = x);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    writeValue(obj) {
        this.control.setValue(!!obj, { emitEvent: false });
    }
    showPicker() {
        this.vehiclePicker.show(this.vehicle).select$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(vehicle => {
            this.currentVehicle.value = vehicle;
            if (!vehicle) {
                this.control.setValue(null, { emitEvent: false });
            }
            if (this.control.value) {
                this.control.updateValueAndValidity();
            }
        });
    }
}
FilterVehicleComponent.ɵfac = function FilterVehicleComponent_Factory(t) { return new (t || FilterVehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_current_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["CurrentVehicleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_vehicle_picker_modal_service__WEBPACK_IMPORTED_MODULE_5__["VehiclePickerModalService"])); };
FilterVehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterVehicleComponent, selectors: [["app-filter-vehicle"]], hostVars: 2, hostBindings: function FilterVehicleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-vehicle", ctx.classFilterVehicle);
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterVehicleComponent),
                multi: true,
            },
        ])], decls: 7, vars: 5, consts: [["empty", ""], ["class", "filter-vehicle__list", 4, "ngIf", "ngIfElse"], [1, "filter-vehicle__button"], ["type", "button", 1, "btn", "btn-xs", "btn-secondary", 3, "click"], [1, "filter-vehicle__empty"], [1, "filter-vehicle__list"], [1, "filter-vehicle__item"], [1, "filter-vehicle__item-label"], [1, "filter-list__input", 3, "formControl"], [1, "filter-vehicle__item-title"], [1, "filter-vehicle__vehicle"], [1, "filter-vehicle__vehicle-title"], [1, "filter-vehicle__vehicle-subtitle"]], template: function FilterVehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterVehicleComponent_ng_template_0_Template, 3, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FilterVehicleComponent_ul_2_Template, 12, 8, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterVehicleComponent_Template_button_click_4_listener() { return ctx.showPicker(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vehicle)("ngIfElse", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "BUTTON_SELECT_VEHICLE"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItdmVoaWNsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterVehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-vehicle',
                templateUrl: './filter-vehicle.component.html',
                styleUrls: ['./filter-vehicle.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterVehicleComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: _services_current_vehicle_service__WEBPACK_IMPORTED_MODULE_4__["CurrentVehicleService"] }, { type: _services_vehicle_picker_modal_service__WEBPACK_IMPORTED_MODULE_5__["VehiclePickerModalService"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterVehicle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-vehicle']
        }] }); })();


/***/ }),

/***/ "kN33":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-range/filter-range.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FilterRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRangeComponent", function() { return FilterRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../language/services/language.service */ "YfDW");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");










const _c0 = function (a2, a3, a4) { return { animate: false, mouseEventsInterval: 10, rightToLeft: a2, floor: a3, ceil: a4, step: 1 }; };
function FilterRangeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-slider", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2013 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c0, ctx_r0.isRTL(), ctx_r0.options.min, ctx_r0.options.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 4, _r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, _r1.highValue));
} }
class FilterRangeComponent {
    constructor(platformId, language) {
        this.platformId = platformId;
        this.language = language;
        this.debouncedValue = null;
        this.isPlatformBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformBrowser"])(this.platformId);
        this.classFilterPrice = true;
        this.changeFn = () => { };
        this.touchedFn = () => { };
    }
    ngOnInit() {
        this.value = [this.options.min, this.options.max];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.value);
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(value => value[0] !== this.value[0] || value[1] !== this.value[1]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(value => this.debouncedValue = value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(350)).subscribe(value => {
            this.debouncedValue = null;
            this.changeFn(value);
            this.touchedFn();
        });
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.control.disable({ emitEvent: false });
        }
        else {
            this.control.enable({ emitEvent: false });
        }
    }
    writeValue(value) {
        if (this.debouncedValue !== null) {
            return;
        }
        this.value = value;
        this.control.setValue(this.value, { emitEvent: false });
    }
    isRTL() {
        return this.language.isRTL();
    }
}
FilterRangeComponent.ɵfac = function FilterRangeComponent_Factory(t) { return new (t || FilterRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"])); };
FilterRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterRangeComponent, selectors: [["app-filter-range"]], hostVars: 2, hostBindings: function FilterRangeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-range", ctx.classFilterPrice);
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterRangeComponent),
                multi: true,
            },
        ])], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "filter-range__slider"], [1, "ngx-slider-custom"], [3, "formControl", "options"], ["slider", ""], [1, "filter-range__title-button"], [1, "filter-range__title"], [1, "filter-range__min-value"], [1, "filter-range__max-value"]], template: function FilterRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterRangeComponent_ng_container_0_Template, 14, 12, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPlatformBrowser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], pipes: [_currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_6__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItcmFuZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-range',
                templateUrl: './filter-range.component.html',
                styleUrls: ['./filter-range.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterRangeComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterPrice: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-range']
        }] }); })();


/***/ }),

/***/ "kRhF":
/*!***********************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-order-success/page-order-success.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: PageOrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOrderSuccessComponent", function() { return PageOrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/address-card/address-card.component */ "d04G");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");













function PageOrderSuccessComponent_tr_60_div_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r5.name, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r5.value);
} }
function PageOrderSuccessComponent_tr_60_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageOrderSuccessComponent_tr_60_div_8_li_2_Template, 5, 2, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r2.options);
} }
function PageOrderSuccessComponent_tr_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PageOrderSuccessComponent_tr_60_div_8_Template, 3, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.url.product(item_r2.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.product.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.url.product(item_r2.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, "TABLE_QUANTITY") + ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, item_r2.price * item_r2.quantity));
} }
function PageOrderSuccessComponent_tbody_61_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "TABLE_TOTAL_" + total_r8.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, total_r8.price));
} }
function PageOrderSuccessComponent_tbody_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PageOrderSuccessComponent_tbody_61_tr_8_Template, 7, 6, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "TABLE_SUBTOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, ctx_r1.order.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.order.totals);
} }
const _c0 = function (a0) { return { number: a0 }; };
const _c1 = function (a0) { return { date: a0 }; };
class PageOrderSuccessComponent {
    constructor(route, accountApi, url) {
        this.route = route;
        this.accountApi = accountApi;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((params) => params.orderToken || this.route.snapshot.data.orderToken), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(orderToken => this.accountApi.getOrderByToken(orderToken)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(order => this.order = order);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
PageOrderSuccessComponent.ɵfac = function PageOrderSuccessComponent_Factory(t) { return new (t || PageOrderSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_4__["AccountApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
PageOrderSuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageOrderSuccessComponent, selectors: [["app-page-order-success"]], decls: 76, vars: 62, consts: [["layout", "spaceship-ledge-height"], [1, "block", "order-success"], [1, "container"], [1, "order-success__body"], [1, "order-success__header"], ["icon", "check-100", 1, "order-success__icon"], [1, "order-success__title"], [1, "order-success__subtitle"], [1, "order-success__actions"], ["routerLink", "/", 1, "btn", "btn-sm", "btn-secondary"], [1, "card", "order-success__meta"], [1, "order-success__meta-list"], [1, "order-success__meta-item"], [1, "order-success__meta-title"], [1, "order-success__meta-value"], [1, "card"], [1, "order-list"], [1, "order-list__header"], ["colspan", "2", 1, "order-list__column-label"], [1, "order-list__column-quantity"], [1, "order-list__column-total"], [1, "order-list__products"], [4, "ngFor", "ngForOf"], ["class", "order-list__subtotals", 4, "ngIf"], [1, "order-list__footer"], ["colspan", "3", 1, "order-list__column-label"], [1, "order-success__addresses"], [1, "order-success__address", 3, "address", "label"], ["layout", "before-footer"], [1, "order-list__column-image"], [1, "image", "image--type--product"], [1, "image__body", 3, "routerLink"], ["alt", "", 1, "image__tag", 3, "src"], [1, "order-list__column-product"], [3, "routerLink"], ["class", "order-list__options", 4, "ngIf"], [1, "order-list__options"], [1, "order-list__options-list"], ["class", "order-list__options-item", 4, "ngFor", "ngForOf"], [1, "order-list__options-item"], [1, "order-list__options-label"], [1, "order-list__options-value"], [1, "order-list__subtotals"]], template: function PageOrderSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-space", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currencyFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, PageOrderSuccessComponent_tr_60_Template, 15, 12, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PageOrderSuccessComponent_tbody_61_Template, 9, 7, "tbody", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tfoot", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "currencyFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-address-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-address-card", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-block-space", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 22, "HEADER_ORDER_SUCCESS_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 24, "HEADER_ORDER_SUCCESS_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 26, "BUTTON_GO_TO_HOMEPAGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 28, "TEXT_ORDER_NUMBER"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 30, "FORMAT_ORDER_NUMBER", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c0, ctx.order.number)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 33, "TEXT_CREATED_AT"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 35, "FORMAT_DATE_MEDIUM", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c1, ctx.order.createdAt)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 38, "TEXT_TOTAL"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 40, ctx.order.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 42, "TEXT_PAYMENT_METHOD"), ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order.payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 44, "TABLE_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 46, "TABLE_QUANTITY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 48, "TABLE_TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.order.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.order.totals == null ? null : ctx.order.totals.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 50, "TABLE_TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 52, ctx.order.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", ctx.order.shippingAddress)("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 54, "TEXT_SHIPPING_ADDRESS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("address", ctx.order.billingAddress)("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](74, 56, "TEXT_BILLING_ADDRESS"));
    } }, directives: [_shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_6__["BlockSpaceComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_components_address_card_address_card_component__WEBPACK_IMPORTED_MODULE_9__["AddressCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_11__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9yZGVyLXN1Y2Nlc3MuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageOrderSuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-order-success',
                templateUrl: './page-order-success.component.html',
                styleUrls: ['./page-order-success.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_4__["AccountApi"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] }]; }, null); })();


/***/ }),

/***/ "ktfE":
/*!***************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-rating/filter-rating.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: FilterRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRatingComponent", function() { return FilterRatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _checkbox_directives_checkbox_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../checkbox/directives/checkbox-group.directive */ "PbKZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../checkbox/components/checkbox/checkbox.component */ "X6gf");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ "fHWZ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");











function FilterRatingComponent_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count);
} }
const _c0 = function (a0) { return { stars: a0 }; };
function FilterRatingComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-rating", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FilterRatingComponent_li_1_span_8_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-rating__item--disabled", item_r1.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.rating)("disabled", item_r1.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, "TEXT_STARS", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, item_r1.rating)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.count);
} }
class FilterRatingComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([]);
        this.classFilterRating = true;
        this.changeFn = () => { };
        this.touchedFn = () => { };
    }
    ngOnInit() {
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(value => value !== this.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(value => this.changeFn(value));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    writeValue(obj) {
        this.control.setValue(this.value = obj, { emitEvent: false });
    }
    trackByRating(index, item) {
        return item.rating;
    }
}
FilterRatingComponent.ɵfac = function FilterRatingComponent_Factory(t) { return new (t || FilterRatingComponent)(); };
FilterRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterRatingComponent, selectors: [["app-filter-rating"]], hostVars: 2, hostBindings: function FilterRatingComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-rating", ctx.classFilterRating);
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterRatingComponent),
                multi: true,
            },
        ])], decls: 2, vars: 3, consts: [["appCheckboxGroup", "", 1, "filter-rating__list", 3, "formControl"], ["class", "filter-rating__item", 3, "filter-rating__item--disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "filter-rating__item"], [1, "filter-rating__item-label"], [1, "filter-rating__item-input", 3, "value", "disabled"], [1, "filter-rating__item-stars"], [3, "value"], [1, "filter-rating__item-title", "sr-only"], ["class", "filter-rating__item-counter", 4, "ngIf"], [1, "filter-rating__item-counter"]], template: function FilterRatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterRatingComponent_li_1_Template, 9, 12, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.items)("ngForTrackBy", ctx.trackByRating);
    } }, directives: [_checkbox_directives_checkbox_group_directive__WEBPACK_IMPORTED_MODULE_4__["CheckboxGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItcmF0aW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterRatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-rating',
                templateUrl: './filter-rating.component.html',
                styleUrls: ['./filter-rating.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterRatingComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterRating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-rating']
        }] }); })();


/***/ }),

/***/ "mgaL":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js ***!
  \****************************************************************************************************/
/*! exports provided: NgxSliderModule, ChangeContext, PointerType, LabelType, Options, ɵb, ɵc, ɵd, ɵa, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSliderModule", function() { return NgxSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeContext", function() { return ChangeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerType", function() { return PointerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelType", function() { return LabelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SliderElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SliderHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SliderLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TooltipWrapperComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-passive-events */ "A/ap");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_passive_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */



const _c0 = ["tooltipTemplate"];
const _c1 = ["leftOuterSelectionBar"];
const _c2 = ["rightOuterSelectionBar"];
const _c3 = ["fullBar"];
const _c4 = ["selectionBar"];
const _c5 = ["minHandle"];
const _c6 = ["maxHandle"];
const _c7 = ["floorLabel"];
const _c8 = ["ceilLabel"];
const _c9 = ["minHandleLabel"];
const _c10 = ["maxHandleLabel"];
const _c11 = ["combinedLabel"];
const _c12 = ["ticksElement"];
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-slider-tooltip-wrapper", 31);
} if (rf & 2) {
    const t_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx_r14.tooltipTemplate)("tooltip", t_r13.valueTooltip)("placement", t_r13.valueTooltipPlacement)("content", t_r13.value);
} }
function SliderComponent_span_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 32);
} if (rf & 2) {
    const t_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", t_r13.legend, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
const _c13 = function (a0) { return { "ngx-slider-selected": a0 }; };
function SliderComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-slider-tooltip-wrapper", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c13, t_r13.selected))("ngStyle", t_r13.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx_r12.tooltipTemplate)("tooltip", t_r13.tooltip)("placement", t_r13.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r13.value != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r13.legend != null);
} }
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c14 = function (a0, a1, a2) { return { tooltip: a0, placement: a1, content: a2 }; };
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c14, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
} }
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx_r1.tooltip)("data-tooltip-placement", ctx_r1.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.content, " ");
} }
const LabelType = {
    /** Label above low pointer */
    Low: 0,
    /** Label above high pointer */
    High: 1,
    /** Label for minimum slider value */
    Floor: 2,
    /** Label for maximum slider value */
    Ceil: 3,
    /** Label below legend tick */
    TickValue: 4,
};
LabelType[LabelType.Low] = 'Low';
LabelType[LabelType.High] = 'High';
LabelType[LabelType.Floor] = 'Floor';
LabelType[LabelType.Ceil] = 'Ceil';
LabelType[LabelType.TickValue] = 'TickValue';
/**
 * Slider options
 */
class Options {
    constructor() {
        /**
         * Minimum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.floor = 0;
        /**
         * Maximum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.ceil = null;
        /**
         * Step between each value.
         * Not applicable when using stepsArray.
         */
        this.step = 1;
        /**
         * The minimum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minRange = null;
        /**
         * The maximum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxRange = null;
        /**
         * Set to true to have a push behavior. When the min handle goes above the max,
         * the max is moved as well (and vice-versa). The range between min and max is
         * defined by the step option (defaults to 1) and can also be overriden by
         * the minRange option. Applies to range slider only.
         */
        this.pushRange = false;
        /**
         * The minimum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minLimit = null;
        /**
         * The maximum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxLimit = null;
        /**
         * Custom translate function. Use this if you want to translate values displayed
         * on the slider.
         */
        this.translate = null;
        /**
         * Custom function for combining overlapping labels in range slider.
         * It takes the min and max values (already translated with translate fuction)
         * and should return how these two values should be combined.
         * If not provided, the default function will join the two values with
         * ' - ' as separator.
         */
        this.combineLabels = null;
        /**
         * Use to display legend under ticks (thus, it needs to be used along with
         * showTicks or showTicksValues). The function will be called with each tick
         * value and returned content will be displayed under the tick as a legend.
         * If the returned value is null, then no legend is displayed under
         * the corresponding tick.You can also directly provide the legend values
         * in the stepsArray option.
         */
        this.getLegend = null;
        /**
         * If you want to display a slider with non linear/number steps.
         * Just pass an array with each slider value and that's it; the floor, ceil and step settings
         * of the slider will be computed automatically.
         * By default, the value model and valueHigh model values will be the value of the selected item
         * in the stepsArray.
         * They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
         * option to true.
         */
        this.stepsArray = null;
        /**
         * Set to true to bind the index of the selected item to value model and valueHigh model.
         */
        this.bindIndexForStepsArray = false;
        /**
         * When set to true and using a range slider, the range can be dragged by the selection bar.
         * Applies to range slider only.
         */
        this.draggableRange = false;
        /**
         * Same as draggableRange but the slider range can't be changed.
         * Applies to range slider only.
         */
        this.draggableRangeOnly = false;
        /**
         * Set to true to always show the selection bar before the slider handle.
         */
        this.showSelectionBar = false;
        /**
         * Set to true to always show the selection bar after the slider handle.
         */
        this.showSelectionBarEnd = false;
        /**
         * Set a number to draw the selection bar between this value and the slider handle.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.showSelectionBarFromValue = null;
        /**
         * Only for range slider. Set to true to visualize in different colour the areas
         * on the left/right (top/bottom for vertical range slider) of selection bar between the handles.
         */
        this.showOuterSelectionBars = false;
        /**
         * Set to true to hide pointer labels
         */
        this.hidePointerLabels = false;
        /**
         * Set to true to hide min / max labels
         */
        this.hideLimitLabels = false;
        /**
         * Set to false to disable the auto-hiding behavior of the limit labels.
         */
        this.autoHideLimitLabels = true;
        /**
         * Set to true to make the slider read-only.
         */
        this.readOnly = false;
        /**
         * Set to true to disable the slider.
         */
        this.disabled = false;
        /**
         * Throttle interval for mouse events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with mouse.
         */
        this.mouseEventsInterval = 50;
        /**
         * Throttle interval for touch events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with touch gesture.
         */
        this.touchEventsInterval = 50;
        /**
         * Throttle interval for input changes (changes to bindings or reactive form inputs)
         * This is provided to avoid a flood of events on frequent input binding changes affecting performance.
         */
        this.inputEventsInterval = 100;
        /**
         * Throttle interval for output changes (signalling changes to output bindings and user callbacks)
         * This is provided to avoid a flood of outgoing events affecting Angular app performance.
         */
        this.outputEventsInterval = 100;
        /**
         * Set to true to display a tick for each step of the slider.
         */
        this.showTicks = false;
        /**
         * Set to true to display a tick and the step value for each step of the slider..
         */
        this.showTicksValues = false;
        /* The step between each tick to display. If not set, the step value is used.
            Not used when ticksArray is specified. */
        this.tickStep = null;
        /* The step between displaying each tick step value.
            If not set, then tickStep or step is used, depending on which one is set. */
        this.tickValueStep = null;
        /**
         * Use to display ticks at specific positions.
         * The array contains the index of the ticks that should be displayed.
         * For example, [0, 1, 5] will display a tick for the first, second and sixth values.
         */
        this.ticksArray = null;
        /**
         * Used to display a tooltip when a tick is hovered.
         * Set to a function that returns the tooltip content for a given value.
         */
        this.ticksTooltip = null;
        /**
         * Same as ticksTooltip but for ticks values.
         */
        this.ticksValuesTooltip = null;
        /**
         * Set to true to display the slider vertically.
         * The slider will take the full height of its parent.
         * Changing this value at runtime is not currently supported.
         */
        this.vertical = false;
        /**
         * Function that returns the current color of the selection bar.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model
         * has already been updated.
         */
        this.getSelectionBarColor = null;
        /**
         * Function that returns the color of a tick. showTicks must be enabled.
         */
        this.getTickColor = null;
        /**
         * Function that returns the current color of a pointer.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model has already been updated.
         * To handle range slider pointers independently, you should evaluate pointerType within the given
         * function where "min" stands for value model and "max" for valueHigh model values.
         */
        this.getPointerColor = null;
        /**
         * Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
         * Left/bottom arrows: -1
         * Right/top arrows: +1
         * Page-down: -10%
         * Page-up: +10%
         * Home: minimum value
         * End: maximum value
         */
        this.keyboardSupport = true;
        /**
         * If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
         * so that the slider is rendered properly and the events are handled correctly.
         */
        this.scale = 1;
        /**
         * Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, they are not rounded
         * and can be between two steps.
         */
        this.enforceStep = true;
        /**
         * Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceRange = true;
        /**
         * Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceStepsArray = true;
        /**
         * Set to true to prevent to user from switching the min and max handles. Applies to range slider only.
         */
        this.noSwitching = false;
        /**
         * Set to true to only bind events on slider handles.
         */
        this.onlyBindHandles = false;
        /**
         * Set to true to show graphs right to left.
         * If vertical is true it will be from top to bottom and left / right arrow functions reversed.
         */
        this.rightToLeft = false;
        /**
         * Set to true to reverse keyboard navigation:
         * Right/top arrows: -1
         * Left/bottom arrows: +1
         * Page-up: -10%
         * Page-down: +10%
         * End: minimum value
         * Home: maximum value
         */
        this.reversedControls = false;
        /**
         * Set to true to keep the slider labels inside the slider bounds.
         */
        this.boundPointerLabels = true;
        /**
         * Set to true to use a logarithmic scale to display the slider.
         */
        this.logScale = false;
        /**
         * Function that returns the position on the slider for a given value.
         * The position must be a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customValueToPosition = null;
        /**
         * Function that returns the value for a given position on the slider.
         * The position is a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customPositionToValue = null;
        /**
         * Precision limit for calculated values.
         * Values used in calculations will be rounded to this number of significant digits
         * to prevent accumulating small floating-point errors.
         */
        this.precisionLimit = 12;
        /**
         * Use to display the selection bar as a gradient.
         * The given object must contain from and to properties which are colors.
         */
        this.selectionBarGradient = null;
        /**
         * Use to add a label directly to the slider for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabel = null;
        /**
         * Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledBy = null;
        /**
         * Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabelHigh = null;
        /**
         * Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledByHigh = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle
         */
        this.handleDimension = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar
         */
        this.barDimension = null;
        /**
         * Enable/disable CSS animations
         */
        this.animate = true;
        /**
         * Enable/disable CSS animations while moving the slider
         */
        this.animateOnMove = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const PointerType = {
    /** Low pointer */
    Min: 0,
    /** High pointer */
    Max: 1,
};
PointerType[PointerType.Min] = 'Min';
PointerType[PointerType.Max] = 'Max';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ChangeContext {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    static areArraysEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; ++i) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearValueToPosition(val, minVal, maxVal) {
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logValueToPosition(val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearPositionToValue(percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logPositionToValue(percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    }
    /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    static findStepIndex(modelValue, stepsArray) {
        /** @type {?} */
        const differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
        /** @type {?} */
        let minDifferenceIndex = 0;
        for (let index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with compatibility functions to support different browsers
 */
class CompatibilityHelper {
    /**
     * Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari)
     * @param {?} event
     * @return {?}
     */
    static isTouchEvent(event) {
        if ((/** @type {?} */ (window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    }
    /**
     * Detect presence of ResizeObserver API
     * @return {?}
     */
    static isResizeObserverAvailable() {
        return (/** @type {?} */ (window)).ResizeObserver !== undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with mathematical functions
 */
class MathHelper {
    /**
     * @param {?} value
     * @param {?} precisionLimit
     * @return {?}
     */
    static roundToPrecisionLimit(value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    }
    /**
     * @param {?} value
     * @param {?} modulo
     * @param {?} precisionLimit
     * @return {?}
     */
    static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
        /** @type {?} */
        const limit = Math.pow(10, -precisionLimit);
        return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
    }
    /**
     * @param {?} value
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    static clampToRange(value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EventListener {
    constructor() {
        this.eventName = null;
        this.events = null;
        this.eventsSubscription = null;
        this.teardownCallback = null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
        // Only use passive event listeners if the browser supports it
        if (detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport !== true) {
            return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
        }
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        nativeElement.addEventListener(eventName, observerCallback, { passive: true, capture: false });
        listener.teardownCallback = () => {
            nativeElement.removeEventListener(eventName, observerCallback, { passive: true, capture: false });
        };
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(throttleInterval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((event) => {
            callback(event);
        });
        return listener;
    }
    /**
     * @param {?} eventListener
     * @return {?}
     */
    detachEventListener(eventListener) {
        if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
            eventListener.eventsSubscription.unsubscribe();
            eventListener.eventsSubscription = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
            eventListener.events.complete();
            eventListener.events = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
            eventListener.teardownCallback();
            eventListener.teardownCallback = null;
        }
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachEventListener(nativeElement, eventName, callback, throttleInterval) {
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(throttleInterval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((event) => { callback(event); });
        return listener;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.changeDetectionRef = changeDetectionRef;
        this._position = 0;
        this._dimension = 0;
        this._alwaysHide = false;
        this._vertical = false;
        this._scale = 1;
        this.opacity = 1;
        this.visibility = 'visible';
        this.left = '';
        this.bottom = '';
        this.height = '';
        this.width = '';
        this.eventListeners = [];
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    get dimension() {
        return this._dimension;
    }
    /**
     * @return {?}
     */
    get alwaysHide() {
        return this._alwaysHide;
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    setAlwaysHide(hide) {
        this._alwaysHide = hide;
        if (hide) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'visible';
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.alwaysHide) {
            return;
        }
        this.opacity = 1;
    }
    /**
     * @return {?}
     */
    isVisible() {
        if (this.alwaysHide) {
            return false;
        }
        return this.opacity !== 0;
    }
    /**
     * @param {?} vertical
     * @return {?}
     */
    setVertical(vertical) {
        this._vertical = vertical;
        if (this._vertical) {
            this.left = '';
            this.width = '';
        }
        else {
            this.bottom = '';
            this.height = '';
        }
    }
    /**
     * @param {?} scale
     * @return {?}
     */
    setScale(scale) {
        this._scale = scale;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    setPosition(pos) {
        if (this._position !== pos && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._position = pos;
        if (this._vertical) {
            this.bottom = Math.round(pos) + 'px';
        }
        else {
            this.left = Math.round(pos) + 'px';
        }
    }
    /**
     * @return {?}
     */
    calculateDimension() {
        /** @type {?} */
        const val = this.getBoundingClientRect();
        if (this.vertical) {
            this._dimension = (val.bottom - val.top) * this.scale;
        }
        else {
            this._dimension = (val.right - val.left) * this.scale;
        }
    }
    /**
     * @param {?} dim
     * @return {?}
     */
    setDimension(dim) {
        if (this._dimension !== dim && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._dimension = dim;
        if (this._vertical) {
            this.height = Math.round(dim) + 'px';
        }
        else {
            this.width = Math.round(dim) + 'px';
        }
    }
    /**
     * @return {?}
     */
    getBoundingClientRect() {
        return this.elemRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    on(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    onPassive(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?=} eventName
     * @return {?}
     */
    off(eventName) {
        /** @type {?} */
        let listenersToKeep;
        /** @type {?} */
        let listenersToRemove;
        if (!ValueHelper.isNullOrUndefined(eventName)) {
            listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
            listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
        }
        else {
            listenersToKeep = [];
            listenersToRemove = this.eventListeners;
        }
        for (const listener of listenersToRemove) {
            this.eventListenerHelper.detachEventListener(listener);
        }
        this.eventListeners = listenersToKeep;
    }
    /**
     * @return {?}
     */
    isRefDestroyed() {
        return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    }
}
SliderElementDirective.ɵfac = function SliderElementDirective_Factory(t) { return new (t || SliderElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderElementDirective, selectors: [["", "ngxSliderElement", ""]], hostVars: 12, hostBindings: function SliderElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width);
    } } });
/** @nocollapse */
SliderElementDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SliderElementDirective.propDecorators = {
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.opacity',] }],
    visibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.visibility',] }],
    left: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.left',] }],
    bottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.bottom',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.height',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.width',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderElement]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.opacity']
        }], visibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.visibility']
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.left']
        }], bottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.bottom']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.height']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.width']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderHandleDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this.active = false;
        this.role = '';
        this.tabindex = '';
        this.ariaOrientation = '';
        this.ariaLabel = '';
        this.ariaLabelledBy = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.ariaValueMin = '';
        this.ariaValueMax = '';
    }
    /**
     * @return {?}
     */
    focus() {
        this.elemRef.nativeElement.focus();
    }
}
SliderHandleDirective.ɵfac = function SliderHandleDirective_Factory(t) { return new (t || SliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderHandleDirective, selectors: [["", "ngxSliderHandle", ""]], hostVars: 11, hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-active", ctx.active);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
SliderHandleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SliderHandleDirective.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.ngx-slider-active',] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.role',] }],
    tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.tabindex',] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-orientation',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-label',] }],
    ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-labelledby',] }],
    ariaValueNow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuenow',] }],
    ariaValueText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuetext',] }],
    ariaValueMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuemin',] }],
    ariaValueMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuemax',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderHandle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ngx-slider-active']
        }], role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.role']
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.tabindex']
        }], ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-orientation']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-label']
        }], ariaLabelledBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-labelledby']
        }], ariaValueNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuenow']
        }], ariaValueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuetext']
        }], ariaValueMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuemin']
        }], ariaValueMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuemax']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderLabelDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this._value = null;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        let recalculateDimension = false;
        if (!this.alwaysHide &&
            (ValueHelper.isNullOrUndefined(this.value) ||
                this.value.length !== value.length ||
                (this.value.length > 0 && this.dimension === 0))) {
            recalculateDimension = true;
        }
        this._value = value;
        this.elemRef.nativeElement.innerHTML = value;
        // Update dimension only when length of the label have changed
        if (recalculateDimension) {
            this.calculateDimension();
        }
    }
}
SliderLabelDirective.ɵfac = function SliderLabelDirective_Factory(t) { return new (t || SliderLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderLabelDirective, selectors: [["", "ngxSliderLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
SliderLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Tick {
    constructor() {
        this.selected = false;
        this.style = {};
        this.tooltip = null;
        this.tooltipPlacement = null;
        this.value = null;
        this.valueTooltip = null;
        this.valueTooltipPlacement = null;
        this.legend = null;
    }
}
class Dragging {
    constructor() {
        this.active = false;
        this.value = 0;
        this.difference = 0;
        this.position = 0;
        this.lowLimit = 0;
        this.highLimit = 0;
    }
}
class ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value && x.highValue === y.highValue;
    }
}
class ModelChange extends ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value &&
            x.highValue === y.highValue &&
            x.forceChange === y.forceChange;
    }
}
/** @type {?} */
const NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => SliderComponent),
    multi: true,
};
class SliderComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectionRef
     * @param {?} zone
     */
    constructor(renderer, elementRef, changeDetectionRef, zone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectionRef = changeDetectionRef;
        this.zone = zone;
        // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
        this.value = null;
        // Output for low value slider to support two-way bindings
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
        this.highValue = null;
        // Output for high value slider to support two-way bindings
        this.highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // An object with all the other options of the slider.
        // Each option can be updated at runtime and the slider will automatically be re-rendered.
        this.options = new Options();
        // Event emitted when user starts interaction with the slider
        this.userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Event emitted on each change coming from user interaction
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Event emitted when user finishes interaction with the slider
        this.userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.initHasRun = false;
        this.inputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.inputModelChangeSubscription = null;
        this.outputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.outputModelChangeSubscription = null;
        this.viewLowValue = null;
        this.viewHighValue = null;
        this.viewOptions = new Options();
        this.handleHalfDimension = 0;
        this.maxHandlePosition = 0;
        this.currentTrackingPointer = null;
        this.currentFocusPointer = null;
        this.firstKeyDown = false;
        this.touchId = null;
        this.dragging = new Dragging();
        // Host element class bindings
        this.sliderElementVerticalClass = false;
        this.sliderElementAnimateClass = false;
        this.sliderElementWithLegendClass = false;
        this.sliderElementDisabledAttr = null;
        this.barStyle = {};
        this.minPointerStyle = {};
        this.maxPointerStyle = {};
        this.fullBarTransparentClass = false;
        this.selectionBarDraggableClass = false;
        this.ticksUnderValuesClass = false;
        this.intermediateTicks = false;
        this.ticks = [];
        this.eventListenerHelper = null;
        this.onMoveEventListener = null;
        this.onEndEventListener = null;
        this.moving = false;
        this.resizeObserver = null;
        this.onTouchedCallback = null;
        this.onChangeCallback = null;
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @param {?} manualRefresh
     * @return {?}
     */
    set manualRefresh(manualRefresh) {
        this.unsubscribeManualRefresh();
        this.manualRefreshSubscription = manualRefresh.subscribe(() => {
            setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
        });
    }
    /**
     * @param {?} triggerFocus
     * @return {?}
     */
    set triggerFocus(triggerFocus) {
        this.unsubscribeTriggerFocus();
        this.triggerFocusSubscription = triggerFocus.subscribe((pointerType) => {
            this.focusPointer(pointerType);
        });
    }
    /**
     * @return {?}
     */
    get range() {
        return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
    }
    /**
     * @return {?}
     */
    get showTicks() {
        return this.viewOptions.showTicks;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
        // because these two settings are set through @HostBinding and Angular change detection
        // mechanism doesn't like them changing in ngAfterViewInit()
        this.updateDisabledState();
        this.updateVerticalState();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.applyOptions();
        this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        this.subscribeOutputModelChangeSubject(this.viewOptions.outputEventsInterval);
        // Once we apply options, we need to normalise model values for the first time
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateVerticalState(); // need to run this again to cover changes to slider elements
        this.manageElementsStyle();
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        this.initHandles();
        this.manageEventsBindings();
        this.subscribeResizeObserver();
        this.initHasRun = true;
        // Run change detection manually to resolve some issues when init procedure changes values used in the view
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Always apply options first
        if (!ValueHelper.isNullOrUndefined(changes["options"])) {
            this.onChangeOptions();
        }
        // Then value changes
        if (!ValueHelper.isNullOrUndefined(changes["value"]) ||
            !ValueHelper.isNullOrUndefined(changes["highValue"])) {
            this.inputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: false,
                internalChange: false
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unbindEvents();
        this.unsubscribeResizeObserver();
        this.unsubscribeInputModelChangeSubject();
        this.unsubscribeOutputModelChangeSubject();
        this.unsubscribeManualRefresh();
        this.unsubscribeTriggerFocus();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj instanceof Array) {
            this.value = obj[0];
            this.highValue = obj[1];
        }
        else {
            this.value = obj;
        }
        // ngOnChanges() is not called in this instance, so we need to communicate the change manually
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: false
        });
    }
    /**
     * @param {?} onChangeCallback
     * @return {?}
     */
    registerOnChange(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
    /**
     * @param {?} onTouchedCallback
     * @return {?}
     */
    registerOnTouched(onTouchedCallback) {
        this.onTouchedCallback = onTouchedCallback;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.viewOptions.disabled = isDisabled;
        this.updateDisabledState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.calculateViewDimensionsAndDetectChanges();
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeInputModelChangeSubject(interval) {
        this.inputModelChangeSubscription = this.inputModelChangeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ModelChange.compare), 
        // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
        // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((modelChange) => !modelChange.forceChange && !modelChange.internalChange), (!ValueHelper.isNullOrUndefined(interval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(interval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((modelChange) => this.applyInputModelChange(modelChange));
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeOutputModelChangeSubject(interval) {
        this.outputModelChangeSubscription = this.outputModelChangeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ModelChange.compare), (!ValueHelper.isNullOrUndefined(interval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(interval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((modelChange) => this.publishOutputModelChange(modelChange));
    }
    /**
     * @return {?}
     */
    subscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable()) {
            this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
            this.resizeObserver.observe(this.elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    unsubscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnMove() {
        if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
            this.onMoveEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnEnd() {
        if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onEndEventListener);
            this.onEndEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeInputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
            this.inputModelChangeSubscription.unsubscribe();
            this.inputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOutputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
            this.outputModelChangeSubscription.unsubscribe();
            this.outputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeManualRefresh() {
        if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
            this.manualRefreshSubscription.unsubscribe();
            this.manualRefreshSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeTriggerFocus() {
        if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
            this.triggerFocusSubscription.unsubscribe();
            this.triggerFocusSubscription = null;
        }
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerElement(pointerType) {
        if (pointerType === PointerType.Min) {
            return this.minHandleElement;
        }
        else if (pointerType === PointerType.Max) {
            return this.maxHandleElement;
        }
        return null;
    }
    /**
     * @return {?}
     */
    getCurrentTrackingValue() {
        if (this.currentTrackingPointer === PointerType.Min) {
            return this.viewLowValue;
        }
        else if (this.currentTrackingPointer === PointerType.Max) {
            return this.viewHighValue;
        }
        return null;
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    modelValueToViewValue(modelValue) {
        if (ValueHelper.isNullOrUndefined(modelValue)) {
            return NaN;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
        }
        return +modelValue;
    }
    /**
     * @param {?} viewValue
     * @return {?}
     */
    viewValueToModelValue(viewValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return this.getStepValue(viewValue);
        }
        return viewValue;
    }
    /**
     * @param {?} sliderValue
     * @return {?}
     */
    getStepValue(sliderValue) {
        /** @type {?} */
        const step = this.viewOptions.stepsArray[sliderValue];
        return (!ValueHelper.isNullOrUndefined(step)) ? step.value : NaN;
    }
    /**
     * @return {?}
     */
    applyViewChange() {
        this.value = this.viewValueToModelValue(this.viewLowValue);
        if (this.range) {
            this.highValue = this.viewValueToModelValue(this.viewHighValue);
        }
        this.outputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            userEventInitiated: true,
            forceChange: false
        });
        // At this point all changes are applied and outputs are emitted, so we should be done.
        // However, input changes are communicated in different stream and we need to be ready to
        // act on the next input change even if it is exactly the same as last input change.
        // Therefore, we send a special event to reset the stream.
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: true
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    applyInputModelChange(modelChange) {
        /** @type {?} */
        const normalisedModelChange = this.normaliseModelValues(modelChange);
        /** @type {?} */
        const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
        if (normalisationChange) {
            this.value = normalisedModelChange.value;
            this.highValue = normalisedModelChange.highValue;
        }
        this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateAriaAttributes();
        if (this.range) {
            this.updateCombinedLabel();
        }
        // At the end, we need to communicate the model change to the outputs as well
        // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
        this.outputModelChangeSubject.next({
            value: normalisedModelChange.value,
            highValue: normalisedModelChange.highValue,
            forceChange: normalisationChange,
            userEventInitiated: false
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    publishOutputModelChange(modelChange) {
        /** @type {?} */
        const emitOutputs = () => {
            this.valueChange.emit(modelChange.value);
            if (this.range) {
                this.highValueChange.emit(modelChange.highValue);
            }
            if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
                if (this.range) {
                    this.onChangeCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onChangeCallback(modelChange.value);
                }
            }
            if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
                if (this.range) {
                    this.onTouchedCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onTouchedCallback(modelChange.value);
                }
            }
        };
        if (modelChange.userEventInitiated) {
            // If this change was initiated by a user event, we can emit outputs in the same tick
            emitOutputs();
            this.userChange.emit(this.getChangeContext());
        }
        else {
            // But, if the change was initated by something else like a change in input bindings,
            // we need to wait until next tick to emit the outputs to keep Angular change detection happy
            setTimeout(() => { emitOutputs(); });
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    normaliseModelValues(input) {
        /** @type {?} */
        const normalisedInput = new ModelValues();
        normalisedInput.value = input.value;
        normalisedInput.highValue = input.highValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            // When using steps array, only round to nearest step in the array
            // No other enforcement can be done, as the step array may be out of order, and that is perfectly fine
            if (this.viewOptions.enforceStepsArray) {
                /** @type {?} */
                const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
                normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
                if (this.range) {
                    /** @type {?} */
                    const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
                    normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
                }
            }
            return normalisedInput;
        }
        if (this.viewOptions.enforceStep) {
            normalisedInput.value = this.roundStep(normalisedInput.value);
            if (this.range) {
                normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
            }
        }
        if (this.viewOptions.enforceRange) {
            normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
            if (this.range) {
                normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
            }
            // Make sure that range slider invariant (value <= highValue) is always satisfied
            if (this.range && input.value > input.highValue) {
                // We know that both values are now clamped correctly, they may just be in the wrong order
                // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
                if (this.viewOptions.noSwitching) {
                    normalisedInput.value = normalisedInput.highValue;
                }
                else {
                    /** @type {?} */
                    const tempValue = input.value;
                    normalisedInput.value = input.highValue;
                    normalisedInput.highValue = tempValue;
                }
            }
        }
        return normalisedInput;
    }
    /**
     * @return {?}
     */
    renormaliseModelValues() {
        /** @type {?} */
        const previousModelValues = {
            value: this.value,
            highValue: this.highValue
        };
        /** @type {?} */
        const normalisedModelValues = this.normaliseModelValues(previousModelValues);
        if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
            this.value = normalisedModelValues.value;
            this.highValue = normalisedModelValues.highValue;
            this.outputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: true,
                userEventInitiated: false
            });
        }
    }
    /**
     * @return {?}
     */
    onChangeOptions() {
        if (!this.initHasRun) {
            return;
        }
        /** @type {?} */
        const previousInputEventsInterval = this.viewOptions.inputEventsInterval;
        /** @type {?} */
        const previousOutputEventsInterval = this.viewOptions.outputEventsInterval;
        /** @type {?} */
        const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
        this.applyOptions();
        /** @type {?} */
        const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
        /** @type {?} */
        const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
        if (previousInputEventsInterval !== this.viewOptions.inputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        }
        if (previousOutputEventsInterval !== this.viewOptions.outputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.outputEventsInterval);
        }
        // With new options, we need to re-normalise model values if necessary
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.resetSlider(rebindEvents);
    }
    /**
     * @return {?}
     */
    applyOptions() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
        this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
        if (this.viewOptions.draggableRangeOnly) {
            this.viewOptions.draggableRange = true;
        }
        this.viewOptions.showTicks = this.viewOptions.showTicks ||
            this.viewOptions.showTicksValues ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
        if (this.viewOptions.showTicks &&
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
            this.intermediateTicks = true;
        }
        this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar ||
            this.viewOptions.showSelectionBarEnd ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            this.applyStepsArrayOptions();
        }
        else {
            this.applyFloorCeilOptions();
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
            this.viewOptions.combineLabels = (minValue, maxValue) => {
                return minValue + ' - ' + maxValue;
            };
        }
        if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
            throw Error('Can\'t use floor=0 with logarithmic scale');
        }
    }
    /**
     * @return {?}
     */
    applyStepsArrayOptions() {
        this.viewOptions.floor = 0;
        this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
        this.viewOptions.step = 1;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (modelValue) => {
                if (this.viewOptions.bindIndexForStepsArray) {
                    return String(this.getStepValue(modelValue));
                }
                return String(modelValue);
            };
        }
    }
    /**
     * @return {?}
     */
    applyFloorCeilOptions() {
        if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
            this.viewOptions.step = 1;
        }
        else {
            this.viewOptions.step = +this.viewOptions.step;
            if (this.viewOptions.step <= 0) {
                this.viewOptions.step = 1;
            }
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) ||
            ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
            throw Error('floor and ceil options must be supplied');
        }
        this.viewOptions.ceil = +this.viewOptions.ceil;
        this.viewOptions.floor = +this.viewOptions.floor;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (value) => String(value);
        }
    }
    /**
     * @param {?=} rebindEvents
     * @return {?}
     */
    resetSlider(rebindEvents = true) {
        this.manageElementsStyle();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        if (rebindEvents) {
            this.unbindEvents();
            this.manageEventsBindings();
        }
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.refocusPointerIfNeeded();
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    focusPointer(pointerType) {
        // If not supplied, use min pointer as default
        if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
            pointerType = PointerType.Min;
        }
        if (pointerType === PointerType.Min) {
            this.minHandleElement.focus();
        }
        else if (this.range && pointerType === PointerType.Max) {
            this.maxHandleElement.focus();
        }
    }
    /**
     * @return {?}
     */
    refocusPointerIfNeeded() {
        if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
            this.onPointerFocus(this.currentFocusPointer);
            /** @type {?} */
            const element = this.getPointerElement(this.currentFocusPointer);
            element.focus();
        }
    }
    /**
     * @return {?}
     */
    manageElementsStyle() {
        this.updateScale();
        this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        /** @type {?} */
        const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
        this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
        this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
        this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
        this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
        this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
        if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
            this.updateVerticalState();
            // The above change in host component class will not be applied until the end of this cycle
            // However, functions calculating the slider position expect the slider to be already styled as vertical
            // So as a workaround, we need to reset the slider once again to compute the correct values
            setTimeout(() => { this.resetSlider(); });
        }
        // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
        // after all is properly set up
        if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
            setTimeout(() => { this.sliderElementAnimateClass = this.viewOptions.animate; });
        }
    }
    /**
     * @return {?}
     */
    manageEventsBindings() {
        if (this.viewOptions.disabled || this.viewOptions.readOnly) {
            this.unbindEvents();
        }
        else {
            this.bindEvents();
        }
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    }
    /**
     * @return {?}
     */
    updateVerticalState() {
        this.sliderElementVerticalClass = this.viewOptions.vertical;
        for (const element of this.getAllSliderElements()) {
            // This is also called before ngAfterInit, so need to check that view child bindings work
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.setVertical(this.viewOptions.vertical);
            }
        }
    }
    /**
     * @return {?}
     */
    updateScale() {
        for (const element of this.getAllSliderElements()) {
            element.setScale(this.viewOptions.scale);
        }
    }
    /**
     * @return {?}
     */
    getAllSliderElements() {
        return [this.leftOuterSelectionBarElement,
            this.rightOuterSelectionBarElement,
            this.fullBarElement,
            this.selectionBarElement,
            this.minHandleElement,
            this.maxHandleElement,
            this.floorLabelElement,
            this.ceilLabelElement,
            this.minHandleLabelElement,
            this.maxHandleLabelElement,
            this.combinedLabelElement,
            this.ticksElement
        ];
    }
    /**
     * @return {?}
     */
    initHandles() {
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        /*
           the order here is important since the selection bar should be
           updated after the high handle but before the combined label
           */
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        if (this.range) {
            this.updateCombinedLabel();
        }
        this.updateTicksScale();
    }
    /**
     * @return {?}
     */
    addAccessibility() {
        this.updateAriaAttributes();
        this.minHandleElement.role = 'slider';
        if (this.viewOptions.keyboardSupport &&
            !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
            this.minHandleElement.tabindex = '0';
        }
        else {
            this.minHandleElement.tabindex = '';
        }
        this.minHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
            this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
            this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
        }
        if (this.range) {
            this.maxHandleElement.role = 'slider';
            if (this.viewOptions.keyboardSupport &&
                !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
                this.maxHandleElement.tabindex = '0';
            }
            else {
                this.maxHandleElement.tabindex = '';
            }
            this.maxHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
                this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
                this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
            }
        }
    }
    /**
     * @return {?}
     */
    updateAriaAttributes() {
        this.minHandleElement.ariaValueNow = (+this.value).toString();
        this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
        this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
        this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        if (this.range) {
            this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
            this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
            this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
            this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensions() {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
            this.minHandleElement.setDimension(this.viewOptions.handleDimension);
        }
        else {
            this.minHandleElement.calculateDimension();
        }
        /** @type {?} */
        const handleWidth = this.minHandleElement.dimension;
        this.handleHalfDimension = handleWidth / 2;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
            this.fullBarElement.setDimension(this.viewOptions.barDimension);
        }
        else {
            this.fullBarElement.calculateDimension();
        }
        this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
        if (this.initHasRun) {
            this.updateFloorLabel();
            this.updateCeilLabel();
            this.initHandles();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensionsAndDetectChanges() {
        this.calculateViewDimensions();
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * If the slider reference is already destroyed
     * @return {?} boolean - true if ref is destroyed
     */
    isRefDestroyed() {
        return this.changeDetectionRef['destroyed'];
    }
    /**
     * @return {?}
     */
    updateTicksScale() {
        if (!this.viewOptions.showTicks) {
            setTimeout(() => { this.sliderElementWithLegendClass = false; });
            return;
        }
        /** @type {?} */
        const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray)
            ? this.viewOptions.ticksArray
            : this.getTicksArray();
        /** @type {?} */
        const translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
        if (this.viewOptions.rightToLeft) {
            ticksArray.reverse();
        }
        /** @type {?} */
        const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep :
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step);
        /** @type {?} */
        let hasAtLeastOneLegend = false;
        /** @type {?} */
        const newTicks = ticksArray.map((value) => {
            /** @type {?} */
            let position = this.valueToPosition(value);
            if (this.viewOptions.vertical) {
                position = this.maxHandlePosition - position;
            }
            /** @type {?} */
            const translation = translate + '(' + Math.round(position) + 'px)';
            /** @type {?} */
            const tick = new Tick();
            tick.selected = this.isTickSelected(value);
            tick.style = {
                '-webkit-transform': translation,
                '-moz-transform': translation,
                '-o-transform': translation,
                '-ms-transform': translation,
                transform: translation,
            };
            if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
                tick.style['background-color'] = this.getSelectionBarColor();
            }
            if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
                tick.style['background-color'] = this.getTickColor(value);
            }
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
                tick.tooltip = this.viewOptions.ticksTooltip(value);
                tick.tooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
            }
            if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) &&
                MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
                tick.value = this.getDisplayValue(value, LabelType.TickValue);
                if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
                    tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
                    tick.valueTooltipPlacement = this.viewOptions.vertical
                        ? 'right'
                        : 'top';
                }
            }
            /** @type {?} */
            let legend = null;
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
                /** @type {?} */
                const step = this.viewOptions.stepsArray[value];
                if (!ValueHelper.isNullOrUndefined(step)) {
                    legend = step.legend;
                }
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
                legend = this.viewOptions.getLegend(value);
            }
            if (!ValueHelper.isNullOrUndefined(legend)) {
                tick.legend = legend;
                hasAtLeastOneLegend = true;
            }
            return tick;
        });
        setTimeout(() => { this.sliderElementWithLegendClass = hasAtLeastOneLegend; });
        // We should avoid re-creating the ticks array if possible
        // This both improves performance and makes CSS animations work correctly
        if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
            for (let i = 0; i < newTicks.length; ++i) {
                Object.assign(this.ticks[i], newTicks[i]);
            }
        }
        else {
            this.ticks = newTicks;
        }
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    getTicksArray() {
        /** @type {?} */
        const step = (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) ? this.viewOptions.tickStep : this.viewOptions.step;
        /** @type {?} */
        const ticksArray = [];
        /** @type {?} */
        const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
        for (let index = 0; index < numberOfValues; ++index) {
            ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
        }
        return ticksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTickSelected(value) {
        if (!this.range) {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                /** @type {?} */
                const center = this.viewOptions.showSelectionBarFromValue;
                if (this.viewLowValue > center &&
                    value >= center &&
                    value <= this.viewLowValue) {
                    return true;
                }
                else if (this.viewLowValue < center &&
                    value <= center &&
                    value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBarEnd) {
                if (value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
                return true;
            }
        }
        if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    updateFloorLabel() {
        if (!this.floorLabelElement.alwaysHide) {
            this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
            this.floorLabelElement.calculateDimension();
            /** @type {?} */
            const position = this.viewOptions.rightToLeft
                ? this.fullBarElement.dimension - this.floorLabelElement.dimension
                : 0;
            this.floorLabelElement.setPosition(position);
        }
    }
    /**
     * @return {?}
     */
    updateCeilLabel() {
        if (!this.ceilLabelElement.alwaysHide) {
            this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
            this.ceilLabelElement.calculateDimension();
            /** @type {?} */
            const position = this.viewOptions.rightToLeft
                ? 0
                : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
            this.ceilLabelElement.setPosition(position);
        }
    }
    /**
     * @param {?} which
     * @param {?} newPos
     * @return {?}
     */
    updateHandles(which, newPos) {
        if (which === PointerType.Min) {
            this.updateLowHandle(newPos);
        }
        else if (which === PointerType.Max) {
            this.updateHighHandle(newPos);
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        if (this.range) {
            this.updateCombinedLabel();
        }
    }
    /**
     * @param {?} labelType
     * @param {?} newPos
     * @return {?}
     */
    getHandleLabelPos(labelType, newPos) {
        /** @type {?} */
        const labelDimension = (labelType === PointerType.Min)
            ? this.minHandleLabelElement.dimension
            : this.maxHandleLabelElement.dimension;
        /** @type {?} */
        const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
        /** @type {?} */
        const endOfBarPos = this.fullBarElement.dimension - labelDimension;
        if (!this.viewOptions.boundPointerLabels) {
            return nearHandlePos;
        }
        if ((this.viewOptions.rightToLeft && labelType === PointerType.Min) ||
            (!this.viewOptions.rightToLeft && labelType === PointerType.Max)) {
            return Math.min(nearHandlePos, endOfBarPos);
        }
        else {
            return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateLowHandle(newPos) {
        this.minHandleElement.setPosition(newPos);
        this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
        this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.minPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Min),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateHighHandle(newPos) {
        this.maxHandleElement.setPosition(newPos);
        this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
        this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.maxPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Max),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @return {?}
     */
    updateFloorAndCeilLabelsVisibility() {
        // Show based only on hideLimitLabels if pointer labels are hidden
        if (this.viewOptions.hidePointerLabels) {
            return;
        }
        /** @type {?} */
        let floorLabelHidden = false;
        /** @type {?} */
        let ceilLabelHidden = false;
        /** @type {?} */
        const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
        /** @type {?} */
        const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
        /** @type {?} */
        const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
        /** @type {?} */
        const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
        /** @type {?} */
        const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
        if (isMinLabelAtFloor) {
            floorLabelHidden = true;
            this.floorLabelElement.hide();
        }
        else {
            floorLabelHidden = false;
            this.floorLabelElement.show();
        }
        if (isMinLabelAtCeil) {
            ceilLabelHidden = true;
            this.ceilLabelElement.hide();
        }
        else {
            ceilLabelHidden = false;
            this.ceilLabelElement.show();
        }
        if (this.range) {
            /** @type {?} */
            const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
            /** @type {?} */
            const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
            if (hideCeil) {
                this.ceilLabelElement.hide();
            }
            else if (!ceilLabelHidden) {
                this.ceilLabelElement.show();
            }
            // Hide or show floor label
            if (hideFloor) {
                this.floorLabelElement.hide();
            }
            else if (!floorLabelHidden) {
                this.floorLabelElement.show();
            }
        }
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelBelowFloorLabel(label) {
        /** @type {?} */
        const pos = label.position;
        /** @type {?} */
        const dim = label.dimension;
        /** @type {?} */
        const floorPos = this.floorLabelElement.position;
        /** @type {?} */
        const floorDim = this.floorLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos + dim >= floorPos - 2
            : pos <= floorPos + floorDim + 2;
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelAboveCeilLabel(label) {
        /** @type {?} */
        const pos = label.position;
        /** @type {?} */
        const dim = label.dimension;
        /** @type {?} */
        const ceilPos = this.ceilLabelElement.position;
        /** @type {?} */
        const ceilDim = this.ceilLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos <= ceilPos + ceilDim + 2
            : pos + dim >= ceilPos - 2;
    }
    /**
     * @return {?}
     */
    updateSelectionBar() {
        /** @type {?} */
        let position = 0;
        /** @type {?} */
        let dimension = 0;
        /** @type {?} */
        const isSelectionBarFromRight = this.viewOptions.rightToLeft
            ? !this.viewOptions.showSelectionBarEnd
            : this.viewOptions.showSelectionBarEnd;
        /** @type {?} */
        const positionForRange = this.viewOptions.rightToLeft
            ? this.maxHandleElement.position + this.handleHalfDimension
            : this.minHandleElement.position + this.handleHalfDimension;
        if (this.range) {
            dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
            position = positionForRange;
        }
        else {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                /** @type {?} */
                const center = this.viewOptions.showSelectionBarFromValue;
                /** @type {?} */
                const centerPosition = this.valueToPosition(center);
                /** @type {?} */
                const isModelGreaterThanCenter = this.viewOptions.rightToLeft
                    ? this.viewLowValue <= center
                    : this.viewLowValue > center;
                if (isModelGreaterThanCenter) {
                    dimension = this.minHandleElement.position - centerPosition;
                    position = centerPosition + this.handleHalfDimension;
                }
                else {
                    dimension = centerPosition - this.minHandleElement.position;
                    position = this.minHandleElement.position + this.handleHalfDimension;
                }
            }
            else if (isSelectionBarFromRight) {
                dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
                position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
            }
            else {
                dimension = this.minHandleElement.position + this.handleHalfDimension;
                position = 0;
            }
        }
        this.selectionBarElement.setDimension(dimension);
        this.selectionBarElement.setPosition(position);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            if (this.viewOptions.rightToLeft) {
                this.rightOuterSelectionBarElement.setDimension(position);
                this.rightOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.leftOuterSelectionBarElement.setPosition(position + dimension);
            }
            else {
                this.leftOuterSelectionBarElement.setDimension(position);
                this.leftOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.rightOuterSelectionBarElement.setPosition(position + dimension);
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
            /** @type {?} */
            const color = this.getSelectionBarColor();
            this.barStyle = {
                backgroundColor: color,
            };
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
            /** @type {?} */
            const offset = (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue))
                ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue)
                : 0;
            /** @type {?} */
            const reversed = (offset - position > 0 && !isSelectionBarFromRight) || (offset - position <= 0 && isSelectionBarFromRight);
            /** @type {?} */
            const direction = this.viewOptions.vertical
                ? reversed ? 'bottom' : 'top'
                : reversed ? 'left' : 'right';
            this.barStyle = {
                backgroundImage: 'linear-gradient(to ' +
                    direction +
                    ', ' +
                    this.viewOptions.selectionBarGradient.from +
                    ' 0%,' +
                    this.viewOptions.selectionBarGradient.to +
                    ' 100%)',
            };
            if (this.viewOptions.vertical) {
                this.barStyle.backgroundPosition =
                    'center ' +
                        (offset +
                            dimension +
                            position +
                            (reversed ? -this.handleHalfDimension : 0)) +
                        'px';
                this.barStyle.backgroundSize =
                    '100% ' + (this.fullBarElement.dimension - this.handleHalfDimension) + 'px';
            }
            else {
                this.barStyle.backgroundPosition =
                    offset -
                        position +
                        (reversed ? this.handleHalfDimension : 0) +
                        'px center';
                this.barStyle.backgroundSize =
                    this.fullBarElement.dimension - this.handleHalfDimension + 'px 100%';
            }
        }
    }
    /**
     * @return {?}
     */
    getSelectionBarColor() {
        if (this.range) {
            return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
        }
        return this.viewOptions.getSelectionBarColor(this.value);
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerColor(pointerType) {
        if (pointerType === PointerType.Max) {
            return this.viewOptions.getPointerColor(this.highValue, pointerType);
        }
        return this.viewOptions.getPointerColor(this.value, pointerType);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getTickColor(value) {
        return this.viewOptions.getTickColor(value);
    }
    /**
     * @return {?}
     */
    updateCombinedLabel() {
        /** @type {?} */
        let isLabelOverlap = null;
        if (this.viewOptions.rightToLeft) {
            isLabelOverlap =
                this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
        }
        else {
            isLabelOverlap =
                this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
        }
        if (isLabelOverlap) {
            /** @type {?} */
            const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
            /** @type {?} */
            const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
            /** @type {?} */
            const combinedLabelValue = this.viewOptions.rightToLeft
                ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue)
                : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
            this.combinedLabelElement.setValue(combinedLabelValue);
            /** @type {?} */
            const pos = this.viewOptions.boundPointerLabels
                ? Math.min(Math.max(this.selectionBarElement.position +
                    this.selectionBarElement.dimension / 2 -
                    this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension)
                : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
            this.combinedLabelElement.setPosition(pos);
            this.minHandleLabelElement.hide();
            this.maxHandleLabelElement.hide();
            this.combinedLabelElement.show();
        }
        else {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
            this.updateLowHandle(this.valueToPosition(this.viewLowValue));
            this.maxHandleLabelElement.show();
            this.minHandleLabelElement.show();
            this.combinedLabelElement.hide();
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} value
     * @param {?} which
     * @return {?}
     */
    getDisplayValue(value, which) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            value = this.getStepValue(value);
        }
        return this.viewOptions.translate(value, which);
    }
    /**
     * @param {?} value
     * @param {?=} customStep
     * @return {?}
     */
    roundStep(value, customStep) {
        /** @type {?} */
        const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
        /** @type {?} */
        let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
        steppedDifference = Math.round(steppedDifference) * step;
        return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    valueToPosition(val) {
        /** @type {?} */
        let fn = ValueHelper.linearValueToPosition;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
            fn = this.viewOptions.customValueToPosition;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logValueToPosition;
        }
        val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
        /** @type {?} */
        let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
        if (ValueHelper.isNullOrUndefined(percent)) {
            percent = 0;
        }
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        return percent * this.maxHandlePosition;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    positionToValue(position) {
        /** @type {?} */
        let percent = position / this.maxHandlePosition;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        /** @type {?} */
        let fn = ValueHelper.linearPositionToValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
            fn = this.viewOptions.customPositionToValue;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logPositionToValue;
        }
        /** @type {?} */
        const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
        return !ValueHelper.isNullOrUndefined(value) ? value : 0;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventXY(event, targetTouchId) {
        if (event instanceof MouseEvent) {
            return this.viewOptions.vertical ? event.clientY : event.clientX;
        }
        /** @type {?} */
        let touchIndex = 0;
        /** @type {?} */
        const touches = event.touches;
        if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
            for (let i = 0; i < touches.length; i++) {
                if (touches[i].identifier === targetTouchId) {
                    touchIndex = i;
                    break;
                }
            }
        }
        // Return the target touch or if the target touch was not found in the event
        // returns the coordinates of the first touch
        return this.viewOptions.vertical ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventPosition(event, targetTouchId) {
        /** @type {?} */
        const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const sliderPos = this.viewOptions.vertical ?
            sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
        /** @type {?} */
        let eventPos = 0;
        if (this.viewOptions.vertical) {
            eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
        }
        else {
            eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
        }
        return eventPos * this.viewOptions.scale - this.handleHalfDimension;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getNearestHandle(event) {
        if (!this.range) {
            return PointerType.Min;
        }
        /** @type {?} */
        const position = this.getEventPosition(event);
        /** @type {?} */
        const distanceMin = Math.abs(position - this.minHandleElement.position);
        /** @type {?} */
        const distanceMax = Math.abs(position - this.maxHandleElement.position);
        if (distanceMin < distanceMax) {
            return PointerType.Min;
        }
        else if (distanceMin > distanceMax) {
            return PointerType.Max;
        }
        else if (!this.viewOptions.rightToLeft) {
            // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
            return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
        }
        // reverse in rtl
        return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    /**
     * @return {?}
     */
    bindEvents() {
        /** @type {?} */
        const draggableRange = this.viewOptions.draggableRange;
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.on('mousedown', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.on('mousedown', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.on('mousedown', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.on('mousedown', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.on('mousedown', (event) => this.onStart(null, event, true, true, true, true));
            }
        }
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.onPassive('touchstart', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.onPassive('touchstart', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.onPassive('touchstart', (event) => this.onStart(null, event, false, false, true, true));
            }
        }
        if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.on('focus', () => this.onPointerFocus(PointerType.Min));
            if (this.range) {
                this.maxHandleElement.on('focus', () => this.onPointerFocus(PointerType.Max));
            }
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getOptionsInfluencingEventBindings(options) {
        return [
            options.disabled,
            options.readOnly,
            options.draggableRange,
            options.draggableRangeOnly,
            options.onlyBindHandles,
            options.keyboardSupport
        ];
    }
    /**
     * @return {?}
     */
    unbindEvents() {
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        for (const element of this.getAllSliderElements()) {
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.off();
            }
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} draggableRange
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        if (draggableRange) {
            this.onDragStart(pointerType, event, bindMove, bindEnd);
        }
        else {
            this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        event.stopPropagation();
        // Only call preventDefault() when handling non-passive events (passive events don't need it)
        if (!CompatibilityHelper.isTouchEvent(event) || !detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            event.preventDefault();
        }
        this.moving = false;
        // We have to do this in case the HTML where the sliders are on
        // have been animated into view.
        this.calculateViewDimensions();
        if (ValueHelper.isNullOrUndefined(pointerType)) {
            pointerType = this.getNearestHandle(event);
        }
        this.currentTrackingPointer = pointerType;
        /** @type {?} */
        const pointerElement = this.getPointerElement(pointerType);
        pointerElement.active = true;
        if (this.viewOptions.keyboardSupport) {
            pointerElement.focus();
        }
        if (bindMove) {
            this.unsubscribeOnMove();
            /** @type {?} */
            const onMoveCallback = (e) => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchmove', onMoveCallback, this.viewOptions.touchEventsInterval);
            }
            else {
                this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, 'mousemove', onMoveCallback, this.viewOptions.mouseEventsInterval);
            }
        }
        if (bindEnd) {
            this.unsubscribeOnEnd();
            /** @type {?} */
            const onEndCallback = (e) => this.onEnd(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchend', onEndCallback);
            }
            else {
                this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, 'mouseup', onEndCallback);
            }
        }
        this.userChangeStart.emit(this.getChangeContext());
        if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined((/** @type {?} */ (event)).changedTouches)) {
            // Store the touch identifier
            if (ValueHelper.isNullOrUndefined(this.touchId)) {
                this.touchId = (/** @type {?} */ (event)).changedTouches[0].identifier;
            }
        }
        // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
        // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
        // As a workaround, we simulate the first move event and the end event if it's necessary
        if (simulateImmediateMove) {
            this.onMove(event, true);
        }
        if (simulateImmediateEnd) {
            this.onEnd(event);
        }
    }
    /**
     * @param {?} event
     * @param {?=} fromTick
     * @return {?}
     */
    onMove(event, fromTick) {
        /** @type {?} */
        let touchForThisSlider = null;
        if (CompatibilityHelper.isTouchEvent(event)) {
            /** @type {?} */
            const changedTouches = (/** @type {?} */ (event)).changedTouches;
            for (let i = 0; i < changedTouches.length; i++) {
                if (changedTouches[i].identifier === this.touchId) {
                    touchForThisSlider = changedTouches[i];
                    break;
                }
            }
            if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
                return;
            }
        }
        if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
            if (this.moving) {
                this.sliderElementAnimateClass = false;
            }
        }
        this.moving = true;
        /** @type {?} */
        const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider)
            ? this.getEventPosition(event, touchForThisSlider.identifier)
            : this.getEventPosition(event);
        /** @type {?} */
        let newValue;
        /** @type {?} */
        const ceilValue = this.viewOptions.rightToLeft
            ? this.viewOptions.floor
            : this.viewOptions.ceil;
        /** @type {?} */
        const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
        if (newPos <= 0) {
            newValue = floorValue;
        }
        else if (newPos >= this.maxHandlePosition) {
            newValue = ceilValue;
        }
        else {
            newValue = this.positionToValue(newPos);
            if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
                newValue = this.roundStep(newValue, this.viewOptions.tickStep);
            }
            else {
                newValue = this.roundStep(newValue);
            }
        }
        this.positionTrackingHandle(newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnd(event) {
        if (CompatibilityHelper.isTouchEvent(event)) {
            /** @type {?} */
            const changedTouches = (/** @type {?} */ (event)).changedTouches;
            if (changedTouches[0].identifier !== this.touchId) {
                return;
            }
        }
        this.moving = false;
        if (this.viewOptions.animate) {
            this.sliderElementAnimateClass = true;
        }
        this.touchId = null;
        if (!this.viewOptions.keyboardSupport) {
            this.minHandleElement.active = false;
            this.maxHandleElement.active = false;
            this.currentTrackingPointer = null;
        }
        this.dragging.active = false;
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    onPointerFocus(pointerType) {
        /** @type {?} */
        const pointerElement = this.getPointerElement(pointerType);
        pointerElement.on('blur', () => this.onPointerBlur(pointerElement));
        pointerElement.on('keydown', (event) => this.onKeyboardEvent(event));
        pointerElement.on('keyup', () => this.onKeyUp());
        pointerElement.active = true;
        this.currentTrackingPointer = pointerType;
        this.currentFocusPointer = pointerType;
        this.firstKeyDown = true;
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.firstKeyDown = true;
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointer
     * @return {?}
     */
    onPointerBlur(pointer) {
        pointer.off('blur');
        pointer.off('keydown');
        pointer.off('keyup');
        pointer.active = false;
        if (ValueHelper.isNullOrUndefined(this.touchId)) {
            this.currentTrackingPointer = null;
            this.currentFocusPointer = null;
        }
    }
    /**
     * @param {?} currentValue
     * @return {?}
     */
    getKeyActions(currentValue) {
        /** @type {?} */
        const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
        /** @type {?} */
        let increaseStep = currentValue + this.viewOptions.step;
        /** @type {?} */
        let decreaseStep = currentValue - this.viewOptions.step;
        /** @type {?} */
        let increasePage = currentValue + valueRange / 10;
        /** @type {?} */
        let decreasePage = currentValue - valueRange / 10;
        if (this.viewOptions.reversedControls) {
            increaseStep = currentValue - this.viewOptions.step;
            decreaseStep = currentValue + this.viewOptions.step;
            increasePage = currentValue - valueRange / 10;
            decreasePage = currentValue + valueRange / 10;
        }
        /** @type {?} */
        const actions = {
            UP: increaseStep,
            DOWN: decreaseStep,
            LEFT: decreaseStep,
            RIGHT: increaseStep,
            PAGEUP: increasePage,
            PAGEDOWN: decreasePage,
            HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
            END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil,
        };
        // right to left means swapping right and left arrows
        if (this.viewOptions.rightToLeft) {
            actions["LEFT"] = increaseStep;
            actions["RIGHT"] = decreaseStep;
            // right to left and vertical means we also swap up and down
            if (this.viewOptions.vertical) {
                actions["UP"] = decreaseStep;
                actions["DOWN"] = increaseStep;
            }
        }
        return actions;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyboardEvent(event) {
        /** @type {?} */
        const currentValue = this.getCurrentTrackingValue();
        /** @type {?} */
        const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode)
            ? event.keyCode
            : event.which;
        /** @type {?} */
        const keys = {
            38: 'UP',
            40: 'DOWN',
            37: 'LEFT',
            39: 'RIGHT',
            33: 'PAGEUP',
            34: 'PAGEDOWN',
            36: 'HOME',
            35: 'END',
        };
        /** @type {?} */
        const actions = this.getKeyActions(currentValue);
        /** @type {?} */
        const key = keys[keyCode];
        /** @type {?} */
        const action = actions[key];
        if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
            return;
        }
        event.preventDefault();
        if (this.firstKeyDown) {
            this.firstKeyDown = false;
            this.userChangeStart.emit(this.getChangeContext());
        }
        /** @type {?} */
        const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
        /** @type {?} */
        const newValue = this.roundStep(actionValue);
        if (!this.viewOptions.draggableRangeOnly) {
            this.positionTrackingHandle(newValue);
        }
        else {
            /** @type {?} */
            const difference = this.viewHighValue - this.viewLowValue;
            /** @type {?} */
            let newMinValue;
            /** @type {?} */
            let newMaxValue;
            if (this.currentTrackingPointer === PointerType.Min) {
                newMinValue = newValue;
                newMaxValue = newValue + difference;
                if (newMaxValue > this.viewOptions.ceil) {
                    newMaxValue = this.viewOptions.ceil;
                    newMinValue = newMaxValue - difference;
                }
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                newMaxValue = newValue;
                newMinValue = newValue - difference;
                if (newMinValue < this.viewOptions.floor) {
                    newMinValue = this.viewOptions.floor;
                    newMaxValue = newMinValue + difference;
                }
            }
            this.positionTrackingBar(newMinValue, newMaxValue);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @return {?}
     */
    onDragStart(pointerType, event, bindMove, bindEnd) {
        /** @type {?} */
        const position = this.getEventPosition(event);
        this.dragging = new Dragging();
        this.dragging.active = true;
        this.dragging.value = this.positionToValue(position);
        this.dragging.difference = this.viewHighValue - this.viewLowValue;
        this.dragging.lowLimit = this.viewOptions.rightToLeft
            ? this.minHandleElement.position - position
            : position - this.minHandleElement.position;
        this.dragging.highLimit = this.viewOptions.rightToLeft
            ? position - this.maxHandleElement.position
            : this.maxHandleElement.position - position;
        this.onStart(pointerType, event, bindMove, bindEnd);
    }
    /**
     * Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMinValue(newPos, outOfBounds, isAbove) {
        /** @type {?} */
        const isRTL = this.viewOptions.rightToLeft;
        /** @type {?} */
        let value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor
                    : this.viewOptions.ceil - this.dragging.difference;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil - this.dragging.difference
                    : this.viewOptions.floor;
            }
        }
        else {
            value = isRTL
                ? this.positionToValue(newPos + this.dragging.lowLimit)
                : this.positionToValue(newPos - this.dragging.lowLimit);
        }
        return this.roundStep(value);
    }
    /**
     * Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMaxValue(newPos, outOfBounds, isAbove) {
        /** @type {?} */
        const isRTL = this.viewOptions.rightToLeft;
        /** @type {?} */
        let value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor + this.dragging.difference
                    : this.viewOptions.ceil;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil
                    : this.viewOptions.floor + this.dragging.difference;
            }
        }
        else {
            if (isRTL) {
                value =
                    this.positionToValue(newPos + this.dragging.lowLimit) +
                        this.dragging.difference;
            }
            else {
                value =
                    this.positionToValue(newPos - this.dragging.lowLimit) +
                        this.dragging.difference;
            }
        }
        return this.roundStep(value);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDragMove(event) {
        /** @type {?} */
        const newPos = this.getEventPosition(event);
        if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
            if (this.moving) {
                this.sliderElementAnimateClass = false;
            }
        }
        this.moving = true;
        /** @type {?} */
        let ceilLimit;
        /** @type {?} */
        let floorLimit;
        /** @type {?} */
        let floorHandleElement;
        /** @type {?} */
        let ceilHandleElement;
        if (this.viewOptions.rightToLeft) {
            ceilLimit = this.dragging.lowLimit;
            floorLimit = this.dragging.highLimit;
            floorHandleElement = this.maxHandleElement;
            ceilHandleElement = this.minHandleElement;
        }
        else {
            ceilLimit = this.dragging.highLimit;
            floorLimit = this.dragging.lowLimit;
            floorHandleElement = this.minHandleElement;
            ceilHandleElement = this.maxHandleElement;
        }
        /** @type {?} */
        const isUnderFloorLimit = (newPos <= floorLimit);
        /** @type {?} */
        const isOverCeilLimit = (newPos >= this.maxHandlePosition - ceilLimit);
        /** @type {?} */
        let newMinValue;
        /** @type {?} */
        let newMaxValue;
        if (isUnderFloorLimit) {
            if (floorHandleElement.position === 0) {
                return;
            }
            newMinValue = this.getMinValue(newPos, true, false);
            newMaxValue = this.getMaxValue(newPos, true, false);
        }
        else if (isOverCeilLimit) {
            if (ceilHandleElement.position === this.maxHandlePosition) {
                return;
            }
            newMaxValue = this.getMaxValue(newPos, true, true);
            newMinValue = this.getMinValue(newPos, true, true);
        }
        else {
            newMinValue = this.getMinValue(newPos, false, false);
            newMaxValue = this.getMaxValue(newPos, false, false);
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
    }
    /**
     * @param {?} newMinValue
     * @param {?} newMaxValue
     * @return {?}
     */
    positionTrackingBar(newMinValue, newMaxValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) &&
            newMinValue < this.viewOptions.minLimit) {
            newMinValue = this.viewOptions.minLimit;
            newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) &&
            newMaxValue > this.viewOptions.maxLimit) {
            newMaxValue = this.viewOptions.maxLimit;
            newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
        }
        this.viewLowValue = newMinValue;
        this.viewHighValue = newMaxValue;
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
        this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    positionTrackingHandle(newValue) {
        newValue = this.applyMinMaxLimit(newValue);
        if (this.range) {
            if (this.viewOptions.pushRange) {
                newValue = this.applyPushRange(newValue);
            }
            else {
                if (this.viewOptions.noSwitching) {
                    if (this.currentTrackingPointer === PointerType.Min &&
                        newValue > this.viewHighValue) {
                        newValue = this.applyMinMaxRange(this.viewHighValue);
                    }
                    else if (this.currentTrackingPointer === PointerType.Max &&
                        newValue < this.viewLowValue) {
                        newValue = this.applyMinMaxRange(this.viewLowValue);
                    }
                }
                newValue = this.applyMinMaxRange(newValue);
                /* This is to check if we need to switch the min and max handles */
                if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
                    this.viewLowValue = this.viewHighValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Min, this.maxHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Max;
                    this.minHandleElement.active = false;
                    this.maxHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.maxHandleElement.focus();
                    }
                }
                else if (this.currentTrackingPointer === PointerType.Max &&
                    newValue < this.viewLowValue) {
                    this.viewHighValue = this.viewLowValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Max, this.minHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Min;
                    this.maxHandleElement.active = false;
                    this.minHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.minHandleElement.focus();
                    }
                }
            }
        }
        if (this.getCurrentTrackingValue() !== newValue) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewLowValue = newValue;
                this.applyViewChange();
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewHighValue = newValue;
                this.applyViewChange();
            }
            this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
            this.updateAriaAttributes();
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxLimit(newValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
            return this.viewOptions.minLimit;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
            return this.viewOptions.maxLimit;
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxRange(newValue) {
        /** @type {?} */
        const oppositeValue = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue
            : this.viewLowValue;
        /** @type {?} */
        const difference = Math.abs(newValue - oppositeValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
            if (difference < this.viewOptions.minRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
            if (difference > this.viewOptions.maxRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
            }
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyPushRange(newValue) {
        /** @type {?} */
        const difference = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue - newValue
            : newValue - this.viewLowValue;
        /** @type {?} */
        const minRange = (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange))
            ? this.viewOptions.minRange
            : this.viewOptions.step;
        /** @type {?} */
        const maxRange = this.viewOptions.maxRange;
        // if smaller than minRange
        if (difference < minRange) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
            // if greater than maxRange
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        return newValue;
    }
    /**
     * @return {?}
     */
    getChangeContext() {
        /** @type {?} */
        const changeContext = new ChangeContext();
        changeContext.pointerType = this.currentTrackingPointer;
        changeContext.value = +this.value;
        if (this.range) {
            changeContext.highValue = +this.highValue;
        }
        return changeContext;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["ngx-slider"]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltipTemplate = _t.first);
    } }, viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, true, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, true, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, true, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, true, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c6, true, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, true, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c8, true, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c9, true, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c10, true, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c11, true, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c12, true, SliderElementDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.leftOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.rightOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fullBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.minHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.maxHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.floorLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ceilLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.minHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.maxHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.combinedLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ticksElement = _t.first);
    } }, hostAttrs: [1, "ngx-slider"], hostVars: 7, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.sliderElementDisabledAttr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
    } }, inputs: { value: "value", highValue: "highValue", options: "options", manualRefresh: "manualRefresh", triggerFocus: "triggerFocus" }, outputs: { valueChange: "valueChange", highValueChange: "highValueChange", userChangeStart: "userChangeStart", userChange: "userChange", userChangeEnd: "userChangeEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 13, consts: [["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], ["leftOuterSelectionBar", ""], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["rightOuterSelectionBar", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["fullBar", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], ["selectionBar", ""], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["minHandle", ""], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["maxHandle", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["floorLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ceilLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["minHandleLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["maxHandleLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["combinedLabel", ""], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["ticksElement", ""], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "span", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SliderComponent_span_28_Template, 4, 9, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-transparent", ctx.fullBarTransparentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.barStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.minPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.range ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.maxPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.showTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ticks);
    } }, directives: function () { return [SliderElementDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], SliderHandleDirective, SliderLabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], TooltipWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]]; }, styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}  .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}  .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}"] });
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
SliderComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    highValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    highValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userChangeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userChangeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    manualRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    triggerFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    leftOuterSelectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['leftOuterSelectionBar', { read: SliderElementDirective },] }],
    rightOuterSelectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['rightOuterSelectionBar', { read: SliderElementDirective },] }],
    fullBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fullBar', { read: SliderElementDirective },] }],
    selectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectionBar', { read: SliderElementDirective },] }],
    minHandleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['minHandle', { read: SliderHandleDirective },] }],
    maxHandleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['maxHandle', { read: SliderHandleDirective },] }],
    floorLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['floorLabel', { read: SliderLabelDirective },] }],
    ceilLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ceilLabel', { read: SliderLabelDirective },] }],
    minHandleLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['minHandleLabel', { read: SliderLabelDirective },] }],
    maxHandleLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['maxHandleLabel', { read: SliderLabelDirective },] }],
    combinedLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['combinedLabel', { read: SliderLabelDirective },] }],
    ticksElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ticksElement', { read: SliderElementDirective },] }],
    tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ['tooltipTemplate',] }],
    sliderElementVerticalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.vertical',] }],
    sliderElementAnimateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.animate',] }],
    sliderElementWithLegendClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.with-legend',] }],
    sliderElementDisabledAttr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.disabled',] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-slider',
                template: `<!-- // 0 Left selection bar outside two handles -->
<span ngxSliderElement #leftOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 1 Right selection bar outside two handles -->
<span ngxSliderElement #rightOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 2 The whole slider bar -->
<span ngxSliderElement #fullBar [class.ngx-slider-transparent]="fullBarTransparentClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 3 Selection bar between two handles -->
<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]="selectionBarDraggableClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar">
  <span class="ngx-slider-span ngx-slider-bar ngx-slider-selection" [ngStyle]="barStyle"></span>
</span>
<!-- // 4 Low slider handle -->
<span ngxSliderHandle #minHandle class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min" [ngStyle]=minPointerStyle></span>
<!-- // 5 High slider handle -->
<span ngxSliderHandle #maxHandle [style.display]="range ? 'inherit' : 'none'" class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max" [ngStyle]=maxPointerStyle></span>
<!-- // 6 Floor label -->
<span ngxSliderLabel #floorLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor"></span>
<!-- // 7 Ceiling label -->
<span ngxSliderLabel #ceilLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil"></span>
<!-- // 8 Label above the low slider handle -->
<span ngxSliderLabel #minHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"></span>
<!-- // 9 Label above the high slider handle -->
<span ngxSliderLabel #maxHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"></span>
<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->
<span ngxSliderLabel #combinedLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-combined"></span>
<!-- // 11 The ticks -->
<span ngxSliderElement #ticksElement [hidden]="!showTicks" [class.ngx-slider-ticks-values-under]="ticksUnderValuesClass" class="ngx-slider-ticks">
  <span *ngFor="let t of ticks" class="ngx-slider-tick" [ngClass]="{'ngx-slider-selected': t.selected}" [ngStyle]="t.style">
    <ngx-slider-tooltip-wrapper [template]="tooltipTemplate" [tooltip]="t.tooltip" [placement]="t.tooltipPlacement"></ngx-slider-tooltip-wrapper>
    <ngx-slider-tooltip-wrapper *ngIf="t.value != null" class="ngx-slider-span ngx-slider-tick-value"
        [template]="tooltipTemplate" [tooltip]="t.valueTooltip" [placement]="t.valueTooltipPlacement" [content]="t.value"></ngx-slider-tooltip-wrapper>
    <span *ngIf="t.legend != null" class="ngx-slider-span ngx-slider-tick-legend" [innerHTML]="t.legend"></span>
  </span>
</span>`,
                styles: [`::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}`],
                host: { class: 'ngx-slider' },
                providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], highValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], highValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], userChangeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], userChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], userChangeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], sliderElementVerticalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.vertical']
        }], sliderElementAnimateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.animate']
        }], sliderElementWithLegendClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.with-legend']
        }], sliderElementDisabledAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.disabled']
        }], manualRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], triggerFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['window:resize', ['$event']]
        }], leftOuterSelectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['leftOuterSelectionBar', { read: SliderElementDirective }]
        }], rightOuterSelectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['rightOuterSelectionBar', { read: SliderElementDirective }]
        }], fullBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['fullBar', { read: SliderElementDirective }]
        }], selectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['selectionBar', { read: SliderElementDirective }]
        }], minHandleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['minHandle', { read: SliderHandleDirective }]
        }], maxHandleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['maxHandle', { read: SliderHandleDirective }]
        }], floorLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['floorLabel', { read: SliderLabelDirective }]
        }], ceilLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ceilLabel', { read: SliderLabelDirective }]
        }], minHandleLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['minHandleLabel', { read: SliderLabelDirective }]
        }], maxHandleLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['maxHandleLabel', { read: SliderLabelDirective }]
        }], combinedLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['combinedLabel', { read: SliderLabelDirective }]
        }], ticksElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ticksElement', { read: SliderElementDirective }]
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: ['tooltipTemplate']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TooltipWrapperComponent {
}
TooltipWrapperComponent.ɵfac = function TooltipWrapperComponent_Factory(t) { return new (t || TooltipWrapperComponent)(); };
TooltipWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipWrapperComponent, selectors: [["ngx-slider-tooltip-wrapper"]], inputs: { template: "template", tooltip: "tooltip", placement: "placement", content: "content" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]], template: function TooltipWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"] });
TooltipWrapperComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-slider-tooltip-wrapper',
                template: `<ng-container *ngIf="template">
  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>
</ng-container>

<ng-container *ngIf="!template">
  <div class="ngx-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">
    {{content}}
  </div>
</ng-container>`,
                styles: [`.ngx-slider-inner-tooltip{height:100%}`]
            }]
    }], null, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
class NgxSliderModule {
}
NgxSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NgxSliderModule });
NgxSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function NgxSliderModule_Factory(t) { return new (t || NgxSliderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgxSliderModule, { declarations: function () { return [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [SliderComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NgxSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                declarations: [
                    SliderComponent,
                    SliderElementDirective,
                    SliderHandleDirective,
                    SliderLabelDirective,
                    TooltipWrapperComponent
                ],
                exports: [
                    SliderComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */




/***/ }),

/***/ "ms1l":
/*!****************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/reviews-view/reviews-view.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReviewsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsViewComponent", function() { return ReviewsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reviews-list/reviews-list.component */ "ytXK");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_is_invalid_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/is-invalid.pipe */ "xQMa");
/* harmony import */ var _shared_pipes_has_error_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/pipes/has-error.pipe */ "PjGE");














const _c0 = function (a0) { return { stars: a0 }; };
function ReviewsViewComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stars_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", stars_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, "INPUT_RATING_OPTION", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, stars_r6)), " ");
} }
function ReviewsViewComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ERROR_FORM_REQUIRED"), " ");
} }
function ReviewsViewComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ERROR_FORM_REQUIRED"), " ");
} }
function ReviewsViewComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ERROR_FORM_REQUIRED"), " ");
} }
function ReviewsViewComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ERROR_FORM_INCORRECT_EMAIL"), " ");
} }
function ReviewsViewComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "ERROR_FORM_REQUIRED"), " ");
} }
const _c1 = function (a0, a1) { return { "col-xxl-8 col-xl-10 col-lg-9 col-12": a0, "col-xxl-12 col-xl-10 col-12": a1 }; };
const _c2 = function () { return [5, 4, 3, 2, 1]; };
class ReviewsViewComponent {
    constructor(fb, shop, toastr, translate) {
        this.fb = fb;
        this.shop = shop;
        this.toastr = toastr;
        this.translate = translate;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.submitInProgress = false;
        this.productPageLayout = 'full';
        this.classReviewsView = true;
    }
    ngOnInit() {
        this.form = this.fb.group({
            rating: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            author: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    submit() {
        this.form.markAllAsTouched();
        if (this.submitInProgress || this.form.invalid) {
            return;
        }
        this.submitInProgress = true;
        const formValue = this.form.value;
        this.shop.addProductReview(this.productId, {
            rating: parseFloat(formValue.rating),
            author: formValue.author,
            email: formValue.email,
            content: formValue.content,
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.submitInProgress = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.form.reset({
                rating: '',
                author: '',
                email: '',
                content: '',
            });
            this.list.reload();
            this.toastr.success(this.translate.instant('TEXT_TOAST_REVIEW_ADDED'));
        });
    }
}
ReviewsViewComponent.ɵfac = function ReviewsViewComponent_Factory(t) { return new (t || ReviewsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"])); };
ReviewsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsViewComponent, selectors: [["app-reviews-view"]], viewQuery: function ReviewsViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsListComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
    } }, hostVars: 2, hostBindings: function ReviewsViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reviews-view", ctx.classReviewsView);
    } }, inputs: { productId: "productId", productPageLayout: "productPageLayout" }, decls: 59, vars: 76, consts: [[1, "reviews-view__list"], [3, "productId"], [1, "reviews-view__form"], [1, "reviews-view__header"], [1, "row"], [3, "formGroup", "ngClass"], [1, "form-row"], [1, "form-group", "col-md-4"], ["for", "review-stars"], ["id", "review-stars", "formControlName", "rating", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "review-author"], ["type", "text", "id", "review-author", "formControlName", "author", 1, "form-control", 3, "placeholder"], ["for", "review-email"], ["type", "text", "id", "review-email", "formControlName", "email", 1, "form-control", 3, "placeholder"], [1, "form-group"], ["for", "review-text"], ["id", "review-text", "rows", "6", "formControlName", "content", 1, "form-control"], [1, "form-group", "mb-0", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [3, "value"]], template: function ReviewsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-reviews-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "isInvalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ReviewsViewComponent_option_18_Template, 3, 7, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReviewsViewComponent_div_20_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "hasError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "isInvalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ReviewsViewComponent_div_30_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "hasError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "isInvalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ReviewsViewComponent_div_40_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "hasError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ReviewsViewComponent_div_42_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "hasError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "isInvalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ReviewsViewComponent_div_53_Template, 3, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "hasError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReviewsViewComponent_Template_button_click_56_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productId", ctx.productId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 29, "HEADER_WRITE_REVIEW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](72, _c1, ctx.productPageLayout === "full", ctx.productPageLayout === "sidebar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 31, "INPUT_RATING_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 33, ctx.form.controls.rating));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 35, "INPUT_RATING_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](75, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 37, ctx.form.controls.rating, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 40, "INPUT_YOUR_NAME_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 42, ctx.form.controls.author));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 44, "INPUT_YOUR_NAME_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 46, ctx.form.controls.author, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 49, "INPUT_EMAIL_ADDRESS_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 51, ctx.form.controls.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 53, "INPUT_EMAIL_ADDRESS_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 55, ctx.form.controls.email, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 58, ctx.form.controls.email, "email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 61, "INPUT_YOUR_REVIEW_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 63, ctx.form.controls.content));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 65, "INPUT_YOUR_REVIEW_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 67, ctx.form.controls.content, "required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", ctx.submitInProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 70, "BUTTON_POST_REVIEW"), " ");
    } }, directives: [_reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _shared_pipes_is_invalid_pipe__WEBPACK_IMPORTED_MODULE_9__["IsInvalidPipe"], _shared_pipes_has_error_pipe__WEBPACK_IMPORTED_MODULE_10__["HasErrorPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXdzLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviews-view',
                templateUrl: './reviews-view.component.html',
                styleUrls: ['./reviews-view.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }]; }, { productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], productPageLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classReviewsView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.reviews-view']
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_reviews_list_reviews_list_component__WEBPACK_IMPORTED_MODULE_4__["ReviewsListComponent"]]
        }] }); })();


/***/ }),

/***/ "obNJ":
/*!*************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/shop-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ShopRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopRoutingModule", function() { return ShopRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-cart/page-cart.component */ "7j7p");
/* harmony import */ var _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-category/page-category.component */ "aYu0");
/* harmony import */ var _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-checkout/page-checkout.component */ "wCFk");
/* harmony import */ var _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-compare/page-compare.component */ "ORHE");
/* harmony import */ var _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-order-success/page-order-success.component */ "kRhF");
/* harmony import */ var _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-product/page-product.component */ "P15n");
/* harmony import */ var _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/page-shop/page-shop.component */ "Kic8");
/* harmony import */ var _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/page-track-order/page-track-order.component */ "EZk/");
/* harmony import */ var _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/page-wishlist/page-wishlist.component */ "CxYz");
/* harmony import */ var _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/category.resolver */ "QiFY");
/* harmony import */ var _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/product.resolver */ "suRR");
/* harmony import */ var _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/products-list.resolver */ "V+2u");
/* harmony import */ var _resolvers_root_categories_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/root-categories.resolver */ "2aQO");
/* harmony import */ var _guards_checkout_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/checkout.guard */ "1MAT");


// pages









// resolvers




// guards



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'category',
    },
    {
        path: 'category',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            layout: 'columns-4-sidebar',
        },
        resolve: {
            children: _resolvers_root_categories_resolver__WEBPACK_IMPORTED_MODULE_14__["RootCategoriesResolver"],
        },
    },
    {
        path: 'category/products',
        component: _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__["PageShopComponent"],
        resolve: {
            productsList: _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        },
        data: {
            layout: 'grid',
            gridLayout: 'grid-4-sidebar',
            sidebarPosition: 'start',
        },
    },
    {
        path: 'category/:categorySlug',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            layout: 'columns-4-sidebar',
        },
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
        },
    },
    {
        path: 'category/:categorySlug/products',
        component: _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__["PageShopComponent"],
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
            productsList: _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        },
        data: {
            layout: 'grid',
            gridLayout: 'grid-4-sidebar',
            sidebarPosition: 'start',
        },
    },
    {
        path: 'products/:productSlug',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__["PageProductComponent"],
        resolve: {
            product: _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_12__["ProductResolver"],
        },
        data: {
            layout: 'full',
            sidebarPosition: 'start',
        },
    },
    {
        path: 'cart',
        component: _pages_page_cart_page_cart_component__WEBPACK_IMPORTED_MODULE_2__["PageCartComponent"],
    },
    {
        path: 'checkout',
        pathMatch: 'full',
        component: _pages_page_checkout_page_checkout_component__WEBPACK_IMPORTED_MODULE_4__["PageCheckoutComponent"],
        canActivate: [_guards_checkout_guard__WEBPACK_IMPORTED_MODULE_15__["CheckoutGuard"]],
    },
    {
        path: 'checkout/:orderToken',
        component: _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_6__["PageOrderSuccessComponent"],
    },
    {
        path: 'wishlist',
        component: _pages_page_wishlist_page_wishlist_component__WEBPACK_IMPORTED_MODULE_10__["PageWishlistComponent"],
    },
    {
        path: 'compare',
        component: _pages_page_compare_page_compare_component__WEBPACK_IMPORTED_MODULE_5__["PageCompareComponent"],
    },
    {
        path: 'track-order',
        component: _pages_page_track_order_page_track_order_component__WEBPACK_IMPORTED_MODULE_9__["PageTrackOrderComponent"],
    },
    // The following routes are only for demonstrating possible page layouts.
    {
        path: 'order-success',
        component: _pages_page_order_success_page_order_success_component__WEBPACK_IMPORTED_MODULE_6__["PageOrderSuccessComponent"],
        data: {
            orderToken: 'b84486c31644eac99f6909a6e8c19101',
        },
    },
    ...[
        'columns-3-sidebar',
        'columns-4-sidebar',
        'columns-5-sidebar',
        'columns-4-full',
        'columns-5-full',
        'columns-6-full',
        'columns-7-full',
    ].map(layout => ({
        path: `category-${layout}`,
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            layout,
        },
        resolve: {
            children: _resolvers_root_categories_resolver__WEBPACK_IMPORTED_MODULE_14__["RootCategoriesResolver"],
        },
    })),
    {
        path: 'category-right-sidebar',
        component: _pages_page_category_page_category_component__WEBPACK_IMPORTED_MODULE_3__["PageCategoryComponent"],
        data: {
            layout: 'columns-4-sidebar',
            sidebarPosition: 'end',
        },
        resolve: {
            children: _resolvers_root_categories_resolver__WEBPACK_IMPORTED_MODULE_14__["RootCategoriesResolver"],
        },
    },
    // shop
    ...[
        'grid-3-sidebar',
        'grid-4-sidebar',
        'grid-4-full',
        'grid-5-full',
        'grid-6-full',
    ].map(gridLayout => ({
        path: `shop-${gridLayout}`,
        component: _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__["PageShopComponent"],
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
            productsList: _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        },
        data: {
            layout: 'grid',
            gridLayout,
            sidebarPosition: 'start',
            categorySlug: 'headlights-lighting',
        },
    })),
    {
        path: `shop-list`,
        component: _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__["PageShopComponent"],
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
            productsList: _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        },
        data: {
            layout: 'list',
            gridLayout: 'grid-4-sidebar',
            sidebarPosition: 'start',
            categorySlug: 'headlights-lighting',
        },
    },
    {
        path: `shop-table`,
        component: _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__["PageShopComponent"],
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
            productsList: _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        },
        data: {
            layout: 'table',
            gridLayout: 'grid-4-sidebar',
            sidebarPosition: 'start',
            categorySlug: 'headlights-lighting',
        },
    },
    {
        path: `shop-right-sidebar`,
        component: _pages_page_shop_page_shop_component__WEBPACK_IMPORTED_MODULE_8__["PageShopComponent"],
        resolve: {
            category: _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
            productsList: _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        },
        data: {
            layout: 'grid',
            gridLayout: 'grid-4-sidebar',
            sidebarPosition: 'end',
            categorySlug: 'headlights-lighting',
        },
    },
    // product
    {
        path: 'product-full',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__["PageProductComponent"],
        resolve: {
            product: _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_12__["ProductResolver"],
        },
        data: {
            layout: 'full',
            sidebarPosition: 'start',
            productSlug: 'brandix-brake-kit-bdx-750z370-s',
        },
    },
    {
        path: 'product-sidebar',
        component: _pages_page_product_page_product_component__WEBPACK_IMPORTED_MODULE_7__["PageProductComponent"],
        resolve: {
            product: _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_12__["ProductResolver"],
        },
        data: {
            layout: 'sidebar',
            sidebarPosition: 'start',
            productSlug: 'brandix-brake-kit-bdx-750z370-s',
        },
    },
];
class ShopRoutingModule {
}
ShopRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShopRoutingModule });
ShopRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShopRoutingModule_Factory(t) { return new (t || ShopRoutingModule)(); }, providers: [
        _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
        _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_12__["ProductResolver"],
        _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
        _resolvers_root_categories_resolver__WEBPACK_IMPORTED_MODULE_14__["RootCategoriesResolver"],
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShopRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [
                    _resolvers_category_resolver__WEBPACK_IMPORTED_MODULE_11__["CategoryResolver"],
                    _resolvers_product_resolver__WEBPACK_IMPORTED_MODULE_12__["ProductResolver"],
                    _resolvers_products_list_resolver__WEBPACK_IMPORTED_MODULE_13__["ProductsListResolver"],
                    _resolvers_root_categories_resolver__WEBPACK_IMPORTED_MODULE_14__["RootCategoriesResolver"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "slmn":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-range/filter-range.handler.ts ***!
  \***********************************************************************************************/
/*! exports provided: FilterRangeHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRangeHandler", function() { return FilterRangeHandler; });
/* harmony import */ var _filter_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.handler */ "ty/I");

class FilterRangeHandler extends _filter_handler__WEBPACK_IMPORTED_MODULE_0__["FilterHandler"] {
    constructor() {
        super(...arguments);
        this.type = 'range';
    }
    serialize(value) {
        return value.join('-');
    }
    deserialize(value) {
        const [min, max] = value.split('-').map(parseFloat);
        return [min, max];
    }
    isDefaultValue(filter, value) {
        return filter.min === value[0] && filter.max === value[1];
    }
    activeFilters(filter) {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }
        return [{
                id: filter.slug,
                type: filter.type,
                original: filter,
            }];
    }
    getResetValue(activeFilters) {
        return this.serialize([activeFilters[0].original.min, activeFilters[0].original.max]);
    }
}


/***/ }),

/***/ "suRR":
/*!********************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/resolvers/product.resolver.ts ***!
  \********************************************************************************/
/*! exports provided: ProductResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductResolver", function() { return ProductResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../api/base */ "+mav");







class ProductResolver {
    constructor(router, shop) {
        this.router = router;
        this.shop = shop;
    }
    resolve(route, state) {
        const slug = route.params.productSlug || route.data.productSlug;
        return this.shop.getProductBySlug(slug).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpErrorResponse"] && error.status === 404) {
                this.router.navigateByUrl('/').then();
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
ProductResolver.ɵfac = function ProductResolver_Factory(t) { return new (t || ProductResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"])); };
ProductResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductResolver, factory: ProductResolver.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_5__["ShopApi"] }]; }, null); })();


/***/ }),

/***/ "ty/I":
/*!****************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter.handler.ts ***!
  \****************************************************************************/
/*! exports provided: FilterHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterHandler", function() { return FilterHandler; });
class FilterHandler {
}


/***/ }),

/***/ "uJ5P":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-check/filter-check.handler.ts ***!
  \***********************************************************************************************/
/*! exports provided: FilterCheckHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCheckHandler", function() { return FilterCheckHandler; });
/* harmony import */ var _filter_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../filter.handler */ "ty/I");

class FilterCheckHandler extends _filter_handler__WEBPACK_IMPORTED_MODULE_0__["FilterHandler"] {
    constructor() {
        super(...arguments);
        this.type = 'check';
    }
    serialize(value) {
        return value.join(',');
    }
    deserialize(value) {
        return value !== '' ? value.split(',') : [];
    }
    isDefaultValue(filter, value) {
        return value.length === 0;
    }
    activeFilters(filter) {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }
        return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
            id: `${filter.slug}/${item.slug}`,
            type: filter.type,
            original: filter,
            item,
        }));
    }
    getResetValue(activeFilters) {
        const itemSlugs = activeFilters.map(x => x.item.slug);
        return this.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
    }
}


/***/ }),

/***/ "vQrs":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-radio/filter-radio.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FilterRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRadioComponent", function() { return FilterRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _radio_directives_radio_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../radio/directives/radio-group.directive */ "13Ly");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _radio_components_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../radio/components/radio-button/radio-button.component */ "0eeq");









function FilterRadioComponent_label_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.count);
} }
function FilterRadioComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-radio-button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterRadioComponent_label_1_span_4_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r1.slug)("disabled", item_r1.count === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.count);
} }
class FilterRadioComponent {
    constructor() {
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.classFilterList = true;
        this.changeFn = () => { };
        this.touchedFn = () => { };
    }
    ngOnInit() {
        this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(value => value !== this.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(value => {
            this.value = value;
            this.changeFn(value);
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    registerOnChange(fn) {
        this.changeFn = fn;
    }
    registerOnTouched(fn) {
        this.touchedFn = fn;
    }
    writeValue(obj) {
        this.control.setValue(this.value = obj, { emitEvent: false });
    }
}
FilterRadioComponent.ɵfac = function FilterRadioComponent_Factory(t) { return new (t || FilterRadioComponent)(); };
FilterRadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterRadioComponent, selectors: [["app-filter-radio"]], hostVars: 2, hostBindings: function FilterRadioComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-list", ctx.classFilterList);
    } }, inputs: { options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterRadioComponent),
                multi: true,
            },
        ])], decls: 2, vars: 2, consts: [["appRadioGroup", "", 1, "filter-list__list", 3, "formControl"], ["class", "filter-list__item", 4, "ngFor", "ngForOf"], [1, "filter-list__item"], [1, "filter-list__input", 3, "value", "disabled"], [1, "filter-list__title"], ["class", "filter-list__counter", 4, "ngIf"], [1, "filter-list__counter"]], template: function FilterRadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterRadioComponent_label_1_Template, 5, 4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.items);
    } }, directives: [_radio_directives_radio_group_directive__WEBPACK_IMPORTED_MODULE_4__["RadioGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _radio_components_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_6__["RadioButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItcmFkaW8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterRadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-radio',
                templateUrl: './filter-radio.component.html',
                styleUrls: ['./filter-radio.component.scss'],
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => FilterRadioComponent),
                        multi: true,
                    },
                ],
            }]
    }], function () { return []; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-list']
        }] }); })();


/***/ }),

/***/ "vt7+":
/*!******************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/analogs-table/analogs-table.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AnalogsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalogsTableComponent", function() { return AnalogsTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ "fHWZ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");











const _c0 = function (a0, a1) { return { rating: a0, reviews: a1 }; };
function AnalogsTableComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const analog_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.url.product(analog_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](analog_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "TABLE_SKU"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](analog_r1.sku);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", analog_r1.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 12, "TEXT_RATING_LABEL", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, analog_r1.rating, analog_r1.reviews)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "TABLE_BRAND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", analog_r1.brand.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, "COUNTRY_NAME_" + analog_r1.brand.country), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 19, analog_r1.price), " ");
} }
class AnalogsTableComponent {
    constructor(shop, url) {
        this.shop = shop;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.productId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.analogs = [];
        this.classAnalogsTable = true;
    }
    set productId(value) {
        if (value !== this.productId$.value) {
            this.productId$.next(value);
        }
    }
    ngOnInit() {
        this.productId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(productId => {
            if (!productId) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
            return this.shop.getProductAnalogs(productId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(x => this.analogs = x);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
AnalogsTableComponent.ɵfac = function AnalogsTableComponent_Factory(t) { return new (t || AnalogsTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_3__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"])); };
AnalogsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalogsTableComponent, selectors: [["app-analogs-table"]], hostVars: 2, hostBindings: function AnalogsTableComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("analogs-table", ctx.classAnalogsTable);
    } }, inputs: { productId: "productId" }, decls: 17, vars: 13, consts: [[1, "analogs-table__column", "analogs-table__column--name"], [1, "analogs-table__column", "analogs-table__column--rating"], [1, "analogs-table__column", "analogs-table__column--brand"], [1, "analogs-table__column", "analogs-table__column--price"], [4, "ngFor", "ngForOf"], [1, "analogs-table__product-name", 3, "routerLink"], [1, "analogs-table__sku"], [1, "analogs-table__rating"], [1, "analogs-table__rating-stars"], [3, "value"], [1, "analogs-table__rating-label"], [1, "analogs-table__country"]], template: function AnalogsTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AnalogsTableComponent_tr_16_Template, 24, 24, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, "TABLE_NAME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "TABLE_RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "TABLE_BRAND"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, "TABLE_PRICE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.analogs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_7__["RatingComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_9__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFsb2dzLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogsTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analogs-table',
                templateUrl: './analogs-table.component.html',
                styleUrls: ['./analogs-table.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_3__["ShopApi"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_4__["UrlService"] }]; }, { productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classAnalogsTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.analogs-table']
        }] }); })();


/***/ }),

/***/ "vwn3":
/*!*******************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/filters/filter-category/filter-category.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FilterCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterCategoryComponent", function() { return FilterCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function FilterCategoryComponent_ng_template_0_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { item: a0 }; };
function FilterCategoryComponent_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCategoryComponent_ng_template_0_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r4.parent));
} }
function FilterCategoryComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterCategoryComponent_ng_template_0_ng_container_0_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.item;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.category(item_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
} }
function FilterCategoryComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r2.url.allProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "LINK_ALL_PRODUCTS"));
} }
function FilterCategoryComponent_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function FilterCategoryComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCategoryComponent_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r8.parent));
} }
function FilterCategoryComponent_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r13 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r10.url.category(child_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r13.name);
} }
function FilterCategoryComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilterCategoryComponent_ng_container_4_ng_container_1_Template, 2, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilterCategoryComponent_ng_container_4_ng_container_5_Template, 4, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.parent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-category__item--current", ctx_r3.options.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.url.category(item_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r8.children);
} }
class FilterCategoryComponent {
    constructor(url) {
        this.url = url;
        this.classFilterCategories = true;
    }
}
FilterCategoryComponent.ɵfac = function FilterCategoryComponent_Factory(t) { return new (t || FilterCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"])); };
FilterCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterCategoryComponent, selectors: [["app-filter-category"]], hostVars: 2, hostBindings: function FilterCategoryComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filter-category", ctx.classFilterCategories);
    } }, inputs: { options: "options" }, decls: 5, vars: 2, consts: [["parent", ""], [1, "filter-category__list"], ["class", "filter-category__item filter-category__item--parent", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "filter-category__item", "filter-category__item--parent"], [1, "filter-category__arrow"], ["icon", "arrow-rounded-left-6x9"], [3, "routerLink"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "filter-category__item"], [1, "filter-category__item", "filter-category__item--child"]], template: function FilterCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterCategoryComponent_ng_template_0_Template, 6, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FilterCategoryComponent_li_3_Template, 6, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterCategoryComponent_ng_container_4_Template, 6, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter-category',
                templateUrl: './filter-category.component.html',
                styleUrls: ['./filter-category.component.scss'],
            }]
    }], function () { return [{ type: _services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"] }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classFilterCategories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.filter-category']
        }] }); })();


/***/ }),

/***/ "wCFk":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/pages/page-checkout/page-checkout.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PageCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageCheckoutComponent", function() { return PageCheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_components_terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/terms-modal/terms-modal.component */ "Ms93");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/address-form/address-form.component */ "BXUT");
/* harmony import */ var _shared_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/register-form/register-form.component */ "aR/+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../environments/environment */ "0kXo");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/cart.service */ "S0zV");
/* harmony import */ var _shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/block-header/block-header.component */ "V3dM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../checkbox/components/checkbox/checkbox.component */ "X6gf");
/* harmony import */ var _collapse_directives_collapse_item_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../collapse/directives/collapse-item.directive */ "enV0");
/* harmony import */ var _radio_directives_radio_group_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../radio/directives/radio-group.directive */ "13Ly");
/* harmony import */ var _shared_directives_split_string_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/directives/split-string.directive */ "lP2K");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _radio_components_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../radio/components/radio-button/radio-button.component */ "0eeq");
/* harmony import */ var _collapse_directives_collapse_content_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../collapse/directives/collapse-content.directive */ "Iowo");
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-paypal */ "ejwX");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");
/* harmony import */ var _shared_pipes_is_invalid_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../shared/pipes/is-invalid.pipe */ "xQMa");






























const _c0 = ["billingAddressForm"];
const _c1 = ["shippingAddressForm"];
const _c2 = ["registerForm"];
function PageCheckoutComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appSplitString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "TEXT_ALERT_RETURNING_CUSTOMER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r13.getPart(0), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.url.login());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r13.getPart(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r13.getPart(2), " ");
} }
function PageCheckoutComponent_tr_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r14.product.name, " \u00D7 ", item_r14.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, item_r14.product.price * item_r14.quantity));
} }
function PageCheckoutComponent_tbody_67_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const total_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "TABLE_TOTAL_" + total_r16.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, total_r16.price));
} }
function PageCheckoutComponent_tbody_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PageCheckoutComponent_tbody_67_tr_9_Template, 7, 6, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "TABLE_SUBTOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, ctx_r7.cart.subtotal$)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx_r7.cart.totals$));
} }
function PageCheckoutComponent_li_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-radio-button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const payment_r17 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appCollapseItemIsOpen", ctx_r8.form.controls.paymentMethod.value === payment_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", payment_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, payment_r17.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, payment_r17.description), " ");
} }
function PageCheckoutComponent_ngx_paypal_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-paypal", 58);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r11.payPalConfig);
} }
function PageCheckoutComponent_button_95_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCheckoutComponent_button_95_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.createOrder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-loading", ctx_r12.form.controls.paymentMethod.value === "paypal" || ctx_r12.checkoutInProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r12.form.controls.paymentMethod.value === "paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "BUTTON_PLACE_ORDER"));
} }
const _c3 = function (a0, a1) { return { label: a0, url: a1 }; };
const _c4 = function (a0, a1, a2) { return [a0, a1, a2]; };
class PageCheckoutComponent {
    constructor(fb, modalService, router, translate, shopApi, zone, url, accountApi, cart) {
        this.fb = fb;
        this.modalService = modalService;
        this.router = router;
        this.translate = translate;
        this.shopApi = shopApi;
        this.zone = zone;
        this.url = url;
        this.accountApi = accountApi;
        this.cart = cart;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.checkout$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.payPalInit = false;
        this.checkoutInProgress = false;
        this.payments = [
            {
                name: 'bank',
                label: 'TEXT_PAYMENT_BANK_LABEL',
                description: 'TEXT_PAYMENT_BANK_DESCRIPTION',
            },
            {
                name: 'check',
                label: 'TEXT_PAYMENT_CHECK_LABEL',
                description: 'TEXT_PAYMENT_CHECK_DESCRIPTION',
            },
            {
                name: 'cash',
                label: 'TEXT_PAYMENT_CASH_LABEL',
                description: 'TEXT_PAYMENT_CASH_DESCRIPTION',
            },
            {
                name: 'paypal',
                label: 'TEXT_PAYMENT_PAYPAL_LABEL',
                description: 'TEXT_PAYMENT_PAYPAL_DESCRIPTION',
            },
        ];
        this.enablePaypalButton = () => { };
        this.disablePaypalButton = () => { };
        this.form = this.fb.group({
            billingAddress: [{}],
            createAccount: [false],
            account: [{}],
            shipToDifferentAddress: [false],
            shippingAddress: [{}],
            comments: [''],
            paymentMethod: ['bank'],
            agree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]],
        });
        this.form.get('account').disable({ emitEvent: false });
        this.form.get('shippingAddress').disable({ emitEvent: false });
        this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.form.value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])()).subscribe(([oldValue, newValue]) => {
            if (oldValue.shipToDifferentAddress !== newValue.shipToDifferentAddress) {
                this.toggleFormControl('shippingAddress', newValue.shipToDifferentAddress);
            }
            if (oldValue.createAccount !== newValue.createAccount) {
                this.toggleFormControl('account', newValue.createAccount);
            }
            if (oldValue.paymentMethod !== newValue.paymentMethod && newValue.paymentMethod === 'paypal') {
                this.payPalInit = false;
            }
            if (this.form.valid) {
                this.enablePaypalButton();
            }
            else {
                this.disablePaypalButton();
            }
        });
    }
    ngOnInit() {
        this.initConfig();
        this.cart.quantity$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => this.router.navigateByUrl('/shop/cart').then());
        this.checkout$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.checkoutInProgress = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(checkoutData => {
            const value = this.form.value;
            if (value.createAccount) {
                return this.accountApi.signUp(value.account.email, value.account.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => checkoutData));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(checkoutData);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(checkoutData => this.shopApi.checkout(checkoutData)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.checkoutInProgress = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => this.checkoutInProgress = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(order => {
            this.router.navigateByUrl(`/shop/checkout/${order.token}`).then();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    toggleFormControl(controlName, isEnabled) {
        if (isEnabled) {
            this.form.get(controlName).enable({ emitEvent: false });
        }
        else {
            this.form.get(controlName).disable({ emitEvent: false });
        }
    }
    showTerms(event) {
        event.preventDefault();
        this.modalService.show(_shared_components_terms_modal_terms_modal_component__WEBPACK_IMPORTED_MODULE_3__["TermsModalComponent"], { class: 'modal-lg' });
    }
    createOrder() {
        if (!this.checkData()) {
            return;
        }
        this.checkout();
    }
    markAllAsTouched() {
        this.form.markAllAsTouched();
        this.billingAddressForm.markAsTouched();
        this.shippingAddressForm.markAsTouched();
        this.registerForm.markAsTouched();
    }
    checkData() {
        this.markAllAsTouched();
        if (this.form.invalid) {
            alert(this.translate.instant('ERROR_CHECKOUT'));
        }
        return this.form.valid;
    }
    checkout() {
        const value = this.form.value;
        const billingAddress = value.billingAddress;
        const shippingAddress = value.shipToDifferentAddress ? value.shippingAddress : value.billingAddress;
        const checkoutData = {
            payment: value.paymentMethod,
            items: this.cart.items.map(item => ({
                productId: item.product.id,
                options: item.options,
                quantity: item.quantity,
            })),
            billingAddress,
            shippingAddress,
            comment: value.comment,
        };
        this.checkout$.next(checkoutData);
    }
    initConfig() {
        this.payPalConfig = {
            currency: 'USD',
            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].paypalClientId,
            createOrderOnClient: () => this.createPayPalOrderRequest(),
            advanced: {
                commit: 'true',
            },
            style: {
                label: 'paypal',
                layout: 'horizontal',
                tagline: false,
            },
            onInit: (data, actions) => {
                this.payPalInit = true;
                this.enablePaypalButton = actions.enable;
                this.disablePaypalButton = actions.disable;
                if (this.form.invalid) {
                    this.disablePaypalButton();
                }
            },
            onApprove: () => { },
            onClientAuthorization: () => {
                this.zone.run(() => this.checkout());
            },
            onError: err => {
                alert(err);
            },
            onClick: () => {
                this.zone.run(() => this.checkData());
            },
        };
    }
    createPayPalOrderRequest() {
        const value = this.form.value;
        const billingAddress = value.billingAddress;
        const shippingAddress = value.shipToDifferentAddress ? value.shippingAddress : value.billingAddress;
        const shipping = this.cart.totals.filter(x => x.type === 'shipping').reduce((acc, total) => acc + total.price, 0);
        const taxes = this.cart.totals.filter(x => x.type === 'tax').reduce((acc, total) => acc + total.price, 0);
        return {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: this.cart.total.toFixed(2),
                        breakdown: {
                            item_total: {
                                currency_code: 'USD',
                                value: this.cart.subtotal.toFixed(2),
                            },
                            shipping: {
                                currency_code: 'USD',
                                value: shipping.toFixed(2),
                            },
                            tax_total: {
                                currency_code: 'USD',
                                value: taxes.toFixed(2),
                            },
                        },
                    },
                    items: this.cart.items.map(item => ({
                        category: 'PHYSICAL_GOODS',
                        name: item.product.name,
                        quantity: item.quantity.toString(),
                        sku: item.product.sku,
                        unit_amount: {
                            currency_code: 'USD',
                            value: item.product.price.toFixed(2),
                        },
                    })),
                    shipping: {
                        address: {
                            country_code: shippingAddress.country,
                            admin_area_1: shippingAddress.state,
                            admin_area_2: shippingAddress.city,
                            address_line_1: shippingAddress.address1,
                            address_line_2: shippingAddress.address2,
                            postal_code: shippingAddress.postcode,
                        },
                    },
                },
            ],
            payer: {
                address: {
                    country_code: billingAddress.country,
                    admin_area_1: billingAddress.state,
                    admin_area_2: billingAddress.city,
                    address_line_1: billingAddress.address1,
                    address_line_2: billingAddress.address2,
                    postal_code: billingAddress.postcode,
                },
                name: {
                    given_name: billingAddress.firstName,
                    surname: billingAddress.lastName,
                },
                email_address: billingAddress.email,
            },
        };
    }
}
PageCheckoutComponent.ɵfac = function PageCheckoutComponent_Factory(t) { return new (t || PageCheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_11__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_11__["AccountApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"])); };
PageCheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageCheckoutComponent, selectors: [["app-page-checkout"]], viewQuery: function PageCheckoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _shared_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_6__["RegisterFormComponent"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.billingAddressForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shippingAddressForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.registerForm = _t.first);
    } }, decls: 97, vars: 89, consts: [[3, "pageTitle", "breadcrumb"], [1, "checkout", "block", 3, "formGroup"], [1, "container", "container--max--xl"], [1, "row"], ["class", "col-12 mb-3", 4, "ngIf"], [1, "col-12", "col-lg-6", "col-xl-7"], [1, "card", "mb-lg-0"], [1, "card-body", "card-body--padding--2"], [1, "card-title"], ["formControlName", "billingAddress", 1, "form-group", "d-block"], ["billingAddressForm", ""], [1, "form-group"], [1, "form-check"], ["formControlName", "createAccount", 1, "form-check-input"], ["checkboxCreateAccount", ""], [1, "form-check-label", 3, "htmlFor"], ["appCollapseItem", "collapse-area--open", 1, "collapse-area", 3, "appCollapseItemIsOpen"], [1, "pt-2"], ["formControlName", "account", 1, "d-block", "mb-2", "pb-1"], ["registerForm", ""], [1, "form-check", "mt-1"], ["formControlName", "shipToDifferentAddress", 1, "form-check-input"], ["checkboxDifferentAddress", ""], ["formControlName", "shippingAddress", 1, "d-block"], ["shippingAddressForm", ""], ["for", "checkout-comment"], [1, "text-muted"], ["id", "checkout-comment", "rows", "4", "formControlName", "comments", 1, "form-control"], [1, "col-12", "col-lg-6", "col-xl-5", "mt-4", "mt-lg-0"], [1, "card", "mb-0"], [1, "checkout__totals"], [1, "checkout__totals-header"], [1, "checkout__totals-products"], [4, "ngFor", "ngForOf"], ["class", "checkout__totals-subtotals", 4, "ngIf"], [1, "checkout__totals-footer"], [1, "checkout__payment-methods", "payment-methods"], ["formControlName", "paymentMethod", "appRadioGroup", "", 1, "payment-methods__list"], ["class", "payment-methods__item", "appCollapseItem", "payment-methods__item--active", 3, "appCollapseItemIsOpen", 4, "ngFor", "ngForOf"], [1, "checkout__agree", "form-group"], ["formControlName", "agree", 1, "form-check-input"], ["termsCheckbox", "appCheckbox"], [1, "form-check-label", 3, "htmlFor", "appSplitString"], ["string", "splitString"], [3, "href", "click"], [3, "config", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary btn-xl btn-block", 3, "disabled", "btn-loading", "click", 4, "ngIf"], ["layout", "before-footer"], [1, "col-12", "mb-3"], [1, "alert", "alert-lg", "alert-primary", 3, "appSplitString"], [3, "routerLink"], [1, "checkout__totals-subtotals"], ["appCollapseItem", "payment-methods__item--active", 1, "payment-methods__item", 3, "appCollapseItemIsOpen"], [1, "payment-methods__item-header"], [1, "payment-methods__item-radio", 3, "value"], [1, "payment-methods__item-title"], ["appCollapseContent", "", 1, "payment-methods__item-container"], [1, "payment-methods__item-details", "text-muted"], [3, "config"], ["type", "submit", 1, "btn", "btn-primary", "btn-xl", "btn-block", 3, "disabled", "click"]], template: function PageCheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PageCheckoutComponent_div_8_Template, 8, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-address-form", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-checkbox", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-register-form", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-checkbox", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-address-form", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "thead", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tbody", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, PageCheckoutComponent_tr_65_Template, 6, 5, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, PageCheckoutComponent_tbody_67_Template, 11, 11, "tbody", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tfoot", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "currencyFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PageCheckoutComponent_li_80_Template, 10, 8, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "app-checkbox", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "isInvalid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageCheckoutComponent_Template_a_click_90_listener($event) { return ctx.showTerms($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, PageCheckoutComponent_ngx_paypal_94_Template, 1, 1, "ngx-paypal", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, PageCheckoutComponent_button_95_Template, 3, 6, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "app-block-space", 47);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 34, "HEADER_CHECKOUT"))("breadcrumb", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](85, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](76, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 36, "LINK_HOME"), ctx.url.home()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](79, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 38, "LINK_CART"), ctx.url.cart()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](82, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 40, "LINK_CHECKOUT"), ctx.url.checkout())));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 42, ctx.accountApi.user$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 44, "HEADER_BILLING_DETAILS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", _r2.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 46, "INPUT_CREATE_ACCOUNT_LABEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appCollapseItemIsOpen", _r2.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", _r4.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 48, "INPUT_SHIP_TO_DIFFERENT_ADDRESS_LABEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("appCollapseItemIsOpen", _r4.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 50, "INPUT_ORDER_NOTES_LABEL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 52, "TEXT_OPTIONAL"), ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 54, "INPUT_ORDER_NOTES_PLACEHOLDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 56, "HEADER_YOUR_ORDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 58, "TABLE_PRODUCT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 60, "TABLE_TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 62, ctx.cart.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 64, ctx.cart.totals$).length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 66, "TABLE_TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 68, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 70, ctx.cart.total$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payments);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 72, ctx.form.controls.agree));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("htmlFor", _r9.inputId)("appSplitString", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 74, "INPUT_TERMS_AGREE_LABEL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r10.getPart(0), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "site/terms", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r10.getPart(1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _r10.getPart(2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.payPalInit ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.paymentMethod.value === "paypal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls.paymentMethod.value !== "paypal" || !ctx.payPalInit);
    } }, directives: [_shared_components_block_header_block_header_component__WEBPACK_IMPORTED_MODULE_14__["BlockHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _checkbox_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_16__["CheckboxComponent"], _collapse_directives_collapse_item_directive__WEBPACK_IMPORTED_MODULE_17__["CollapseItemDirective"], _shared_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_6__["RegisterFormComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _radio_directives_radio_group_directive__WEBPACK_IMPORTED_MODULE_18__["RadioGroupDirective"], _shared_directives_split_string_directive__WEBPACK_IMPORTED_MODULE_19__["SplitStringDirective"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_20__["BlockSpaceComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _radio_components_radio_button_radio_button_component__WEBPACK_IMPORTED_MODULE_21__["RadioButtonComponent"], _collapse_directives_collapse_content_directive__WEBPACK_IMPORTED_MODULE_22__["CollapseContentDirective"], ngx_paypal__WEBPACK_IMPORTED_MODULE_23__["NgxPaypalComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_24__["CurrencyFormatPipe"], _shared_pipes_is_invalid_pipe__WEBPACK_IMPORTED_MODULE_25__["IsInvalidPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageCheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-checkout',
                templateUrl: './page-checkout.component.html',
                styleUrls: ['./page-checkout.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["BsModalService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_11__["ShopApi"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_12__["UrlService"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_11__["AccountApi"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_13__["CartService"] }]; }, { billingAddressForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['billingAddressForm', { read: _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"] }]
        }], shippingAddressForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['shippingAddressForm', { read: _shared_components_address_form_address_form_component__WEBPACK_IMPORTED_MODULE_5__["AddressFormComponent"] }]
        }], registerForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['registerForm', { read: _shared_components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_6__["RegisterFormComponent"] }]
        }] }); })();


/***/ }),

/***/ "xT4v":
/*!******************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/products-view/products-view.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProductsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsViewComponent", function() { return ProductsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shop-sidebar.service */ "c/8G");
/* harmony import */ var _services_page_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/page-shop.service */ "4g39");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ "dpqV");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ "1W7l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../currency/pipes/currency-format.pipe */ "i2U0");














function ProductsViewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsViewComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.page.resetAllFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "TEXT_NO_MATCHING_ITEMS_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "TEXT_NO_MATCHING_ITEMS_SUBTITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "BUTTON_RESET_FILTERS"), " ");
} }
function ProductsViewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "TEXT_CATEGORY_IS_EMPTY_TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "TEXT_CATEGORY_IS_EMPTY_SUBTITLE"));
} }
function ProductsViewComponent_ng_container_8_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsViewComponent_ng_container_8_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const layoutButton_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.setLayout(layoutButton_r8.layout); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const layoutButton_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("layout-switcher__button--active", layoutButton_r8.layout === ctx_r5.layout);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", layoutButton_r8.icon);
} }
function ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", filter_r12.original.vehicle.year, " ", filter_r12.original.vehicle.make, " ", filter_r12.original.vehicle.model, " ");
} }
function ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currencyFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, filter_r12.original.value[0]), " \u2013 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, filter_r12.original.value[1]), " ");
} }
function ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r12.item.name, " ");
} }
function ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", filter_r12.original.name, ": ", filter_r12.item.name, " ");
} }
const _c0 = function (a0) { return { stars: a0 }; };
function ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, "TEXT_STARS", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, filter_r12.item.rating)), " ");
} }
function ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r12.item.name, " ");
} }
function ProductsViewComponent_ng_container_8_div_46_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsViewComponent_ng_container_8_div_46_li_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const filter_r12 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.page.resetFilter(filter_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_2_Template, 2, 3, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_3_Template, 4, 6, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_4_Template, 2, 1, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_5_Template, 2, 2, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_6_Template, 3, 6, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductsViewComponent_ng_container_8_div_46_li_6_ng_container_7_Template, 2, 1, "ng-container", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", filter_r12.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "radio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "color");
} }
function ProductsViewComponent_ng_container_8_div_46_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductsViewComponent_ng_container_8_div_46_li_6_Template, 9, 7, "li", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsViewComponent_ng_container_8_div_46_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.page.resetAllFilters(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "TEXT_ACTIVE_FILTERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r6.page.currentFilters$))("ngForTrackBy", ctx_r6.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "BUTTON_CLEAR_ALL"));
} }
function ProductsViewComponent_ng_container_8_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r29);
} }
const _c1 = function (a0, a1, a2) { return { from: a0, to: a1, total: a2 }; };
const _c2 = function () { return ["grid-4-full", "grid-4-sidebar"]; };
function ProductsViewComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductsViewComponent_ng_container_8_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.sidebar.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductsViewComponent_ng_container_8_button_14_Template, 2, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "16");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "24");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "32");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProductsViewComponent_ng_container_8_div_46_Template, 12, 10, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ProductsViewComponent_ng_container_8_div_66_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "nav", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-pagination", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_25_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("view-options--offcanvas--always", ctx_r2.offCanvasSidebar === "always")("view-options--offcanvas--mobile", ctx_r2.offCanvasSidebar === "mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 37, "BUTTON_FILTERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 39, ctx_r2.currentFiltersCount$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.layoutButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 41, "TEXT_SHOWING_PRODUCTS", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](71, _c1, ctx_r2.page.from, ctx_r2.page.to, ctx_r2.page.total)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 44, "INPUT_SORT_LABEL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.sortControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 46, "INPUT_SORT_OPTION_DEFAULT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 48, "INPUT_SORT_OPTION_NAME_ASC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 50, "INPUT_SORT_OPTION_NAME_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 52, "INPUT_LIMIT_LABEL"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.limitControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 54, ctx_r2.hasActiveFilters$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("products-list--grid--6", ctx_r2.gridLayout === "grid-6-full")("products-list--grid--5", ctx_r2.gridLayout === "grid-5-full")("products-list--grid--4", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](75, _c2).includes(ctx_r2.gridLayout))("products-list--grid--3", ctx_r2.gridLayout === "grid-3-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-layout", ctx_r2.layout === "grid-with-features" ? "grid" : ctx_r2.layout)("data-with-features", ctx_r2.layout == "grid-with-features" ? "true" : "false");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 56, "TABLE_IMAGE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 58, "TABLE_SKU"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 60, "TABLE_PRODUCT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 62, "TABLE_RATING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 64, "TABLE_PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", (tmp_25_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 66, ctx_r2.page.list$)) == null ? null : tmp_25_0.items)("ngForTrackBy", ctx_r2.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.pageControl)("siblings", 2)("total", ctx_r2.page.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](73, 68, "TEXT_SHOWING_PRODUCTS", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](76, _c1, ctx_r2.page.from, ctx_r2.page.to, ctx_r2.page.total)), " ");
} }
class ProductsViewComponent {
    constructor(sidebar, page) {
        this.sidebar = sidebar;
        this.page = page;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.layoutButtons = [
            { layout: 'grid', icon: 'layout-grid-16' },
            { layout: 'grid-with-features', icon: 'layout-grid-with-details-16' },
            { layout: 'list', icon: 'layout-list-16' },
            { layout: 'table', icon: 'layout-table-16' },
        ];
        this.layout = 'grid';
        this.gridLayout = 'grid-4-sidebar';
        this.offCanvasSidebar = 'mobile';
        this.classProductsView = true;
    }
    get classProductsViewLoading() {
        return this.page.isLoading;
    }
    ngOnInit() {
        this.pageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.page.defaultOptions.page);
        this.limitControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.page.defaultOptions.limit);
        this.sortControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.page.defaultOptions.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.pageControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(v => ['page', v])), this.limitControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(v => ['limit', parseFloat(v)])), this.sortControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(v => ['sort', v]))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(([option, value]) => {
            this.page.setOptionValue(option, value);
        });
        this.page.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(({ page, limit, sort }) => {
            this.pageControl.setValue(page, { emitEvent: false });
            this.limitControl.setValue(limit, { emitEvent: false });
            this.sortControl.setValue(sort, { emitEvent: false });
        });
        this.isEmptyList$ = this.page.list$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x.total === 0));
        this.currentFiltersCount$ = this.page.currentFilters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x.length));
        this.hasActiveFilters$ = this.page.activeFilters$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x.length > 0));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setLayout(value) {
        this.layout = value;
    }
    trackById(index, entity) {
        return entity.id;
    }
}
ProductsViewComponent.ɵfac = function ProductsViewComponent_Factory(t) { return new (t || ProductsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_page_shop_service__WEBPACK_IMPORTED_MODULE_5__["PageShopService"])); };
ProductsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsViewComponent, selectors: [["app-products-view"]], hostVars: 4, hostBindings: function ProductsViewComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("products-view", ctx.classProductsView)("products-view--loading", ctx.classProductsViewLoading);
    } }, inputs: { layout: "layout", gridLayout: "gridLayout", offCanvasSidebar: "offCanvasSidebar" }, decls: 10, vars: 13, consts: [[1, "products-view__body"], [1, "products-view__loader"], ["class", "products-view__empty", 4, "ngIf"], [4, "ngIf"], [1, "products-view__empty"], [1, "products-view__empty-title"], [1, "products-view__empty-subtitle"], [1, "products-view__empty-actions"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "products-view__options", "view-options"], [1, "view-options__body"], ["type", "button", 1, "view-options__filters-button", "filters-button", 3, "click"], [1, "filters-button__icon"], ["icon", "filters-16"], [1, "filters-button__title"], [1, "filters-button__counter"], [1, "view-options__layout", "layout-switcher"], [1, "layout-switcher__list"], ["type", "button", "class", "layout-switcher__button", 3, "layout-switcher__button--active", "click", 4, "ngFor", "ngForOf"], [1, "view-options__legend"], [1, "view-options__spring"], [1, "view-options__select"], ["for", "view-option-sort"], ["id", "view-option-sort", 1, "form-control", "form-control-sm", 3, "formControl"], ["value", "default"], ["value", "name_asc"], ["value", "name_desc"], ["for", "view-option-limit"], ["id", "view-option-limit", 1, "form-control", "form-control-sm", 3, "formControl"], ["value", "8"], ["value", "16"], ["value", "24"], ["value", "32"], ["class", "view-options__body view-options__body--filters", 4, "ngIf"], [1, "products-view__list", "products-list"], [1, "products-list__head"], [1, "products-list__column", "products-list__column--image"], [1, "products-list__column", "products-list__column--meta"], [1, "products-list__column", "products-list__column--product"], [1, "products-list__column", "products-list__column--rating"], [1, "products-list__column", "products-list__column--price"], [1, "products-list__content"], ["class", "products-list__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "products-view__pagination"], ["aria-label", "Page navigation example"], [3, "formControl", "siblings", "total"], [1, "products-view__pagination-legend"], ["type", "button", 1, "layout-switcher__button", 3, "click"], [3, "icon"], [1, "view-options__body", "view-options__body--filters"], [1, "view-options__label"], [1, "view-options__applied-filters", "applied-filters"], [1, "applied-filters__list"], ["class", "applied-filters__item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "applied-filters__item"], ["type", "button", 1, "applied-filters__button", "applied-filters__button--clear", 3, "click"], ["type", "button", 1, "applied-filters__button", "applied-filters__button--filter", 3, "ngSwitch", "click"], [4, "ngSwitchCase"], ["icon", "cross-9-light"], [1, "products-list__item"], [3, "product"]], template: function ProductsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductsViewComponent_div_2_Template, 11, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductsViewComponent_div_5_Template, 7, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsViewComponent_ng_container_8_Template, 74, 80, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx.isEmptyList$) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.hasActiveFilters$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx.isEmptyList$) && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.hasActiveFilters$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.isEmptyList$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _currency_pipes_currency_format_pipe__WEBPACK_IMPORTED_MODULE_11__["CurrencyFormatPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy12aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products-view',
                templateUrl: './products-view.component.html',
                styleUrls: ['./products-view.component.scss'],
            }]
    }], function () { return [{ type: _services_shop_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["ShopSidebarService"] }, { type: _services_page_shop_service__WEBPACK_IMPORTED_MODULE_5__["PageShopService"] }]; }, { layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridLayout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offCanvasSidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classProductsView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.products-view']
        }], classProductsViewLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.products-view--loading']
        }] }); })();


/***/ }),

/***/ "ytXK":
/*!****************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/shop/components/reviews-list/reviews-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReviewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsListComponent", function() { return ReviewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/pagination/pagination.component */ "dpqV");
/* harmony import */ var _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/rating/rating.component */ "fHWZ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");












function ReviewsListComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "TEXT_REVIEWS_LIST_EMPTY"), "\n");
} }
const _c0 = function (a0) { return { date: a0 }; };
function ReviewsListComponent_ng_container_2_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-rating", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r4.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, "FORMAT_DATE_MEDIUM", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, review_r4.date)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", review_r4.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", review_r4.content, " ");
} }
function ReviewsListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReviewsListComponent_ng_container_2_li_2_Template, 15, 10, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-pagination", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.list.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.currentPage)("siblings", 2)("total", ctx_r2.list.pages);
} }
class ReviewsListComponent {
    constructor(shop, url) {
        this.shop = shop;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.productId$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.currentPage = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1);
        this.list = null;
        this.classReviewsList = true;
    }
    set productId(value) {
        if (value !== this.productId$.value) {
            this.currentPage.setValue(1, { emitEvent: false });
            this.productId$.next(value);
        }
    }
    ngOnInit() {
        this.productId$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(productId => {
            if (!productId) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.currentPage.value), this.currentPage.valueChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(page => this.shop.getProductReviews(productId, {
                limit: 8,
                page,
            })));
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(x => this.list = x);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    reload() {
        this.productId$.next(this.productId$.value);
    }
}
ReviewsListComponent.ɵfac = function ReviewsListComponent_Factory(t) { return new (t || ReviewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_4__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"])); };
ReviewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsListComponent, selectors: [["app-reviews-list"]], hostVars: 2, hostBindings: function ReviewsListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("reviews-list", ctx.classReviewsList);
    } }, inputs: { productId: "productId" }, decls: 3, vars: 2, consts: [["empty", ""], [4, "ngIf", "ngIfElse"], [1, "reviews-list__content"], ["class", "reviews-list__item", 4, "ngFor", "ngForOf"], [1, "reviews-list__pagination"], [3, "formControl", "siblings", "total"], [1, "reviews-list__item"], [1, "review"], [1, "review__body"], [1, "review__avatar"], ["alt", "", 3, "src"], [1, "review__meta"], [1, "review__author"], [1, "review__date"], [1, "review__rating"], [3, "value"], [1, "review__content", "typography"]], template: function ReviewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReviewsListComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReviewsListComponent_ng_container_2_Template, 5, 4, "ng-container", 1);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list && ctx.list.total > 0)("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _shared_components_rating_rating_component__WEBPACK_IMPORTED_MODULE_8__["RatingComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXZpZXdzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reviews-list',
                templateUrl: './reviews-list.component.html',
                styleUrls: ['./reviews-list.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_4__["ShopApi"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_5__["UrlService"] }]; }, { productId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classReviewsList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.reviews-list']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-shop-shop-module.js.map