(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-home-one-home-one-module~modules-home-two-home-two-module~modules-shop-shop-module"],{

/***/ "EJXs":
/*!***********************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-posts-carousel/block-posts-carousel.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: BlockPostsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockPostsCarouselComponent", function() { return BlockPostsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/services/language.service */ "YfDW");
/* harmony import */ var _shared_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/section-header/section-header.component */ "4ZRl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/owl-prevent-click.directive */ "p+cq");
/* harmony import */ var _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/post-card/post-card.component */ "6QJN");











function BlockPostsCarouselComponent_div_2_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-post-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("post", post_r2);
} }
function BlockPostsCarouselComponent_div_2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockPostsCarouselComponent_div_2_3_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function BlockPostsCarouselComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "owl-carousel-o", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockPostsCarouselComponent_div_2_3_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-posts-carousel__carousel--has-items", (ctx_r0.posts == null ? null : ctx_r0.posts.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
const carouselLayoutOptions = {
    grid: {
        items: 4,
        responsive: {
            1350: { items: 4, margin: 20 },
            1110: { items: 3, margin: 20 },
            930: { items: 3, margin: 16 },
            690: { items: 2, margin: 16 },
            0: { items: 1, margin: 16 },
        },
    },
    list: {
        items: 2,
        responsive: {
            1350: { items: 2, margin: 20 },
            930: { items: 2, margin: 16 },
            0: { items: 1, margin: 16 },
        },
    },
};
class BlockPostsCarouselComponent {
    constructor(language, cd) {
        this.language = language;
        this.cd = cd;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showCarousel = true;
        this.loading = false;
        this.layout = 'grid';
        this.links = [];
        this.posts = [];
        this.classBlock = true;
        this.classBlockPostsCarousel = true;
    }
    get classBlockPostsCarouselLoading() {
        return this.loading;
    }
    get classBlockPostsCarouselLayoutGrid() {
        return this.layout === 'grid';
    }
    get classBlockPostsCarouselLayoutList() {
        return this.layout === 'list';
    }
    ngOnChanges(changes) {
        if (changes.posts) {
            // Well, this is just another hack to get owl-carousel-o to work as expected
            setTimeout(() => {
                this.initOptions();
                this.showCarousel = false;
                this.cd.detectChanges();
                this.showCarousel = true;
            }, 0);
        }
    }
    ngOnInit() {
        this.initOptions();
        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(250)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.initOptions();
            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    initOptions() {
        this.carouselOptions = Object.assign({
            dots: false,
            margin: 20,
            loop: true,
            rtl: this.language.isRTL(),
        }, carouselLayoutOptions[this.layout]);
    }
}
BlockPostsCarouselComponent.ɵfac = function BlockPostsCarouselComponent_Factory(t) { return new (t || BlockPostsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BlockPostsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockPostsCarouselComponent, selectors: [["app-block-posts-carousel"]], viewQuery: function BlockPostsCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, hostVars: 10, hostBindings: function BlockPostsCarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-posts-carousel", ctx.classBlockPostsCarousel)("block-posts-carousel--loading", ctx.classBlockPostsCarouselLoading)("block-posts-carousel--layout--grid", ctx.classBlockPostsCarouselLayoutGrid)("block-posts-carousel--layout--list", ctx.classBlockPostsCarouselLayoutList);
    } }, inputs: { label: "label", loading: "loading", layout: "layout", links: "links", posts: "posts" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 4, consts: [[1, "container"], [3, "sectionTitle", "arrows", "links", "next", "prev"], ["class", "block-posts-carousel__carousel", 3, "block-posts-carousel__carousel--has-items", 4, "ngIf"], [1, "block-posts-carousel__carousel"], [1, "block-posts-carousel__carousel-loader"], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-posts-carousel__item"], [3, "post"]], template: function BlockPostsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-section-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function BlockPostsCarouselComponent_Template_app_section_header_next_1_listener() { return ctx.carousel.next(); })("prev", function BlockPostsCarouselComponent_Template_app_section_header_prev_1_listener() { return ctx.carousel.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockPostsCarouselComponent_div_2_Template, 4, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionTitle", ctx.label)("arrows", true)("links", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_shared_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"], _shared_components_post_card_post_card_component__WEBPACK_IMPORTED_MODULE_8__["PostCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wb3N0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockPostsCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-posts-carousel',
                templateUrl: './block-posts-carousel.component.html',
                styleUrls: ['./block-posts-carousel.component.scss'],
            }]
    }], function () { return [{ type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], posts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockPostsCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-posts-carousel']
        }], classBlockPostsCarouselLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-posts-carousel--loading']
        }], classBlockPostsCarouselLayoutGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-posts-carousel--layout--grid']
        }], classBlockPostsCarouselLayoutList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-posts-carousel--layout--list']
        }], carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]]
        }] }); })();


/***/ }),

/***/ "ES/e":
/*!*******************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-brands/block-brands.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BlockBrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBrandsComponent", function() { return BlockBrandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function BlockBrandsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const brand_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", brand_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](brand_r1.name);
} }
class BlockBrandsComponent {
    constructor() {
        this.layout = 'columns-8-full';
        this.brands = [];
        this.classBlock = true;
        this.classBlockBrands = true;
    }
    get classBlockBrandsLayoutColumns8Full() {
        return this.layout === 'columns-8-full';
    }
    get classBlockBrandsLayoutColumns7Sidebar() {
        return this.layout === 'columns-7-sidebar';
    }
}
BlockBrandsComponent.ɵfac = function BlockBrandsComponent_Factory(t) { return new (t || BlockBrandsComponent)(); };
BlockBrandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockBrandsComponent, selectors: [["app-block-brands"]], hostVars: 8, hostBindings: function BlockBrandsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-brands", ctx.classBlockBrands)("block-brands--layout--columns-8-full", ctx.classBlockBrandsLayoutColumns8Full)("block-brands--layout--columns-7-sidebar", ctx.classBlockBrandsLayoutColumns7Sidebar);
    } }, inputs: { layout: "layout", brands: "brands" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "block-brands__list"], [4, "ngFor", "ngForOf"], [1, "block-brands__item"], ["href", "", 1, "block-brands__item-link"], ["alt", "", 3, "src"], [1, "block-brands__item-name"], ["role", "presentation", 1, "block-brands__divider"]], template: function BlockBrandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockBrandsComponent_ng_container_2_Template, 7, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1icmFuZHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockBrandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-brands',
                templateUrl: './block-brands.component.html',
                styleUrls: ['./block-brands.component.scss'],
            }]
    }], function () { return []; }, { layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], brands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockBrands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-brands']
        }], classBlockBrandsLayoutColumns8Full: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-brands--layout--columns-8-full']
        }], classBlockBrandsLayoutColumns7Sidebar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-brands--layout--columns-7-sidebar']
        }] }); })();


/***/ }),

/***/ "EmqW":
/*!*****************************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-products-carousel/block-products-carousel.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: BlockProductsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsCarouselComponent", function() { return BlockProductsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/services/language.service */ "YfDW");
/* harmony import */ var _shared_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/section-header/section-header.component */ "4ZRl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/directives/owl-prevent-click.directive */ "p+cq");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/product-card/product-card.component */ "1W7l");











function BlockProductsCarouselComponent_div_2_3_ng_template_0_app_product_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-card", 10);
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5)("layout", ctx_r4.productCardLayout)("exclude", ctx_r4.productCardExclude);
} }
function BlockProductsCarouselComponent_div_2_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockProductsCarouselComponent_div_2_3_ng_template_0_app_product_card_1_Template, 1, 3, "app-product-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r2);
} }
function BlockProductsCarouselComponent_div_2_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockProductsCarouselComponent_div_2_3_ng_template_0_Template, 2, 1, "ng-template", 7);
} }
function BlockProductsCarouselComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "owl-carousel-o", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockProductsCarouselComponent_div_2_3_Template, 1, 0, undefined, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-products-carousel__carousel--loading", ctx_r0.loading)("block-products-carousel__carousel--has-items", ctx_r0.columns.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columns);
} }
const carouselLayoutOptions = {
    'grid-4': {
        items: 4,
        responsive: {
            1110: { items: 4 },
            930: { items: 4, margin: 16 },
            690: { items: 3, margin: 16 },
            430: { items: 2, margin: 16 },
            0: { items: 1 },
        },
    },
    'grid-4-sidebar': {
        items: 4,
        responsive: {
            1040: { items: 4 },
            818: { items: 3 },
            638: { items: 3, margin: 16 },
            430: { items: 2, margin: 16 },
            0: { items: 1 },
        },
    },
    'grid-5': {
        items: 5,
        responsive: {
            1350: { items: 5 },
            1110: { items: 4 },
            930: { items: 4, margin: 16 },
            690: { items: 3, margin: 16 },
            430: { items: 2, margin: 16 },
            0: { items: 1 },
        },
    },
    'grid-6': {
        items: 6,
        margin: 16,
        responsive: {
            1350: { items: 6 },
            1110: { items: 5 },
            930: { items: 4, margin: 16 },
            690: { items: 3, margin: 16 },
            430: { items: 2, margin: 16 },
            0: { items: 1 },
        },
    },
    horizontal: {
        items: 4,
        responsive: {
            1350: { items: 4, margin: 14 },
            930: { items: 3, margin: 14 },
            690: { items: 2, margin: 14 },
            0: { items: 1, margin: 14 },
        },
    },
    'horizontal-sidebar': {
        items: 3,
        responsive: {
            1040: { items: 3, margin: 14 },
            638: { items: 2, margin: 14 },
            0: { items: 1, margin: 14 },
        },
    },
};
const productCardLayoutMap = {
    'grid-4': 'grid',
    'grid-4-sidebar': 'grid',
    'grid-5': 'grid',
    'grid-6': 'grid',
    horizontal: 'horizontal',
    'horizontal-sidebar': 'horizontal',
};
const productCardExcludeMap = {
    grid: ['features', 'list-buttons'],
    horizontal: ['actions', 'status-badge', 'features', 'buttons', 'meta'],
};
class BlockProductsCarouselComponent {
    constructor(language, cd) {
        this.language = language;
        this.cd = cd;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.showCarousel = true;
        this.columns = [];
        this.products = [];
        this.layout = 'grid-4';
        this.rows = 1;
        this.groups = [];
        this.links = [];
        this.loading = false;
        this.changeGroup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.classBlock = true;
        this.classBlockProductsCarousel = true;
    }
    get productCardLayout() {
        return productCardLayoutMap[this.layout];
    }
    get productCardExclude() {
        return productCardExcludeMap[this.productCardLayout];
    }
    ngOnChanges(changes) {
        const properties = Object.keys(changes);
        if (properties.includes('products') || properties.includes('row')) {
            this.columns = [];
            if (this.products && this.rows > 0) {
                const products = this.products.slice();
                while (products.length > 0) {
                    this.columns.push(products.splice(0, this.rows));
                }
            }
        }
        if (changes.products) {
            // Well, this is just another hack to get owl-carousel-o to work as expected
            setTimeout(() => {
                this.initOptions();
                this.showCarousel = false;
                this.cd.detectChanges();
                this.showCarousel = true;
            }, 0);
        }
        if (changes.layout) {
            this.initOptions();
        }
    }
    ngOnInit() {
        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(250)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.initOptions();
            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    initOptions() {
        this.carouselOptions = Object.assign({
            dots: false,
            margin: 20,
            loop: true,
            rtl: this.language.isRTL(),
        }, carouselLayoutOptions[this.layout]);
    }
}
BlockProductsCarouselComponent.ɵfac = function BlockProductsCarouselComponent_Factory(t) { return new (t || BlockProductsCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BlockProductsCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductsCarouselComponent, selectors: [["app-block-products-carousel"]], viewQuery: function BlockProductsCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, hostVars: 5, hostBindings: function BlockProductsCarouselComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-layout", ctx.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-products-carousel", ctx.classBlockProductsCarousel);
    } }, inputs: { products: "products", blockTitle: "blockTitle", layout: "layout", rows: "rows", groups: "groups", currentGroup: "currentGroup", links: "links", loading: "loading" }, outputs: { changeGroup: "changeGroup" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 6, consts: [[1, "container"], [3, "sectionTitle", "arrows", "groups", "currentGroup", "links", "next", "prev", "changeGroup"], ["class", "block-products-carousel__carousel", 3, "block-products-carousel__carousel--loading", "block-products-carousel__carousel--has-items", 4, "ngIf"], [1, "block-products-carousel__carousel"], [1, "block-products-carousel__carousel-loader"], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-products-carousel__column"], ["class", "block-products-carousel__cell", 3, "product", "layout", "exclude", 4, "ngFor", "ngForOf"], [1, "block-products-carousel__cell", 3, "product", "layout", "exclude"]], template: function BlockProductsCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-section-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function BlockProductsCarouselComponent_Template_app_section_header_next_1_listener() { return ctx.carousel.next(); })("prev", function BlockProductsCarouselComponent_Template_app_section_header_prev_1_listener() { return ctx.carousel.prev(); })("changeGroup", function BlockProductsCarouselComponent_Template_app_section_header_changeGroup_1_listener($event) { return ctx.changeGroup.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockProductsCarouselComponent_div_2_Template, 4, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sectionTitle", ctx.blockTitle)("arrows", true)("groups", ctx.groups)("currentGroup", ctx.currentGroup)("links", ctx.links);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_shared_components_section_header_section_header_component__WEBPACK_IMPORTED_MODULE_5__["SectionHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_7__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_8__["ProductCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0cy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockProductsCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-products-carousel',
                templateUrl: './block-products-carousel.component.html',
                styleUrls: ['./block-products-carousel.component.scss'],
            }]
    }], function () { return [{ type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blockTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.data-layout']
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockProductsCarousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-products-carousel']
        }], carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]]
        }] }); })();


/***/ }),

/***/ "NntI":
/*!*********************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/blocks.module.ts ***!
  \*********************************************************************/
/*! exports provided: BlocksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksModule", function() { return BlocksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "4fzT");
/* harmony import */ var _block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block-banners/block-banners.component */ "YnRZ");
/* harmony import */ var _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block-brands/block-brands.component */ "ES/e");
/* harmony import */ var _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block-categories/block-categories.component */ "URNm");
/* harmony import */ var _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block-features/block-features.component */ "T3He");
/* harmony import */ var _block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block-finder/block-finder.component */ "nZSD");
/* harmony import */ var _block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./block-posts-carousel/block-posts-carousel.component */ "EJXs");
/* harmony import */ var _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block-products-carousel/block-products-carousel.component */ "EmqW");
/* harmony import */ var _block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./block-products-columns/block-products-columns.component */ "i9Gj");
/* harmony import */ var _block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./block-sale/block-sale.component */ "ujiq");
/* harmony import */ var _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./block-slideshow/block-slideshow.component */ "XcHx");
/* harmony import */ var _block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./block-zone/block-zone.component */ "oTWL");

// modules (angular)



// modules (third-party)


// modules

// blocks













class BlocksModule {
}
BlocksModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BlocksModule });
BlocksModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BlocksModule_Factory(t) { return new (t || BlocksModule)(); }, imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            // modules (third-party)
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
            // modules
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BlocksModule, { declarations: [
        // blocks
        _block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_7__["BlockBannersComponent"],
        _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_8__["BlockBrandsComponent"],
        _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_9__["BlockCategoriesComponent"],
        _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_10__["BlockFeaturesComponent"],
        _block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_11__["BlockFinderComponent"],
        _block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_12__["BlockPostsCarouselComponent"],
        _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsCarouselComponent"],
        _block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsColumnsComponent"],
        _block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_15__["BlockSaleComponent"],
        _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__["BlockSlideshowComponent"],
        _block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_17__["BlockZoneComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        // modules (third-party)
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], 
        // modules
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]], exports: [
        // blocks
        _block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_7__["BlockBannersComponent"],
        _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_8__["BlockBrandsComponent"],
        _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_9__["BlockCategoriesComponent"],
        _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_10__["BlockFeaturesComponent"],
        _block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_11__["BlockFinderComponent"],
        _block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_12__["BlockPostsCarouselComponent"],
        _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsCarouselComponent"],
        _block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsColumnsComponent"],
        _block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_15__["BlockSaleComponent"],
        _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__["BlockSlideshowComponent"],
        _block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_17__["BlockZoneComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlocksModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // blocks
                    _block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_7__["BlockBannersComponent"],
                    _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_8__["BlockBrandsComponent"],
                    _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_9__["BlockCategoriesComponent"],
                    _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_10__["BlockFeaturesComponent"],
                    _block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_11__["BlockFinderComponent"],
                    _block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_12__["BlockPostsCarouselComponent"],
                    _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsCarouselComponent"],
                    _block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsColumnsComponent"],
                    _block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_15__["BlockSaleComponent"],
                    _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__["BlockSlideshowComponent"],
                    _block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_17__["BlockZoneComponent"],
                ],
                exports: [
                    // blocks
                    _block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_7__["BlockBannersComponent"],
                    _block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_8__["BlockBrandsComponent"],
                    _block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_9__["BlockCategoriesComponent"],
                    _block_features_block_features_component__WEBPACK_IMPORTED_MODULE_10__["BlockFeaturesComponent"],
                    _block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_11__["BlockFinderComponent"],
                    _block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_12__["BlockPostsCarouselComponent"],
                    _block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsCarouselComponent"],
                    _block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_14__["BlockProductsColumnsComponent"],
                    _block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_15__["BlockSaleComponent"],
                    _block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_16__["BlockSlideshowComponent"],
                    _block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_17__["BlockZoneComponent"],
                ],
                imports: [
                    // modules (angular)
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    // modules (third-party)
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild(),
                    // modules
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "T3He":
/*!***********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-features/block-features.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: BlockFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFeaturesComponent", function() { return BlockFeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/icon/icon.component */ "6IpJ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class BlockFeaturesComponent {
    constructor() {
        this.layout = 'top-strip';
        this.classBlock = true;
        this.classBlockFeatures = true;
    }
    get classBlockFeaturesLayoutTopStrip() {
        return this.layout === 'top-strip';
    }
    get classBlockFeaturesLayoutBottomStrip() {
        return this.layout === 'bottom-strip';
    }
}
BlockFeaturesComponent.ɵfac = function BlockFeaturesComponent_Factory(t) { return new (t || BlockFeaturesComponent)(); };
BlockFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockFeaturesComponent, selectors: [["app-block-features"]], hostVars: 8, hostBindings: function BlockFeaturesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-features", ctx.classBlockFeatures)("block-features--layout--top-strip", ctx.classBlockFeaturesLayoutTopStrip)("block-features--layout--bottom-strip", ctx.classBlockFeaturesLayoutBottomStrip);
    } }, inputs: { layout: "layout" }, decls: 42, vars: 24, consts: [[1, "container"], [1, "block-features__list"], [1, "block-features__item"], [1, "block-features__item-icon"], ["icon", "fi-free-delivery-48"], [1, "block-features__item-info"], [1, "block-features__item-title"], [1, "block-features__item-subtitle"], ["icon", "fi-24-hours-48"], ["icon", "fi-payment-security-48"], ["icon", "fi-tag-48"]], template: function BlockFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, "TEXT_SHOP_FEATURE_FREE_SHIPPING_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 10, "TEXT_SHOP_FEATURE_FREE_SHIPPING_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 12, "TEXT_SHOP_FEATURE_SUPPORT_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 14, "TEXT_SHOP_FEATURE_SUPPORT_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 16, "TEXT_SHOP_FEATURE_SECURITY_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 18, "TEXT_SHOP_FEATURE_SECURITY_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 20, "TEXT_SHOP_FEATURE_HOT_OFFERS_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 22, "TEXT_SHOP_FEATURE_HOT_OFFERS_SUBTITLE"));
    } }, directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockFeaturesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-features',
                templateUrl: './block-features.component.html',
                styleUrls: ['./block-features.component.scss'],
            }]
    }], function () { return []; }, { layout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockFeatures: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-features']
        }], classBlockFeaturesLayoutTopStrip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-features--layout--top-strip']
        }], classBlockFeaturesLayoutBottomStrip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-features--layout--bottom-strip']
        }] }); })();


/***/ }),

/***/ "URNm":
/*!***************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-categories/block-categories.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: BlockCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockCategoriesComponent", function() { return BlockCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_decor_decor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/decor/decor.component */ "yAsh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");







function BlockCategoriesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-decor", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.blockTitle, " ");
} }
function BlockCategoriesComponent_div_5_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r3.url.category(child_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r4.name);
} }
function BlockCategoriesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BlockCategoriesComponent_div_5_li_11_Template, 3, 2, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.category(category_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", category_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.category(category_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.children[category_r2.slug]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.url.category(category_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 7, "LINK_SHOP_ALL"), " ");
} }
class BlockCategoriesComponent {
    constructor(url) {
        this.url = url;
        this.categories = [];
        this.classBlock = true;
        this.classBlockCategories = true;
    }
    ngOnChanges(changes) {
        if (changes.categories) {
            this.children = {};
            this.categories.forEach(category => {
                this.children[category.slug] = category.children.slice(0, 5);
            });
        }
    }
}
BlockCategoriesComponent.ɵfac = function BlockCategoriesComponent_Factory(t) { return new (t || BlockCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"])); };
BlockCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockCategoriesComponent, selectors: [["app-block-categories"]], hostVars: 4, hostBindings: function BlockCategoriesComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-categories", ctx.classBlockCategories);
    } }, inputs: { blockTitle: "blockTitle", categories: "categories" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 2, consts: [["class", "container", 4, "ngIf"], [1, "block-categories__body"], ["type", "bottom", 1, "block-categories__body-decor"], [1, "container"], [1, "block-categories__list"], ["class", "block-categories__item category-card category-card--layout--classic", 4, "ngFor", "ngForOf"], [1, "block-categories__header"], [1, "block-categories__title"], ["type", "center", 1, "block-categories__title-decor"], [1, "block-categories__item", "category-card", "category-card--layout--classic"], [1, "category-card__body"], [1, "category-card__content"], [1, "category-card__image", "image", "image--type--category"], [1, "image__body", 3, "routerLink"], ["alt", "", 1, "image__tag", 3, "src"], [1, "category-card__info"], [1, "category-card__name"], [3, "routerLink"], [1, "category-card__children"], [4, "ngFor", "ngForOf"], [1, "category-card__actions"], [1, "category-card__link", 3, "routerLink"]], template: function BlockCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockCategoriesComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-decor", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlockCategoriesComponent_div_5_Template, 16, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.blockTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_decor_decor_component__WEBPACK_IMPORTED_MODULE_3__["DecorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-categories',
                templateUrl: './block-categories.component.html',
                styleUrls: ['./block-categories.component.scss'],
            }]
    }], function () { return [{ type: _services_url_service__WEBPACK_IMPORTED_MODULE_1__["UrlService"] }]; }, { blockTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockCategories: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-categories']
        }] }); })();


/***/ }),

/***/ "XcHx":
/*!*************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-slideshow/block-slideshow.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: BlockSlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSlideshowComponent", function() { return BlockSlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/services/language.service */ "YfDW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/directives/owl-prevent-click.directive */ "p+cq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function BlockSlideshowComponent_div_1_2_ng_template_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r2.offer);
} }
function BlockSlideshowComponent_div_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockSlideshowComponent_div_1_2_ng_template_0_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", slide_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + slide_r2.desktopImage + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + slide_r2.mobileImage + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r2.offer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r2.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", slide_r2.details, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r2.buttonLabel);
} }
function BlockSlideshowComponent_div_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockSlideshowComponent_div_1_2_ng_template_0_Template, 8, 9, "ng-template", 5);
} }
function BlockSlideshowComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockSlideshowComponent_div_1_2_Template, 1, 0, undefined, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.slides);
} }
class BlockSlideshowComponent {
    constructor(language, cd) {
        this.language = language;
        this.cd = cd;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showCarousel = true;
        this.slides = [];
        this.classBlock = true;
        this.classBlockSlideshow = true;
    }
    ngOnInit() {
        this.initOptions();
        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(250)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.initOptions();
            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    initOptions() {
        this.carouselOptions = {
            items: 1,
            dots: true,
            loop: true,
            rtl: this.language.isRTL(),
        };
    }
}
BlockSlideshowComponent.ɵfac = function BlockSlideshowComponent_Factory(t) { return new (t || BlockSlideshowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BlockSlideshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockSlideshowComponent, selectors: [["app-block-slideshow"]], hostVars: 4, hostBindings: function BlockSlideshowComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-slideshow", ctx.classBlockSlideshow);
    } }, inputs: { slides: "slides" }, decls: 2, vars: 1, consts: [[1, "container"], ["class", "block-slideshow__carousel", 4, "ngIf"], [1, "block-slideshow__carousel"], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-slideshow__item", 3, "routerLink"], [1, "block-slideshow__item-image", "block-slideshow__item-image--desktop", "reflect-rtl"], [1, "block-slideshow__item-image", "block-slideshow__item-image--mobile", "reflect-rtl"], ["class", "block-slideshow__item-offer", 4, "ngIf"], [1, "block-slideshow__item-title", 3, "innerHTML"], [1, "block-slideshow__item-details", 3, "innerHTML"], [1, "block-slideshow__item-button"], [1, "block-slideshow__item-offer"]], template: function BlockSlideshowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlockSlideshowComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_6__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__["CarouselSlideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1zbGlkZXNob3cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockSlideshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-slideshow',
                templateUrl: './block-slideshow.component.html',
                styleUrls: ['./block-slideshow.component.scss'],
            }]
    }], function () { return [{ type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { slides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockSlideshow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-slideshow']
        }] }); })();


/***/ }),

/***/ "YnRZ":
/*!*********************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-banners/block-banners.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: BlockBannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockBannersComponent", function() { return BlockBannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




class BlockBannersComponent {
    constructor() {
        this.classBlock = true;
        this.classBlockBanners = true;
    }
}
BlockBannersComponent.ɵfac = function BlockBannersComponent_Factory(t) { return new (t || BlockBannersComponent)(); };
BlockBannersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockBannersComponent, selectors: [["app-block-banners"]], hostVars: 4, hostBindings: function BlockBannersComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-banners", ctx.classBlockBanners);
    } }, decls: 28, vars: 18, consts: [[1, "container"], [1, "block-banners__list"], ["routerLink", "/", 1, "block-banners__item", "block-banners__item--style--one"], [1, "block-banners__item-image"], ["src", "assets/images/banners/banner1.jpg", "alt", "", 1, "reflect-rtl"], [1, "block-banners__item-image", "block-banners__item-image--blur"], [1, "block-banners__item-title"], [1, "block-banners__item-details", 3, "innerHTML"], [1, "block-banners__item-button", "btn", "btn-primary", "btn-sm"], ["routerLink", "/", 1, "block-banners__item", "block-banners__item--style--two"], ["src", "assets/images/banners/banner2.jpg", "alt", "", 1, "reflect-rtl"]], template: function BlockBannersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "TEXT_BANNER_ONE_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "TEXT_BANNER_ONE_SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 10, "TEXT_BANNER_ONE_BUTTON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, "TEXT_BANNER_TWO_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 14, "TEXT_BANNER_TWO_SUBTITLE"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 16, "TEXT_BANNER_TWO_BUTTON"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1iYW5uZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockBannersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-banners',
                templateUrl: './block-banners.component.html',
                styleUrls: ['./block-banners.component.scss'],
            }]
    }], function () { return []; }, { classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockBanners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-banners']
        }] }); })();


/***/ }),

/***/ "i9Gj":
/*!***************************************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-products-columns/block-products-columns.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: BlockProductsColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockProductsColumnsComponent", function() { return BlockProductsColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/product-card/product-card.component */ "1W7l");




const _c0 = function () { return ["actions", "status-badge", "features", "buttons", "meta"]; };
function BlockProductsColumnsComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r3)("exclude", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function BlockProductsColumnsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BlockProductsColumnsComponent_div_2_div_4_Template, 2, 3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", column_r1.products);
} }
class BlockProductsColumnsComponent {
    constructor() {
        this.columns = [];
        this.classBlock = true;
        this.classBlockProductsColumns = true;
    }
}
BlockProductsColumnsComponent.ɵfac = function BlockProductsColumnsComponent_Factory(t) { return new (t || BlockProductsColumnsComponent)(); };
BlockProductsColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockProductsColumnsComponent, selectors: [["app-block-products-columns"]], hostVars: 4, hostBindings: function BlockProductsColumnsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-products-columns", ctx.classBlockProductsColumns);
    } }, inputs: { columns: "columns" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "block-products-columns__title"], [1, "block-products-columns__list"], ["class", "block-products-columns__list-item", 4, "ngFor", "ngForOf"], [1, "block-products-columns__list-item"], [3, "product", "exclude"]], template: function BlockProductsColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockProductsColumnsComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__["ProductCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1wcm9kdWN0cy1jb2x1bW5zLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockProductsColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-products-columns',
                templateUrl: './block-products-columns.component.html',
                styleUrls: ['./block-products-columns.component.scss'],
            }]
    }], function () { return []; }, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockProductsColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-products-columns']
        }] }); })();


/***/ }),

/***/ "nZSD":
/*!*******************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-finder/block-finder.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BlockFinderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFinderComponent", function() { return BlockFinderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/url.service */ "Wbe3");
/* harmony import */ var _shared_components_decor_decor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/decor/decor.component */ "yAsh");
/* harmony import */ var _shared_components_vehicle_select_vehicle_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/vehicle-select/vehicle-select.component */ "wcKU");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class BlockFinderComponent {
    constructor(router, url) {
        this.router = router;
        this.url = url;
        this.vehicleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null);
        this.classBlock = true;
        this.classBlockFinder = true;
    }
    get vehicle() { return this.vehicleControl.value; }
    submit() {
        if (!this.vehicle) {
            return;
        }
        this.router.navigate([this.url.allProducts()], {
            queryParams: {
                filter_vehicle: this.vehicle.id,
            },
        }).then();
    }
}
BlockFinderComponent.ɵfac = function BlockFinderComponent_Factory(t) { return new (t || BlockFinderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"])); };
BlockFinderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockFinderComponent, selectors: [["app-block-finder"]], hostVars: 4, hostBindings: function BlockFinderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-finder", ctx.classBlockFinder);
    } }, decls: 14, vars: 10, consts: [["type", "bottom", 1, "block-finder__decor"], [1, "block-finder__image", 2, "background-image", "url(assets/images/finder.jpg)"], [1, "block-finder__body", "container", "container--max--xl"], [1, "block-finder__title"], [1, "block-finder__subtitle"], [1, "block-finder__form", 3, "submit"], [1, "block-finder__select", 3, "formControl"], ["type", "submit", 1, "block-finder__button"]], template: function BlockFinderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-decor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function BlockFinderComponent_Template_form_submit_9_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-vehicle-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "TEXT_BLOCK_FINDER_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "TEXT_BLOCK_FINDER_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.vehicleControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "BUTTON_BLOCK_FINDER_SEARCH"));
    } }, directives: [_shared_components_decor_decor_component__WEBPACK_IMPORTED_MODULE_4__["DecorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _shared_components_vehicle_select_vehicle_select_component__WEBPACK_IMPORTED_MODULE_5__["VehicleSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1maW5kZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockFinderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-finder',
                templateUrl: './block-finder.component.html',
                styleUrls: ['./block-finder.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_3__["UrlService"] }]; }, { classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockFinder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-finder']
        }] }); })();


/***/ }),

/***/ "oTWL":
/*!***************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-zone/block-zone.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BlockZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockZoneComponent", function() { return BlockZoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/base */ "+mav");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/services/language.service */ "YfDW");
/* harmony import */ var _services_url_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/url.service */ "Wbe3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/arrow/arrow.component */ "Qocv");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/owl-prevent-click.directive */ "p+cq");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/product-card/product-card.component */ "1W7l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















function BlockZoneComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.url.category(child_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r3.name);
} }
function BlockZoneComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockZoneComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const tab_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setCurrentTab(tab_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-zone__tabs-button--active", tab_r4 == ctx_r1.currentTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, tab_r4.name));
} }
const _c0 = function () { return ["features", "list-buttons"]; };
function BlockZoneComponent_div_26_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r8)("exclude", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function BlockZoneComponent_div_26_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockZoneComponent_div_26_3_ng_template_0_Template, 2, 3, "ng-template", 27);
} }
function BlockZoneComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "owl-carousel-o", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlockZoneComponent_div_26_3_Template, 1, 0, undefined, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block-zone__carousel--loading", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r2.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx_r2.products$));
} }
class BlockZoneComponent {
    constructor(shopApi, language, cd, url) {
        this.shopApi = shopApi;
        this.language = language;
        this.cd = cd;
        this.url = url;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = true;
        this.showCarousel = true;
        this.children = [];
        this.tabs = [];
        this.classBlock = true;
        this.classBlockZone = true;
    }
    get currentTab() { return this.currentTab$.value; }
    ngOnChanges(changes) {
        if (changes.category) {
            this.children = this.category.children ? this.category.children.slice(0, 7) : [];
        }
    }
    ngOnInit() {
        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(250)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.initOptions();
            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
        this.tabs = [
            {
                name: 'TEXT_TAB_FEATURED',
                products$: this.shopApi.getFeaturedProducts(this.category.slug, 6),
            },
            {
                name: 'TEXT_TAB_BESTSELLERS',
                products$: this.shopApi.getPopularProducts(this.category.slug, 6),
            },
            {
                name: 'TEXT_TAB_TOP_RATED',
                products$: this.shopApi.getTopRatedProducts(this.category.slug, 6),
            },
        ];
        this.currentTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tabs[0]);
        this.products$ = this.currentTab$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => this.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(tab => tab.products$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.loading = false;
            // Well, this is just another hack to get owl-carousel-o to work as expected
            this.initOptions();
            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setCurrentTab(tab) {
        this.currentTab$.next(tab);
    }
    initOptions() {
        this.carouselOptions = {
            dots: false,
            margin: 20,
            loop: true,
            items: 4,
            rtl: this.language.isRTL(),
            responsive: {
                1020: { items: 4, margin: 20 },
                630: { items: 3, margin: 16 },
                410: { items: 2, margin: 16 },
                0: { items: 1 },
            },
        };
    }
}
BlockZoneComponent.ɵfac = function BlockZoneComponent_Factory(t) { return new (t || BlockZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_4__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"])); };
BlockZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockZoneComponent, selectors: [["app-block-zone"]], viewQuery: function BlockZoneComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, hostVars: 4, hostBindings: function BlockZoneComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-zone", ctx.classBlockZone);
    } }, inputs: { image: "image", mobileImage: "mobileImage", category: "category" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 27, vars: 15, consts: [[1, "container"], [1, "block-zone__body"], [1, "block-zone__card", "category-card", "category-card--layout--overlay"], [1, "category-card__body"], [1, "category-card__overlay-image"], ["sizes", "(max-width: 575px) 530px, 305px", "alt", "", 3, "srcset", "src"], [1, "category-card__overlay-image", "category-card__overlay-image--blur"], [1, "category-card__content"], [1, "category-card__info"], [1, "category-card__name"], [3, "routerLink"], [1, "category-card__children"], [4, "ngFor", "ngForOf"], [1, "category-card__actions"], [1, "btn", "btn-primary", "btn-sm", 3, "routerLink"], [1, "block-zone__widget"], [1, "block-zone__widget-header"], [1, "block-zone__tabs"], ["type", "button", "class", "block-zone__tabs-button", 3, "block-zone__tabs-button--active", "click", 4, "ngFor", "ngForOf"], ["direction", "prev", 1, "block-zone__arrow", "block-zone__arrow--prev", 3, "click"], ["direction", "next", 1, "block-zone__arrow", "block-zone__arrow--next", 3, "click"], [1, "block-zone__widget-body"], ["class", "block-zone__carousel", 3, "block-zone__carousel--loading", 4, "ngIf"], ["type", "button", 1, "block-zone__tabs-button", 3, "click"], [1, "block-zone__carousel"], [1, "block-zone__carousel-loader"], ["appOwlPreventClick", "", 3, "options"], ["carouselSlide", ""], [1, "block-zone__carousel-item"], [3, "product", "exclude"]], template: function BlockZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BlockZoneComponent_li_14_Template, 3, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BlockZoneComponent_button_22_Template, 3, 5, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-arrow", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockZoneComponent_Template_app_arrow_click_23_listener() { return ctx.carousel.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-arrow", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockZoneComponent_Template_app_arrow_click_24_listener() { return ctx.carousel.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BlockZoneComponent_div_26_Template, 5, 6, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("srcset", "", ctx.mobileImage, " 530w, ", ctx.image, " 305w", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("srcset", "", ctx.mobileImage, " 530w, ", ctx.image, " 305w", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.url.category(ctx.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category == null ? null : ctx.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.children);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.url.category(ctx.category));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "BUTTON_SHOP_ALL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_9__["ArrowComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_10__["OwlPreventClickDirective"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay16b25lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-zone',
                templateUrl: './block-zone.component.html',
                styleUrls: ['./block-zone.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_4__["ShopApi"] }, { type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_5__["LanguageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_url_service__WEBPACK_IMPORTED_MODULE_6__["UrlService"] }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mobileImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-zone']
        }], carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]]
        }] }); })();


/***/ }),

/***/ "ujiq":
/*!***************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/blocks/block-sale/block-sale.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BlockSaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockSaleComponent", function() { return BlockSaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/services/language.service */ "YfDW");
/* harmony import */ var _shared_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/timer/timer.component */ "u3LJ");
/* harmony import */ var _shared_components_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/arrow/arrow.component */ "Qocv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_decor_decor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/decor/decor.component */ "yAsh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/owl-prevent-click.directive */ "p+cq");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/product-card/product-card.component */ "1W7l");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");















const _c0 = function () { return ["features", "list-buttons"]; };
function BlockSaleComponent_div_23_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2)("exclude", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function BlockSaleComponent_div_23_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlockSaleComponent_div_23_2_ng_template_0_Template, 2, 3, "ng-template", 21);
} }
function BlockSaleComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "owl-carousel-o", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BlockSaleComponent_div_23_2_Template, 1, 0, undefined, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r0.carouselOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
} }
class BlockSaleComponent {
    constructor(language, cd) {
        this.language = language;
        this.cd = cd;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.showCarousel = true;
        this.loading = false;
        this.products = [];
        this.classBlock = true;
        this.classBlockSale = true;
    }
    get classBlockSaleLoading() { return this.loading; }
    ngOnChanges(changes) {
        if (changes.products) {
            // Well, this is just another hack to get owl-carousel-o to work as expected
            setTimeout(() => {
                this.initOptions();
                this.showCarousel = false;
                this.cd.detectChanges();
                this.showCarousel = true;
            }, 0);
        }
    }
    ngOnInit() {
        this.initOptions();
        // Since ngx-owl-carousel-o cannot re-initialize itself, we will do it manually when the direction changes.
        this.language.directionChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(250)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$)).subscribe(() => {
            this.initOptions();
            this.showCarousel = false;
            this.cd.detectChanges();
            this.showCarousel = true;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    initOptions() {
        this.carouselOptions = {
            items: 5,
            dots: false,
            margin: 24,
            loop: true,
            rtl: this.language.isRTL(),
            responsive: {
                1350: { items: 5, margin: 24 },
                1110: { items: 4, margin: 24 },
                930: { items: 4, margin: 16 },
                690: { items: 3, margin: 16 },
                410: { items: 2, margin: 16 },
                0: { items: 1 },
            },
        };
    }
}
BlockSaleComponent.ɵfac = function BlockSaleComponent_Factory(t) { return new (t || BlockSaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BlockSaleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockSaleComponent, selectors: [["app-block-sale"]], viewQuery: function BlockSaleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, hostVars: 6, hostBindings: function BlockSaleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("block", ctx.classBlock)("block-sale", ctx.classBlockSale)("block-sale--loading", ctx.classBlockSaleLoading);
    } }, inputs: { loading: "loading", products: "products" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 24, vars: 11, consts: [[1, "block-sale__content"], [1, "block-sale__header"], [1, "block-sale__title"], [1, "block-sale__subtitle"], [1, "block-sale__timer"], [3, "time"], [1, "block-sale__controls"], ["direction", "prev", 1, "block-sale__arrow", "block-sale__arrow--prev", 3, "click"], [1, "block-sale__link"], ["routerLink", "/"], ["direction", "next", 1, "block-sale__arrow", "block-sale__arrow--next", 3, "click"], ["type", "center", 1, "block-sale__header-decor"], [1, "block-sale__body"], ["type", "bottom", 1, "block-sale__body-decor"], [1, "block-sale__image", 2, "background-image", "url(assets/images/sale.jpg)"], [1, "block-sale__loader"], [1, "container"], ["class", "block-sale__carousel", 4, "ngIf"], [1, "block-sale__carousel"], ["appOwlPreventClick", "", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], [1, "block-sale__item"], [3, "product", "exclude"]], template: function BlockSaleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-timer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-arrow", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockSaleComponent_Template_app_arrow_click_11_listener() { return ctx.carousel.prev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-arrow", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlockSaleComponent_Template_app_arrow_click_16_listener() { return ctx.carousel.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-decor", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-decor", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BlockSaleComponent_div_23_Template, 3, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "HEADER_DEAL_ZONE_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "HEADER_DEAL_ZONE_SUBTITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("time", 3 * 24 * 60 * 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "LINK_VIEW_ALL_AVAILABLE_OFFERS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCarousel);
    } }, directives: [_shared_components_timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"], _shared_components_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_6__["ArrowComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _shared_components_decor_decor_component__WEBPACK_IMPORTED_MODULE_8__["DecorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"], _shared_directives_owl_prevent_click_directive__WEBPACK_IMPORTED_MODULE_10__["OwlPreventClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselSlideDirective"], _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_11__["ProductCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay1zYWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlockSaleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-block-sale',
                templateUrl: './block-sale.component.html',
                styleUrls: ['./block-sale.component.scss'],
            }]
    }], function () { return [{ type: _language_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classBlock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block']
        }], classBlockSale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-sale']
        }], classBlockSaleLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.block-sale--loading']
        }], carousel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__["CarouselComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=default~modules-home-one-home-one-module~modules-home-two-home-two-module~modules-shop-shop-module.js.map