(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-two-home-two-module"],{

/***/ "flCG":
/*!*************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/home-two/home-two.module.ts ***!
  \*************************************************************************/
/*! exports provided: HomeTwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoModule", function() { return HomeTwoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blocks/blocks.module */ "NntI");
/* harmony import */ var _home_two_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-two-routing.module */ "n4ke");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "4fzT");
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ "moHS");

// modules (angular)

// modules (third-party)

// modules



// pages



class HomeTwoModule {
}
HomeTwoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeTwoModule });
HomeTwoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeTwoModule_Factory(t) { return new (t || HomeTwoModule)(); }, imports: [[
            // modules (angular)
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // modules (third-party)
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
            // modules
            _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
            _home_two_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeTwoRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeTwoModule, { declarations: [
        // pages
        _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_6__["PageTwoComponent"]], imports: [
        // modules (angular)
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], 
        // modules
        _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
        _home_two_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeTwoRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeTwoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    // pages
                    _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_6__["PageTwoComponent"],
                ],
                imports: [
                    // modules (angular)
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // modules (third-party)
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(),
                    // modules
                    _blocks_blocks_module__WEBPACK_IMPORTED_MODULE_3__["BlocksModule"],
                    _home_two_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeTwoRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "moHS":
/*!*******************************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/home-two/pages/page-two/page-two.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoComponent", function() { return PageTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/base */ "+mav");
/* harmony import */ var _shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/block-space/block-space.component */ "T+lh");
/* harmony import */ var _blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../blocks/block-slideshow/block-slideshow.component */ "XcHx");
/* harmony import */ var _blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../blocks/block-brands/block-brands.component */ "ES/e");
/* harmony import */ var _blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../blocks/block-categories/block-categories.component */ "URNm");
/* harmony import */ var _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../blocks/block-products-carousel/block-products-carousel.component */ "EmqW");
/* harmony import */ var _blocks_block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../blocks/block-banners/block-banners.component */ "YnRZ");
/* harmony import */ var _blocks_block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../blocks/block-sale/block-sale.component */ "ujiq");
/* harmony import */ var _blocks_block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../blocks/block-posts-carousel/block-posts-carousel.component */ "EJXs");
/* harmony import */ var _blocks_block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../blocks/block-products-columns/block-products-columns.component */ "i9Gj");
/* harmony import */ var _blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../blocks/block-features/block-features.component */ "T3He");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

















const _c0 = "Installation of parts in the services of <br>our partners.";
const _c1 = function () { return { url: "/shop", desktopImage: "assets/images/slides/slide-3.jpg", mobileImage: "assets/images/slides/slide-3-mobile.jpg", offer: "30% OFF", title: "When Buying Parts <br>With Installation", details: _c0, buttonLabel: "Shop Now" }; };
const _c2 = "We have everything you need \u2013 replacement parts, <br>performance parts, accessories, oil & fluids, <br>tools and much more...";
const _c3 = function () { return { url: "/shop", desktopImage: "assets/images/slides/slide-2.jpg", mobileImage: "assets/images/slides/slide-2-mobile.jpg", title: "Not enough <br>spare parts?", details: _c2, buttonLabel: "Shop Now" }; };
const _c4 = "Any size and diameter, with or without spikes, <br>summer or winter, rain or snow.";
const _c5 = function () { return { url: "/shop", desktopImage: "assets/images/slides/slide-1.jpg", mobileImage: "assets/images/slides/slide-1-mobile.jpg", offer: "30% OFF", title: "Big Choice Of <br>Wheel Tires", details: _c4, buttonLabel: "Shop Now" }; };
const _c6 = function (a0, a1, a2) { return [a0, a1, a2]; };
const _c7 = function () { return { label: "Special Offers", url: "/blog" }; };
const _c8 = function () { return { label: "New Arrivals", url: "/blog" }; };
const _c9 = function () { return { label: "Reviews", url: "/blog" }; };
const _c10 = function (a0, a1) { return { title: a0, products: a1 }; };
class PageTwoComponent {
    constructor(shopApi, blogApi) {
        this.shopApi = shopApi;
        this.blogApi = blogApi;
        this.brands$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        this.popularCategories$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
    }
    ngOnInit() {
        this.brands$ = this.shopApi.getBrands({ limit: 16 });
        this.popularCategories$ = this.shopApi.getCategories({
            slugs: [
                'headlights-lighting',
                'fuel-system',
                'body-parts',
                'interior-parts',
                'tires-wheels',
                'engine-drivetrain',
            ],
            depth: 1,
        });
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
        this.latestPosts = this.makeDeferredData(this.blogApi.getLatestPosts(8));
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
PageTwoComponent.ɵfac = function PageTwoComponent_Factory(t) { return new (t || PageTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_3__["ShopApi"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_base__WEBPACK_IMPORTED_MODULE_3__["BlogApi"])); };
PageTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageTwoComponent, selectors: [["app-page-two"]], decls: 32, vars: 70, consts: [["layout", "divider-xs"], [3, "slides"], ["layout", "divider-nl"], ["layout", "columns-8-full", 3, "brands"], [3, "blockTitle", "categories"], ["layout", "grid-5", "rows", "1", 3, "blockTitle", "loading", "products", "groups", "changeGroup"], [3, "loading", "products"], ["layout", "list", 3, "label", "loading", "posts", "links"], ["layout", "divider-nl", 1, "d-xl-block", "d-none"], [3, "columns"], ["layout", "bottom-strip"]], template: function PageTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-block-space", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-block-slideshow", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-block-brands", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-block-categories", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-block-products-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeGroup", function PageTwoComponent_Template_app_block_products_carousel_changeGroup_10_listener($event) { return ctx.groupChange(ctx.featuredProducts, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-block-banners");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-block-sale", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-block-posts-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-block-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-block-products-columns", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-block-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-block-features", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](46, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c5)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("brands", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 15, ctx.brands$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, "HEADER_POPULAR_CATEGORIES"))("categories", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, ctx.popularCategories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blockTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 21, "HEADER_FEATURED_PRODUCTS"))("loading", ctx.featuredProducts.loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 23, ctx.featuredProducts.products$))("groups", ctx.featuredProducts.groups);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.blockSale.loading)("products", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 25, ctx.blockSale.data$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 27, "HEADER_LATEST_NEWS"))("loading", ctx.latestPosts.loading)("posts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 29, ctx.latestPosts.data$))("links", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](53, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](50, _c7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](51, _c8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](52, _c9)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](66, _c6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](57, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 31, "HEADER_TOP_RATED"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 33, ctx.columnTopRated$)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](60, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 35, "HEADER_SPECIAL_OFFERS"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 37, ctx.columnSpecialOffers$)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](63, _c10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 39, "HEADER_BESTSELLERS"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 41, ctx.columnBestsellers$))));
    } }, directives: [_shared_components_block_space_block_space_component__WEBPACK_IMPORTED_MODULE_4__["BlockSpaceComponent"], _blocks_block_slideshow_block_slideshow_component__WEBPACK_IMPORTED_MODULE_5__["BlockSlideshowComponent"], _blocks_block_brands_block_brands_component__WEBPACK_IMPORTED_MODULE_6__["BlockBrandsComponent"], _blocks_block_categories_block_categories_component__WEBPACK_IMPORTED_MODULE_7__["BlockCategoriesComponent"], _blocks_block_products_carousel_block_products_carousel_component__WEBPACK_IMPORTED_MODULE_8__["BlockProductsCarouselComponent"], _blocks_block_banners_block_banners_component__WEBPACK_IMPORTED_MODULE_9__["BlockBannersComponent"], _blocks_block_sale_block_sale_component__WEBPACK_IMPORTED_MODULE_10__["BlockSaleComponent"], _blocks_block_posts_carousel_block_posts_carousel_component__WEBPACK_IMPORTED_MODULE_11__["BlockPostsCarouselComponent"], _blocks_block_products_columns_block_products_columns_component__WEBPACK_IMPORTED_MODULE_12__["BlockProductsColumnsComponent"], _blocks_block_features_block_features_component__WEBPACK_IMPORTED_MODULE_13__["BlockFeaturesComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXR3by5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-two',
                templateUrl: './page-two.component.html',
                styleUrls: ['./page-two.component.scss'],
            }]
    }], function () { return [{ type: _api_base__WEBPACK_IMPORTED_MODULE_3__["ShopApi"] }, { type: _api_base__WEBPACK_IMPORTED_MODULE_3__["BlogApi"] }]; }, null); })();


/***/ }),

/***/ "n4ke":
/*!*********************************************************************************!*\
  !*** ./projects/storefront/src/app/modules/home-two/home-two-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: HomeTwoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoRoutingModule", function() { return HomeTwoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ "moHS");


// pages



const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_2__["PageTwoComponent"],
    },
];
class HomeTwoRoutingModule {
}
HomeTwoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeTwoRoutingModule });
HomeTwoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeTwoRoutingModule_Factory(t) { return new (t || HomeTwoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeTwoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeTwoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-home-two-home-two-module.js.map