(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{URAG:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var a=i("HDdC");function s(e,t=!0){return new a.a(i=>{const a=matchMedia(e),s=()=>i.next(a);return t||s(),a.addEventListener?(a.addEventListener("change",s),()=>a.removeEventListener("change",s)):(a.addListener(s),()=>a.removeListener(s))})}},V3dM:function(e,t,i){"use strict";i.d(t,"a",function(){return v});var a=i("fXoL"),s=i("URAG"),r=i("XNiG"),n=i("pLZG"),c=i("1G5W"),l=i("ofXK"),o=i("tyNb");function b(e,t){1&e&&a.Lb(0,"li",4)}function u(e,t){if(1&e&&(a.Ob(0),a.Qb(1,"span",7),a.Gc(2),a.Pb(),a.Nb()),2&e){const e=a.ac().$implicit;a.xb(2),a.Hc(e.label)}}function d(e,t){if(1&e&&(a.Ob(0),a.Qb(1,"a",8),a.Gc(2),a.Pb(),a.Nb()),2&e){const e=a.ac().$implicit;a.xb(1),a.hc("routerLink",e.url),a.xb(1),a.Hc(e.label)}}function m(e,t){if(1&e&&(a.Qb(0,"li",5),a.Ec(1,u,3,1,"ng-container",6),a.Ec(2,d,3,2,"ng-container",6),a.Pb()),2&e){const e=t.last;a.Cb("breadcrumb__item--first",t.first)("breadcrumb__item--last",e)("breadcrumb__item--parent",!e)("breadcrumb__item--current",e),a.yb("aria-current",e?"page":void 0),a.xb(1),a.hc("ngIf",e),a.xb(1),a.hc("ngIf",!e)}}function p(e,t){1&e&&a.Lb(0,"li",9)}let h=(()=>{class e{constructor(){this.items=[],this.withPageTitle=!1,this.afterHeader=!0,this.classBreadcrumb=!0,this.attrAriaLabel="breadcrumb"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["app-breadcrumb"]],hostVars:3,hostBindings:function(e,t){2&e&&(a.yb("aria-label",t.attrAriaLabel),a.Cb("breadcrumb",t.classBreadcrumb))},inputs:{items:"items",withPageTitle:"withPageTitle",afterHeader:"afterHeader"},decls:4,vars:3,consts:[[1,"breadcrumb__list"],["class","breadcrumb__spaceship-safe-area","role","presentation",4,"ngIf"],["class","breadcrumb__item",3,"breadcrumb__item--first","breadcrumb__item--last","breadcrumb__item--parent","breadcrumb__item--current",4,"ngFor","ngForOf"],["class","breadcrumb__title-safe-area","role","presentation",4,"ngIf"],["role","presentation",1,"breadcrumb__spaceship-safe-area"],[1,"breadcrumb__item"],[4,"ngIf"],[1,"breadcrumb__item-link"],[1,"breadcrumb__item-link",3,"routerLink"],["role","presentation",1,"breadcrumb__title-safe-area"]],template:function(e,t){1&e&&(a.Qb(0,"ol",0),a.Ec(1,b,1,0,"li",1),a.Ec(2,m,3,11,"li",2),a.Ec(3,p,1,0,"li",3),a.Pb()),2&e&&(a.xb(1),a.hc("ngIf",t.afterHeader),a.xb(1),a.hc("ngForOf",t.items),a.xb(1),a.hc("ngIf",t.withPageTitle))},directives:[l.l,l.k,o.i],styles:[""]}),e})();const g=["titleElement"];function f(e,t){if(1&e&&a.Lb(0,"app-breadcrumb",4),2&e){const e=a.ac();a.hc("items",e.breadcrumb)("withPageTitle",!!e.pageTitle)("afterHeader",e.afterHeader)}}function _(e,t){if(1&e&&(a.Qb(0,"h1",5,6),a.Gc(2),a.Pb()),2&e){const e=a.ac();a.xb(2),a.Hc(e.pageTitle)}}let v=(()=>{class e{constructor(e,t,i){this.platformId=e,this.zone=t,this.elementRef=i,this.destroy$=new r.a,this.breadcrumb=[],this.afterHeader=!0,this.classBlockHeader=!0,this.reCalcTitleWidth=!1}get classBlockHeaderHasTitle(){return!!this.pageTitle}get classBlockHeaderHasBreadcrumb(){return this.breadcrumb.length>0}get titleElement(){var e;return null===(e=this.titleElementRef)||void 0===e?void 0:e.nativeElement}get element(){return this.elementRef.nativeElement}ngOnChanges(e){e.pageTitle&&!e.pageTitle.isFirstChange()&&(this.reCalcTitleWidth=!0)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterViewInit(){Object(l.w)(this.platformId)&&this.zone.runOutsideAngular(()=>{Object(s.a)("(min-width: 1200px)",!1).pipe(Object(n.a)(e=>e.matches),Object(c.a)(this.destroy$)).subscribe(()=>this.calcTitleWidth())})}ngAfterViewChecked(){this.reCalcTitleWidth&&(this.reCalcTitleWidth=!1,this.calcTitleWidth())}calcTitleWidth(){if(!this.element||!this.titleElement)return;const e=this.titleElement.getBoundingClientRect().width;this.element.style.setProperty("--block-header-title-width",e+"px")}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(a.B),a.Kb(a.z),a.Kb(a.l))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-block-header"]],viewQuery:function(e,t){if(1&e&&a.Mc(g,!0),2&e){let e;a.sc(e=a.Yb())&&(t.titleElementRef=e.first)}},hostVars:6,hostBindings:function(e,t){2&e&&a.Cb("block-header",t.classBlockHeader)("block-header--has-title",t.classBlockHeaderHasTitle)("block-header--has-breadcrumb",t.classBlockHeaderHasBreadcrumb)},inputs:{pageTitle:"pageTitle",breadcrumb:"breadcrumb",afterHeader:"afterHeader"},features:[a.vb],decls:4,vars:2,consts:[[1,"container"],[1,"block-header__body"],["class","block-header__breadcrumb",3,"items","withPageTitle","afterHeader",4,"ngIf"],["class","block-header__title",4,"ngIf"],[1,"block-header__breadcrumb",3,"items","withPageTitle","afterHeader"],[1,"block-header__title"],["titleElement",""]],template:function(e,t){1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Ec(2,f,1,3,"app-breadcrumb",2),a.Ec(3,_,3,1,"h1",3),a.Pb(),a.Pb()),2&e&&(a.xb(2),a.hc("ngIf",t.breadcrumb.length),a.xb(1),a.hc("ngIf",t.pageTitle))},directives:[l.l,h],styles:[""]}),e})()},cCGz:function(e,t,i){"use strict";i.d(t,"a",function(){return m});var a=i("fXoL"),s=i("Wbe3"),r=i("ofXK"),n=i("enV0"),c=i("tyNb"),l=i("Iowo");function o(e,t){if(1&e&&(a.Qb(0,"div",3),a.Qb(1,"h4"),a.Gc(2),a.Pb(),a.Pb()),2&e){const e=a.ac();a.xb(2),a.Hc(e.widgetTitle)}}function b(e,t){if(1&e&&(a.Qb(0,"li",12),a.Qb(1,"a",6),a.Gc(2),a.Pb(),a.Pb()),2&e){const e=t.$implicit,i=a.ac(3);a.xb(1),a.hc("routerLink",i.url.category(e)),a.xb(1),a.Hc(e.name)}}function u(e,t){if(1&e){const e=a.Rb();a.Ob(0),a.Qb(1,"button",8),a.Xb("click",function(){return a.wc(e),a.ac(),a.tc(1).toggle()}),a.Pb(),a.Qb(2,"div",9),a.Qb(3,"ul",10),a.Ec(4,b,3,2,"li",11),a.Pb(),a.Pb(),a.Nb()}if(2&e){const e=a.ac().$implicit;a.xb(4),a.hc("ngForOf",e.children)}}function d(e,t){if(1&e&&(a.Qb(0,"li",4,5),a.Qb(2,"a",6),a.Gc(3),a.Pb(),a.Ec(4,u,5,1,"ng-container",7),a.Pb()),2&e){const e=t.$implicit,i=a.ac();a.xb(2),a.hc("routerLink",i.url.category(e)),a.xb(1),a.Ic(" ",e.name," "),a.xb(1),a.hc("ngIf",null==e.children?null:e.children.length)}}let m=(()=>{class e{constructor(e){this.url=e,this.categories=[],this.classCard=!0,this.classWidget=!0,this.classWidgetCategories=!0}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(s.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-widget-categories"]],hostVars:6,hostBindings:function(e,t){2&e&&a.Cb("card",t.classCard)("widget",t.classWidget)("widget-categories",t.classWidgetCategories)},inputs:{widgetTitle:"widgetTitle",categories:"categories"},decls:3,vars:2,consts:[["class","widget__header",4,"ngIf"],[1,"widget-categories__list","widget-categories__list--root"],["class","widget-categories__item","appCollapseItem","widget-categories__item--open",4,"ngFor","ngForOf"],[1,"widget__header"],["appCollapseItem","widget-categories__item--open",1,"widget-categories__item"],["collapseItem","appCollapseItem"],[1,"widget-categories__link",3,"routerLink"],[4,"ngIf"],["type","button",1,"widget-categories__expander",3,"click"],["appCollapseContent","",1,"widget-categories__container"],[1,"widget-categories__list","widget-categories__list--child"],["class","widget-categories__item",4,"ngFor","ngForOf"],[1,"widget-categories__item"]],template:function(e,t){1&e&&(a.Ec(0,o,3,1,"div",0),a.Qb(1,"ul",1),a.Ec(2,d,5,3,"li",2),a.Pb()),2&e&&(a.hc("ngIf",t.widgetTitle),a.xb(2),a.hc("ngForOf",t.categories))},directives:[r.l,r.k,n.a,c.i,l.a],styles:[""]}),e})()},gHNO:function(e,t,i){"use strict";i.d(t,"a",function(){return s});var a=i("fXoL");let s=(()=>{class e{constructor(){this.classShareLinks=!0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["app-share-links"]],hostVars:2,hostBindings:function(e,t){2&e&&a.Cb("share-links",t.classShareLinks)},decls:13,vars:0,consts:[[1,"share-links__list"],[1,"share-links__item","share-links__item--type--like"],["href",""],[1,"share-links__item","share-links__item--type--tweet"],[1,"share-links__item","share-links__item--type--pin"],[1,"share-links__item","share-links__item--type--counter"]],template:function(e,t){1&e&&(a.Qb(0,"ul",0),a.Qb(1,"li",1),a.Qb(2,"a",2),a.Gc(3,"Like"),a.Pb(),a.Pb(),a.Qb(4,"li",3),a.Qb(5,"a",2),a.Gc(6,"Tweet"),a.Pb(),a.Pb(),a.Qb(7,"li",4),a.Qb(8,"a",2),a.Gc(9,"Pin It"),a.Pb(),a.Pb(),a.Qb(10,"li",5),a.Qb(11,"a",2),a.Gc(12,"4K"),a.Pb(),a.Pb(),a.Pb())},styles:[""]}),e})()},rQjA:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var a=i("fXoL"),s=i("tyNb");let r=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["app-terms"]],decls:26,vars:0,consts:[["routerLink","/site/contact-us-v1"]],template:function(e,t){1&e&&(a.Qb(0,"p"),a.Gc(1," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae ultricies malesuada.\n"),a.Pb(),a.Qb(2,"h2"),a.Gc(3,"Definitions"),a.Pb(),a.Qb(4,"ol"),a.Qb(5,"li"),a.Qb(6,"strong"),a.Gc(7,"Risus"),a.Pb(),a.Gc(8," \u2014 Morbi posuere eleifend sollicitudin. Praesent eget ante in enim scelerisque scelerisque. Donec mi lorem, molestie a sapien non, laoreet convallis felis. In semper felis in lacus venenatis, sit amet commodo leo interdum. Maecenas congue ut leo et auctor. "),a.Pb(),a.Qb(9,"li"),a.Qb(10,"strong"),a.Gc(11,"Praesent"),a.Pb(),a.Gc(12," \u2014 Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla orci ante, viverra in imperdiet in, pharetra et leo "),a.Pb(),a.Qb(13,"li"),a.Qb(14,"strong"),a.Gc(15,"Vestibulum"),a.Pb(),a.Gc(16," \u2014 Vestibulum arcu tellus, aliquam vel fermentum vestibulum, lacinia pulvinar ipsum. In hac habitasse platea dictumst. Integer felis libero, blandit scelerisque mauris eget, porta elementum sapien. Mauris luctus arcu non enim lobortis gravida. "),a.Pb(),a.Pb(),a.Qb(17,"h2"),a.Gc(18,"Ornare dolor"),a.Pb(),a.Qb(19,"p"),a.Gc(20," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis neque ut purus fermentum, ac pretium nibh facilisis. Vivamus venenatis viverra iaculis. Suspendisse tempor orci non sapien ullamcorper dapibus. Suspendisse at velit diam. Donec pharetra nec enim blandit vulputate. Suspendisse potenti. Pellentesque et molestie ante. In feugiat ante vitae ultricies malesuada.\n"),a.Pb(),a.Qb(21,"p"),a.Gc(22,"For information about how to contact us, please visit our "),a.Qb(23,"a",0),a.Gc(24,"contact page"),a.Pb(),a.Gc(25,"."),a.Pb())},directives:[s.i],styles:[""]}),e})()}}]);