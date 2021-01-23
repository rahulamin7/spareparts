(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-one-home-one-module"],{

/***/ "RVTm":
/*!*********************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/home-one/home-one-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeOneRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeOneRoutingModule", function() { return HomeOneRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ "mAaT");


// pages



const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_2__["PageOneComponent"],
    },
];
class HomeOneRoutingModule {
}
HomeOneRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeOneRoutingModule });
HomeOneRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeOneRoutingModule_Factory(t) { return new (t || HomeOneRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeOneRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeOneRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "mAaT":
/*!*******************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/home-one/pages/page-one/page-one.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneComponent", function() { return PageOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _blocks_block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../blocks/block-finder/block-finder.component */ "nZSD");
/* harmony import */ var _blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/block-features/block-features.component */ "T3He");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/block-products-carousel/block-products-carousel.component */ "EmqW");
/* harmony import */ var _blocks_block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/block-sale/block-sale.component */ "ujiq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blocks_block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/block-banners/block-banners.component */ "YnRZ");
/* harmony import */ var _blocks_block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/block-posts-carousel/block-posts-carousel.component */ "EJXs");
/* harmony import */ var _blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../blocks/block-brands/block-brands.component */ "ES/e");
/* harmony import */ var _blocks_block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../blocks/block-products-columns/block-products-columns.component */ "i9Gj");
/* harmony import */ var _blocks_block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../blocks/block-zone/block-zone.component */ "oTWL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















function PageOneComponent_ng_container_10_app_block_space_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-space", 14);
} }
function PageOneComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-zone", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageOneComponent_ng_container_10_app_block_space_3_Template, 1, 0, "app-block-space", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const blockZone_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", blockZone_r1.image)("mobileImage", blockZone_r1.mobileImage)("category", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, blockZone_r1.category$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
} }
const _c0 = function () { return { label: "Wheel Covers", url: "/shop" }; };
const _c1 = function () { return { label: "Timing Belts", url: "/shop" }; };
const _c2 = function () { return { label: "Oil Pans", url: "/shop" }; };
const _c3 = function () { return { label: "Show All", url: "/shop" }; };
const _c4 = function (a0, a1, a2, a3) { return [a0, a1, a2, a3]; };
const _c5 = function () { return { label: "Special Offers", url: "/blog" }; };
const _c6 = function () { return { label: "New Arrivals", url: "/blog" }; };
const _c7 = function () { return { label: "Reviews", url: "/blog" }; };
const _c8 = function (a0, a1, a2) { return [a0, a1, a2]; };
const _c9 = function (a0, a1) { return { title: a0, products: a1 }; };
class PageOneComponent {
    constructor(shopApi, blogApi) {
        this.shopApi = shopApi;
        this.blogApi = blogApi;
        this.blockZones = [];
        this.brands$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    }
    ngOnInit() {
        this.featuredProducts = this.makeCarouselData([
            {
                label: 'All',
                products$: this.shopApi.getFeaturedProducts(null, 8),
            },
            {
                label: 'Power Tools',
                products$: this.shopApi.getFeaturedProducts('power-tools', 8),
            },
            {
                label: 'Hand Tools',
                products$: this.shopApi.getFeaturedProducts('hand-tools', 8),
            },
            {
                label: 'Plumbing',
                products$: this.shopApi.getFeaturedProducts('plumbing', 8),
            },
        ]);
        this.blockSale = this.makeDeferredData(this.shopApi.getSpecialOffers(8));
        this.blockZones = [
            {
                image: 'assets/images/categories/category-overlay-1.jpg',
                mobileImage: 'assets/images/categories/category-overlay-1-mobile.jpg',
                category$: this.shopApi.getCategoryBySlug('tires-wheels', { depth: 1 }),
            },
            {
                image: 'assets/images/categories/category-overlay-2.jpg',
                mobileImage: 'assets/images/categories/category-overlay-2-mobile.jpg',
                category$: this.shopApi.getCategoryBySlug('interior-parts', { depth: 1 }),
            },
            {
                image: 'assets/images/categories/category-overlay-3.jpg',
                mobileImage: 'assets/images/categories/category-overlay-3-mobile.jpg',
                category$: this.shopApi.getCategoryBySlug('engine-drivetrain', { depth: 1 }),
            },
        ];
        this.newArrivals = this.makeDeferredData(this.shopApi.getLatestProducts(8));
        this.latestPosts = this.makeDeferredData(this.blogApi.getLatestPosts(8));
        this.brands$ = this.shopApi.getBrands({ limit: 16 });
        this.columnTopRated$ = this.shopApi.getTopRatedProducts(null, 3);
        this.columnSpecialOffers$ = this.shopApi.getSpecialOffers(3);
        this.columnBestsellers$ = this.shopApi.getPopularProducts(null, 3);
    }
    groupChange(carousel, group) {
        carousel.subject$.next(group);
    }
    makeCarouselData(groups) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](groups[0]);
        const carouselData = {
            subject$: subject,
            products$: subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => x !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => carouselData.loading = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(group => group.products$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => carouselData.loading = false)),
            loading: true,
            groups,
        };
        return carouselData;
    }
    makeDeferredData(dataSource) {
        const data = {
            loading: true,
            data$: null,
        };
        data.data$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(() => dataSource.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => data.loading = false))));
        return data;
    }
}
PageOneComponent.ɵfac = function PageOneComponent_Factory(t) { return new (t || PageOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_3__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_3__["BlogApi"])); };
PageOneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageOneComponent, selectors: [["app-page-one"]], decls: 33, vars: 74, consts: [["layout", "top-strip"], ["layout", "divider-nl"], ["layout", "grid-5", "rows", "1", 3, "blockTitle", "loading", "products", "groups", "changeGroup"], [3, "loading", "products"], ["layout", "divider-lg"], [4, "ngFor", "ngForOf"], ["layout", "horizontal", "rows", "2", 3, "blockTitle", "loading", "products", "links"], ["layout", "grid", 3, "label", "loading", "posts", "links"], ["layout", "columns-8-full", 3, "brands"], ["layout", "divider-nl", 1, "d-xl-block", "d-none"], [3, "columns"], ["layout", "before-footer"], [3, "image", "mobileImage", "category"], ["layout", "divider-sm", 4, "ngIf"], ["layout", "divider-sm"]], template: function PageOneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-finder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-features", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-block-products-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeGroup", function PageOneComponent_Template_app_block_products_carousel_changeGroup_3_listener($event) { return ctx.groupChange(ctx.featuredProducts, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-block-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-block-sale", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-block-space", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PageOneComponent_ng_container_10_Template, 4, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-block-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-block-banners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-block-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-block-products-carousel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-block-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-block-posts-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-block-space", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-block-brands", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-block-space", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-block-products-columns", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-block-space", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, "HEADER_FEATURED_PRODUCTS"))("loading", ctx.featuredProducts.loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 19, ctx.featuredProducts.products$))("groups", ctx.featuredProducts.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.blockSale.loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 21, ctx.blockSale.data$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blockZones);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 23, "HEADER_NEW_ARRIVALS"))("loading", ctx.newArrivals.loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 25, ctx.newArrivals.data$))("links", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](49, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](48, _c3)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 27, "HEADER_LATEST_NEWS"))("loading", ctx.latestPosts.loading)("posts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 29, ctx.latestPosts.data$))("links", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](57, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](54, _c5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c6), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c7)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("brands", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 31, ctx.brands$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](70, _c8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](61, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 33, "HEADER_TOP_RATED"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 35, ctx.columnTopRated$)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](64, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 37, "HEADER_SPECIAL_OFFERS"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 39, ctx.columnSpecialOffers$)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](67, _c9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 41, "HEADER_BESTSELLERS"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 43, ctx.columnBestsellers$))));
    } }, directives: [_blocks_block_finder_block_finder_component__WEBPACK_IMPORTED_MODULE_4__["BlockFinderComponent"], _blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_5__["BlockFeaturesComponent"], _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_6__["BlockSpaceComponent"], _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_7__["BlockProductsCarouselComponent"], _blocks_block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_8__["BlockSaleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _blocks_block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_10__["BlockBannersComponent"], _blocks_block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsCarouselComponent"], _blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_12__["BlockBrandsComponent"], _blocks_block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_13__["BlockProductsColumnsComponent"], _blocks_block_zone_block_zone_component__WEBPACK_IMPORTED_MODULE_14__["BlockZoneComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageOneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-one',
                templateUrl: './page-one.component.html',
                styleUrls: ['./page-one.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_3__["ShopApi"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_3__["BlogApi"] }]; }, null); })();


/***/ }),

/***/ "yFW4":
/*!*************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/home-one/home-one.module.ts ***!
  \*************************************************************************/
/*! exports provided: HomeOneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeOneModule", function() { return HomeOneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/blocks.module */ "NntI");
/* harmony import */ var _home_one_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-one-routing.module */ "RVTm");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "4fzT");
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ "mAaT");

// modules (angular)

// modules (third-party)

// modules



// pages



class HomeOneModule {
}
HomeOneModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeOneModule });
HomeOneModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeOneModule_Factory(t) { return new (t || HomeOneModule)(); }, imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // modules (third-party)
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
            _home_one_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeOneRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeOneModule, { declarations: [
        // pages
        _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_6__["PageOneComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], 
        // modules
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
        _home_one_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeOneRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeOneModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // pages
                    _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_6__["PageOneComponent"],
                ],
                imports: [
                    // modules (angular)
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // modules (third-party)
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                    // modules
                    _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
                    _home_one_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeOneRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-home-one-home-one-module.js.map