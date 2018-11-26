(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#menu {\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  z-index: 1;\n  background: #ccc;\n  width: 25%;\n  height: 100%;\n  opacity: 0.7;\n  box-shadow: 5px 0px 10px 0px rgba(0,0,0,1);\n  overflow-y: auto;\n}\n\n#menu-content {\n  padding: 10px;\n}\n\n#container {\n  position: relative;\n  left: 25%;\n  width: 100%;\n  margin: 0px;\n}\n\n#container-content {\n  padding-top: 110%;\n  padding-bottom: 110%;\n  padding-left: 110%;\n  padding-right: 110%;\n  width: 100%;\n}\n\n.box {\n  height: 150px;\n  width: 70%;\n  margin-left: 15%;\n  border: 5px solid;\n  position: relative;\n  text-align: center;\n  font-size: 50px;\n  line-height: 150px;\n  margin-bottom: 10px;\n}\n\n.separator {\n  height: 300px;\n}\n\n.boxes {\n  width: 70%;\n  margin-left: 15%;\n  border: 5px solid red;\n  height: 500px;\n  overflow: auto;\n}\n\n.boxes-content {\n  padding-top: 110%;\n  padding-bottom: 110%;\n  padding-left: 110%;\n  padding-right: 110%;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"menu\">\n  <div id=\"menu-content\">\n    <h1> Individual </h1>\n    <pre class=\"menu-json\" [innerHtml]=\"stateIndividual | jsonbeauty\"></pre>\n    <button (click)=\"triggerCustom()\" >Trigger </button>\n    <h1> Container </h1>\n    <pre class=\"menu-json\" [innerHtml]=\"stateContainer | jsonbeauty\"></pre>\n    <h1> Individual Wrapped </h1>\n    <pre class=\"menu-json\" [innerHtml]=\"stateIndividualWrapped | jsonbeauty\"></pre>\n    <h1> Container Wrapped </h1>\n    <pre class=\"menu-json\" [innerHtml]=\"stateContainerWrapped | jsonbeauty\"></pre>\n    <h1> Container Best Wrapped </h1>\n    <pre class=\"menu-json\" [innerHtml]=\"stateContainerBestWrapped | jsonbeauty\"></pre>\n  </div>\n</div>\n\n<div id=\"container\">\n  <div id=\"container-content\">\n\n\n    <div in-view (inview)=\"inViewIndividual($event)\" class=\"box\" [trigger]=\"trigger\">\n      Individual\n    </div>\n\n    <div class=\"separator\"></div>\n\n    <div in-view-container (inview)=\"inViewContainer($event)\" [trigger]=\"trigger\">\n      <div in-view-item *ngFor=\"let item of items; let i = index;\" [id]=\"index\" [data]=\"item\" class=\"box\">\n        {{ item.name }}\n      </div>\n    </div>\n\n\n    <div class=\"separator\"></div>\n\n    <div #individualwrapped class=\"boxes\">\n      <div class=\"boxes-content\">\n        <div in-view (inview)=\"inViewIndividualWrapped($event)\" [scrollELement]=\"elementIndividualWrapped\" class=\"box\">\n          Individual Wrapped\n        </div>\n      </div>\n    </div>\n\n    <div class=\"separator\"></div>\n\n    <div class=\"boxes\" in-view-container (inview)=\"inViewContainerWrapped($event)\" [scrollWindow]=\"false\">\n      <div class=\"boxes-content\">\n        <div in-view-item *ngFor=\"let item of items; let i = index;\" [id]=\"index\" [data]=\"item\" class=\"box\">\n          {{ item.name }}\n        </div>\n      </div>\n    </div>\n\n    <div class=\"separator\"></div>\n\n    <div class=\"boxes\" in-view-container (inview)=\"inViewContainerBestWrapped($event)\" [scrollWindow]=\"false\" [bestMatch]=\"true\">\n      <div class=\"boxes-content\">\n        <div in-view-item *ngFor=\"let item of items; let i = index;\" [id]=\"index\" [data]=\"item\" class=\"box\">\n          {{ item.name }}\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.stateIndividual = {};
        this.stateContainer = {};
        this.stateIndividualWrapped = {};
        this.elementIndividualWrapped = '';
        this.stateContainerWrapped = {};
        this.stateContainerBestWrapped = {};
        this.items = [];
        for (var i = 0; i < 10; i++) {
            this.items.push({
                name: 'Item ' + i
            });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        this.elementIndividualWrapped = this.individualwrapped.nativeElement;
    };
    AppComponent.prototype.inViewIndividualWrapped = function ($event) {
        this.stateIndividualWrapped = $event;
    };
    AppComponent.prototype.inViewIndividual = function ($event) {
        this.stateIndividual = $event;
    };
    AppComponent.prototype.inViewContainer = function ($event) {
        this.stateContainer = $event;
    };
    AppComponent.prototype.inViewContainerWrapped = function ($event) {
        this.stateContainerWrapped = $event;
    };
    AppComponent.prototype.inViewContainerBestWrapped = function ($event) {
        this.stateContainerBestWrapped = $event;
    };
    AppComponent.prototype.triggerCustom = function () {
        this.trigger.next(0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('individualwrapped'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "individualwrapped", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lib_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/index */ "./src/lib/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.pipes */ "./src/app/app.pipes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_pipes__WEBPACK_IMPORTED_MODULE_4__["JsonBeautyPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _lib_index__WEBPACK_IMPORTED_MODULE_2__["NgInviewModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pipes.ts":
/*!******************************!*\
  !*** ./src/app/app.pipes.ts ***!
  \******************************/
/*! exports provided: JsonBeautyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonBeautyPipe", function() { return JsonBeautyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JsonBeautyPipe = /** @class */ (function () {
    function JsonBeautyPipe() {
    }
    JsonBeautyPipe.prototype.transform = function (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }
                else {
                    cls = 'string';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'boolean';
            }
            else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
    JsonBeautyPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'jsonbeauty'
        })
    ], JsonBeautyPipe);
    return JsonBeautyPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: NgInviewModule, InviewDirective, InviewContainerDirective, InviewItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inview_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inview.module */ "./src/lib/inview.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgInviewModule", function() { return _inview_module__WEBPACK_IMPORTED_MODULE_0__["NgInviewModule"]; });

/* harmony import */ var _inview_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inview.directive */ "./src/lib/inview.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InviewDirective", function() { return _inview_directive__WEBPACK_IMPORTED_MODULE_1__["InviewDirective"]; });

/* harmony import */ var _inview_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inview-container.directive */ "./src/lib/inview-container.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InviewContainerDirective", function() { return _inview_container_directive__WEBPACK_IMPORTED_MODULE_2__["InviewContainerDirective"]; });

/* harmony import */ var _inview_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inview-item.directive */ "./src/lib/inview-item.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InviewItemDirective", function() { return _inview_item_directive__WEBPACK_IMPORTED_MODULE_3__["InviewItemDirective"]; });







/***/ }),

/***/ "./src/lib/inview-container.directive.ts":
/*!***********************************************!*\
  !*** ./src/lib/inview-container.directive.ts ***!
  \***********************************************/
/*! exports provided: InviewContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviewContainerDirective", function() { return InviewContainerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _inview_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inview-item.directive */ "./src/lib/inview-item.directive.ts");
/* harmony import */ var _utils_scroll_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/scroll-observable */ "./src/lib/utils/scroll-observable.ts");
/* harmony import */ var _utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/viewport-ruler */ "./src/lib/utils/viewport-ruler.ts");
/* harmony import */ var _utils_offset_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/offset-resolver */ "./src/lib/utils/offset-resolver.ts");
/* harmony import */ var _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/position-resolver */ "./src/lib/utils/position-resolver.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// allmost same configuration as child
// child will not have inview property? to trigger changes
// will use scroll on this or window
// will check wheather the child is in view port
// will start checking from last inview child and with direction of scroll until a child is not visible
// can return all inview children
// or best match case
// if container is used then first check if container itself is in the viewport of the window.
// then only the futher calculation should take place
var InviewContainerDirective = /** @class */ (function () {
    function InviewContainerDirective(_element, _scrollObservable, _windowRuler, _zone) {
        this._element = _element;
        this._scrollObservable = _scrollObservable;
        this._windowRuler = _windowRuler;
        this._zone = _zone;
        this._throttleType = 'debounce';
        this._offset = [0, 0, 0, 0];
        this._viewPortOffset = [0, 0, 0, 0];
        this._throttle = 0;
        this._scrollWindow = true;
        this._lastScrollY = 0;
        this._scrollDirection = 'down';
        this.inview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(InviewContainerDirective.prototype, "offset", {
        set: function (offset) {
            this._offset = _utils_offset_resolver__WEBPACK_IMPORTED_MODULE_5__["OffsetResolverFactory"].create(offset).normalizeOffset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewContainerDirective.prototype, "viewPortOffset", {
        set: function (offset) {
            this._viewPortOffset = _utils_offset_resolver__WEBPACK_IMPORTED_MODULE_5__["OffsetResolverFactory"].create(offset).normalizeOffset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewContainerDirective.prototype, "throttle", {
        set: function (throttle) {
            this._throttle = throttle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewContainerDirective.prototype, "scrollWindow", {
        set: function (sw) {
            this._scrollWindow = !!sw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewContainerDirective.prototype, "data", {
        set: function (_d) {
            this._data = _d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewContainerDirective.prototype, "bestMatch", {
        set: function (bm) {
            this._bestMatch = !!bm;
        },
        enumerable: true,
        configurable: true
    });
    InviewContainerDirective.prototype.ngOnInit = function () { };
    InviewContainerDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._scrollSuscription =
            this._scrollObservable.scrollObservableFor(this._scrollWindow ? window : this._element.nativeElement)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(_this._throttle); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (event) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this._getViewPortRuler()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function () { return _this._checkScrollDirection(); })).subscribe(function (containersBounds) { return _this.handleOnScroll(containersBounds); });
        /*
        [this._throttleType](() => timer(this._throttle))
          .filter(() => true)
          .mergeMap((event: any) => of(this._getViewPortRuler()))
          .do(() => this._checkScrollDirection())
          .subscribe((containersBounds: ElementBoundingPositions) => this.handleOnScroll(containersBounds));
        */
    };
    InviewContainerDirective.prototype._checkScrollDirection = function () {
        if (this._scrollWindow) {
            this._scrollDirection =
                window.scrollY > this._lastScrollY ? 'down' : 'up';
            this._lastScrollY = window.scrollY;
        }
        else {
            this._scrollDirection =
                this._element.nativeElement.scrollTop > this._lastScrollY
                    ? 'down'
                    : 'up';
            this._lastScrollY = this._element.nativeElement.scrollTop;
        }
    };
    InviewContainerDirective.prototype._getViewPortRuler = function () {
        return this._scrollWindow
            ? this._windowRuler.getWindowViewPortRuler()
            : _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__["PositionResolver"].getBoundingClientRect(this._element.nativeElement);
    };
    InviewContainerDirective.prototype.ngOnDestroy = function () {
        if (this._scrollSuscription) {
            this._scrollSuscription.unsubscribe();
        }
    };
    InviewContainerDirective.prototype.handleOnScroll = function (containersBounds) {
        var _this = this;
        // check of scroll up or down
        // Note:: check all children from parent if it is in view or not
        // for cache of less iterations start from the last visible  item then based on scroll up and down check list futher
        var viewPortOffsetRect = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__["PositionResolver"].offsetRect(containersBounds, this._viewPortOffset);
        var visibleChildren = [];
        if (this._inviewChildren) {
            visibleChildren = this._inviewChildren
                .toArray()
                .filter(function (child) {
                var elementOffsetRect = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__["PositionResolver"].offsetRect(child.getELementRect(), _this._offset);
                return (child.isVisible() &&
                    _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__["PositionResolver"].intersectRect(elementOffsetRect, viewPortOffsetRect));
            });
            if (this._bestMatch) {
                var bestMatchChild_1 = 0;
                if (visibleChildren.length) {
                    visibleChildren.reduce(function (distance, currChild) {
                        var _distance = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__["PositionResolver"].distance(viewPortOffsetRect, _utils_position_resolver__WEBPACK_IMPORTED_MODULE_6__["PositionResolver"].offsetRect(currChild.getELementRect(), _this._offset));
                        if (distance > _distance) {
                            bestMatchChild_1 = currChild;
                            return _distance;
                        }
                        return distance;
                    }, Infinity);
                }
                var data_1 = bestMatchChild_1 ? bestMatchChild_1.getData() : {};
                data_1.direction = this._scrollDirection;
                this._zone.run(function () { return _this.inview.emit(data_1); });
            }
            else {
                var data_2 = {};
                data_2.inview = visibleChildren.map(function (vc) {
                    return vc.getData();
                });
                data_2.direction = this._scrollDirection;
                this._zone.run(function () { return _this.inview.emit(data_2); });
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], InviewContainerDirective.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewContainerDirective.prototype, "offset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewContainerDirective.prototype, "viewPortOffset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], InviewContainerDirective.prototype, "throttle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], InviewContainerDirective.prototype, "scrollWindow", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewContainerDirective.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewContainerDirective.prototype, "bestMatch", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InviewContainerDirective.prototype, "inview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_inview_item_directive__WEBPACK_IMPORTED_MODULE_2__["InviewItemDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], InviewContainerDirective.prototype, "_inviewChildren", void 0);
    InviewContainerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[in-view-container]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _utils_scroll_observable__WEBPACK_IMPORTED_MODULE_3__["ScrollObservable"],
            _utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_4__["WindowRuler"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], InviewContainerDirective);
    return InviewContainerDirective;
}());

//  inview-container -> inview-item ->
//  scrollWindow =  true -> will test it against the window scroll event with container.
//  scrollWindow = false -> means we need to attach scroll event on this container.
// inview ->  directly used against the window.


/***/ }),

/***/ "./src/lib/inview-item.directive.ts":
/*!******************************************!*\
  !*** ./src/lib/inview-item.directive.ts ***!
  \******************************************/
/*! exports provided: InviewItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviewItemDirective", function() { return InviewItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_position_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/position-resolver */ "./src/lib/utils/position-resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InviewItemDirective = /** @class */ (function () {
    function InviewItemDirective(_element) {
        this._element = _element;
    }
    Object.defineProperty(InviewItemDirective.prototype, "data", {
        set: function (d) {
            this._data = d;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewItemDirective.prototype, "id", {
        set: function (_id) {
            this._id = _id;
        },
        enumerable: true,
        configurable: true
    });
    InviewItemDirective.prototype.ngOnInit = function () {
    };
    // expose a function returning rect of this _element
    InviewItemDirective.prototype.getELementRect = function () {
        return _utils_position_resolver__WEBPACK_IMPORTED_MODULE_1__["PositionResolver"].getBoundingClientRect(this._element.nativeElement);
    };
    InviewItemDirective.prototype.isVisible = function () {
        return _utils_position_resolver__WEBPACK_IMPORTED_MODULE_1__["PositionResolver"].isVisible(this._element.nativeElement);
    };
    InviewItemDirective.prototype.getData = function () {
        return { id: this._id, data: this._data };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewItemDirective.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewItemDirective.prototype, "id", null);
    InviewItemDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[in-view-item]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], InviewItemDirective);
    return InviewItemDirective;
}());



/***/ }),

/***/ "./src/lib/inview.directive.ts":
/*!*************************************!*\
  !*** ./src/lib/inview.directive.ts ***!
  \*************************************/
/*! exports provided: InviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviewDirective", function() { return InviewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _utils_scroll_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/scroll-observable */ "./src/lib/utils/scroll-observable.ts");
/* harmony import */ var _utils_offset_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/offset-resolver */ "./src/lib/utils/offset-resolver.ts");
/* harmony import */ var _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/position-resolver */ "./src/lib/utils/position-resolver.ts");
/* harmony import */ var _utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/viewport-ruler */ "./src/lib/utils/viewport-ruler.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InviewDirective = /** @class */ (function () {
    function InviewDirective(_scrollObservable, _element, _zone, _windowRuler) {
        this._scrollObservable = _scrollObservable;
        this._element = _element;
        this._zone = _zone;
        this._windowRuler = _windowRuler;
        this._throttleType = 'debounce';
        this._offset = [0, 0, 0, 0];
        this._viewPortOffset = [0, 0, 0, 0];
        this._throttle = 0;
        this._lazy = false; // when visible only then.
        this._tooLazy = false; // when state changes only then.
        this.inview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(InviewDirective.prototype, "offset", {
        set: function (offset) {
            this._offset = _utils_offset_resolver__WEBPACK_IMPORTED_MODULE_3__["OffsetResolverFactory"].create(offset).normalizeOffset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "viewPortOffset", {
        set: function (offset) {
            this._viewPortOffset = _utils_offset_resolver__WEBPACK_IMPORTED_MODULE_3__["OffsetResolverFactory"].create(offset).normalizeOffset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "throttle", {
        set: function (throttle) {
            this._throttle = throttle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "scrollELement", {
        set: function (sw) {
            this._scrollElement = sw;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "lazy", {
        set: function (lzy) {
            this._lazy = lzy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "tooLazy", {
        set: function (lzy) {
            this._tooLazy = lzy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "data", {
        set: function (_d) {
            this._data = _d;
        },
        enumerable: true,
        configurable: true
    });
    InviewDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._scrollerSubscription = this._scrollObservable.scrollObservableFor(this._scrollElement || window)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounce"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(_this._throttle); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function () { return true; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (event) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this._getViewPortRuler()); })).subscribe(function (containersBounds) { return _this.handleOnScroll(containersBounds); });
        var bounds = { bottom: window.innerHeight, height: window.innerHeight, left: 0, right: window.innerWidth, top: 0, width: window.innerWidth };
        this.handleOnScroll(bounds);
        /*
        [this._throttleType](() => timer(this._throttle))
          .filter(() => true)
          .mergeMap((event: any) => _of(this._getViewPortRuler()))
          .subscribe((containersBounds: ElementBoundingPositions) => this.handleOnScroll(containersBounds));
          */
    };
    InviewDirective.prototype._getViewPortRuler = function () {
        return this._scrollElement
            ? _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].getBoundingClientRect(this._scrollElement)
            : this._windowRuler.getWindowViewPortRuler();
    };
    InviewDirective.prototype.ngOnInit = function () { };
    InviewDirective.prototype.ngOnDestroy = function () {
        if (this._scrollerSubscription) {
            this._scrollerSubscription.unsubscribe();
        }
    };
    InviewDirective.prototype.handleOnScroll = function (containersBounds) {
        var _this = this;
        var viewPortOffsetRect = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].offsetRect(containersBounds, this._viewPortOffset);
        var elementOffsetRect = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].offsetRect(_utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].getBoundingClientRect(this._element.nativeElement), this._offset);
        var isVisible = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].isVisible(this._element.nativeElement) &&
            _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].intersectRect(elementOffsetRect, viewPortOffsetRect);
        if (this._tooLazy &&
            this._previous_state !== undefined &&
            this._previous_state === isVisible) {
            return;
        }
        var output = { status: isVisible };
        if (this._data !== undefined) {
            output.data = this._data;
        }
        if (!this._lazy && !isVisible) {
            output.isClipped = false;
            output.isOutsideView = true;
            output.parts = { top: false, right: false, left: false, bottom: false };
            output.inViewPercentage = { vertical: 0, horizontal: 0 };
            this._zone.run(function () { return _this.inview.emit(output); });
        }
        if (!isVisible) {
            this._previous_state = isVisible;
            return;
        }
        var _a = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].clippedStatus(elementOffsetRect, viewPortOffsetRect), isClipped = _a.isClipped, isOutsideView = _a.isOutsideView;
        output.isClipped = isClipped;
        output.isOutsideView = isOutsideView;
        output.parts = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].inViewParts(viewPortOffsetRect, elementOffsetRect);
        output.inViewPercentage = _utils_position_resolver__WEBPACK_IMPORTED_MODULE_4__["PositionResolver"].inViewPercentage(viewPortOffsetRect, elementOffsetRect);
        this._zone.run(function () { return _this.inview.emit(output); });
        this._previous_state = isVisible;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], InviewDirective.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewDirective.prototype, "offset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewDirective.prototype, "viewPortOffset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], InviewDirective.prototype, "throttle", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", HTMLElement),
        __metadata("design:paramtypes", [HTMLElement])
    ], InviewDirective.prototype, "scrollELement", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], InviewDirective.prototype, "lazy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], InviewDirective.prototype, "tooLazy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], InviewDirective.prototype, "data", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InviewDirective.prototype, "inview", void 0);
    InviewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[in-view]'
        }),
        __metadata("design:paramtypes", [_utils_scroll_observable__WEBPACK_IMPORTED_MODULE_2__["ScrollObservable"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_5__["WindowRuler"]])
    ], InviewDirective);
    return InviewDirective;
}());



/***/ }),

/***/ "./src/lib/inview.module.ts":
/*!**********************************!*\
  !*** ./src/lib/inview.module.ts ***!
  \**********************************/
/*! exports provided: NgInviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgInviewModule", function() { return NgInviewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _inview_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inview.directive */ "./src/lib/inview.directive.ts");
/* harmony import */ var _inview_container_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inview-container.directive */ "./src/lib/inview-container.directive.ts");
/* harmony import */ var _inview_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inview-item.directive */ "./src/lib/inview-item.directive.ts");
/* harmony import */ var _utils_scroll_observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/scroll-observable */ "./src/lib/utils/scroll-observable.ts");
/* harmony import */ var _utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/viewport-ruler */ "./src/lib/utils/viewport-ruler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgInviewModule = /** @class */ (function () {
    function NgInviewModule() {
    }
    NgInviewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: [_inview_directive__WEBPACK_IMPORTED_MODULE_1__["InviewDirective"], _inview_container_directive__WEBPACK_IMPORTED_MODULE_2__["InviewContainerDirective"], _inview_item_directive__WEBPACK_IMPORTED_MODULE_3__["InviewItemDirective"]],
            exports: [_inview_directive__WEBPACK_IMPORTED_MODULE_1__["InviewDirective"], _inview_container_directive__WEBPACK_IMPORTED_MODULE_2__["InviewContainerDirective"], _inview_item_directive__WEBPACK_IMPORTED_MODULE_3__["InviewItemDirective"]],
            providers: [_utils_scroll_observable__WEBPACK_IMPORTED_MODULE_4__["ScrollObservable"], _utils_viewport_ruler__WEBPACK_IMPORTED_MODULE_5__["WindowRuler"]]
        })
    ], NgInviewModule);
    return NgInviewModule;
}());



/***/ }),

/***/ "./src/lib/utils/offset-resolver.ts":
/*!******************************************!*\
  !*** ./src/lib/utils/offset-resolver.ts ***!
  \******************************************/
/*! exports provided: OffsetResolver, OffsetResolverFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffsetResolver", function() { return OffsetResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffsetResolverFactory", function() { return OffsetResolverFactory; });
var OffsetResolver = /** @class */ (function () {
    function OffsetResolver(offset) {
        this.offset = offset;
    }
    OffsetResolver.prototype.normalizeOffset = function () {
        if (!Array.isArray(this.offset)) {
            return [this.offset, this.offset, this.offset, this.offset];
        }
        if (this.offset.length === 2) {
            return this.offset.concat(this.offset);
        }
        else if (this.offset.length === 3) {
            return this.offset.concat([this.offset[1]]);
        }
        return this.offset;
    };
    return OffsetResolver;
}());

var OffsetResolverFactory = /** @class */ (function () {
    function OffsetResolverFactory() {
    }
    OffsetResolverFactory.create = function (offset) {
        return new OffsetResolver(offset);
    };
    return OffsetResolverFactory;
}());



/***/ }),

/***/ "./src/lib/utils/position-resolver.ts":
/*!********************************************!*\
  !*** ./src/lib/utils/position-resolver.ts ***!
  \********************************************/
/*! exports provided: PositionResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionResolver", function() { return PositionResolver; });
function isPercent(value) {
    return typeof value === 'string' && value.indexOf('%') > -1;
}
function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
var PositionResolver = /** @class */ (function () {
    function PositionResolver() {
    }
    PositionResolver.getBoundingClientRect = function (element) {
        return element.getBoundingClientRect();
    };
    PositionResolver.isVisible = function (element) {
        return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    };
    PositionResolver.intersectRect = function (r1, r2) {
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
    };
    PositionResolver.offsetRect = function (rect, offset) {
        if (!offset) {
            return rect;
        }
        var offsetObject = {
            top: isPercent(offset[0]) ? (parseFloat(offset[0]) * rect.height) / 100 : +offset[0],
            right: isPercent(offset[1]) ? (parseFloat(offset[1]) * rect.width) / 100 : +offset[1],
            bottom: isPercent(offset[2]) ? (parseFloat(offset[2]) * rect.height) / 100 : +offset[2],
            left: isPercent(offset[3]) ? (parseFloat(offset[3]) * rect.width) / 100 : +offset[3]
        };
        return {
            top: rect.top - offsetObject.top,
            left: rect.left - offsetObject.left,
            bottom: rect.bottom + offsetObject.bottom,
            right: rect.right + offsetObject.right,
            height: rect.height + offsetObject.top + offsetObject.bottom,
            width: rect.width + offsetObject.left + offsetObject.right
        };
    };
    PositionResolver.distance = function (containerRect, elementRect) {
        var middlePointOfContainer = {
            x: containerRect.height / 2,
            y: containerRect.width / 2
        };
        var middlePointOfElement = {
            x: elementRect.top + (elementRect.height / 2),
            y: elementRect.left + (elementRect.width / 2)
        };
        return distance(middlePointOfContainer, middlePointOfElement);
    };
    PositionResolver.inviewPercentage = function (containerRect, elementRect) {
        return {
            top: 100 * elementRect.top / containerRect.top,
            left: 100 * elementRect.left / containerRect.left,
            bottom: 100 * elementRect.bottom / containerRect.bottom,
            right: 100 * elementRect.right / containerRect.right
        };
    };
    PositionResolver.inViewParts = function (containerRect, elementRect) {
        return {
            top: elementRect.top >= containerRect.top,
            left: elementRect.left >= containerRect.left,
            bottom: elementRect.bottom <= containerRect.bottom,
            right: elementRect.right <= containerRect.right
        };
    };
    PositionResolver.inViewPercentage = function (containerRect, elementRect) {
        var elementHeight = elementRect.bottom - elementRect.top;
        var containerHeight = containerRect.bottom - containerRect.top;
        var elementWidth = elementRect.right - elementRect.left;
        var containerWidth = containerRect.right - containerRect.left;
        var diffAbove = containerHeight - (elementRect.top - containerRect.top);
        var diffBelow = containerHeight - (containerRect.bottom - elementRect.bottom);
        var diffLeft = containerWidth - (elementRect.left - containerRect.left);
        var diffRight = containerWidth - (containerRect.right - elementRect.right);
        var verticalAbove = (diffAbove * 100) / elementHeight;
        var verticalBelow = (diffBelow * 100) / elementHeight;
        var horizontalLeft = (diffLeft * 100) / elementWidth;
        var horizontalRight = (diffRight * 100) / elementWidth;
        return {
            vertical: Math.min(100, verticalAbove, verticalBelow),
            horizontal: Math.min(100, horizontalLeft, horizontalRight)
        };
    };
    PositionResolver.isElementOutsideView = function (elementBounds, containersBounds) {
        var outsideAbove = elementBounds.bottom < containersBounds.top;
        var outsideBelow = elementBounds.top > containersBounds.bottom;
        var outsideLeft = elementBounds.right < containersBounds.left;
        var outsideRight = elementBounds.left > containersBounds.right;
        return outsideAbove || outsideBelow || outsideLeft || outsideRight;
    };
    PositionResolver.isElementClipped = function (elementBounds, containersBounds) {
        var clippedAbove = elementBounds.top < containersBounds.top;
        var clippedBelow = elementBounds.bottom > containersBounds.bottom;
        var clippedLeft = elementBounds.left < containersBounds.left;
        var clippedRight = elementBounds.right > containersBounds.right;
        return clippedAbove || clippedBelow || clippedLeft || clippedRight;
    };
    PositionResolver.clippedStatus = function (elementBounds, containersBounds) {
        return {
            isClipped: this.isElementClipped(elementBounds, containersBounds),
            isOutsideView: this.isElementOutsideView(elementBounds, containersBounds)
        };
    };
    return PositionResolver;
}());



/***/ }),

/***/ "./src/lib/utils/scroll-observable.ts":
/*!********************************************!*\
  !*** ./src/lib/utils/scroll-observable.ts ***!
  \********************************************/
/*! exports provided: ScrollObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollObservable", function() { return ScrollObservable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _viewport_ruler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewport-ruler */ "./src/lib/utils/viewport-ruler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScrollObservable = /** @class */ (function () {
    function ScrollObservable(_windowRuler) {
        this._windowRuler = _windowRuler;
        if (!ScrollObservable_1._globalObservable) {
            ScrollObservable_1._globalObservable = this._getGlobalObservable();
        }
    }
    ScrollObservable_1 = ScrollObservable;
    ScrollObservable.isWindow = function (windowElement) {
        return Object.prototype.toString.call(windowElement).includes('Window');
    };
    ScrollObservable.prototype._getGlobalObservable = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window.document, 'scroll'), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) { return _this._windowRuler.onChange(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        /*
        return Observable.merge(
          Observable.fromEvent(window.document, 'scroll'),
          Observable.fromEvent(window, 'resize')
          .map((event: any) => {
            this._windowRuler.onChange();
            return event;
        })
        ).share();
        */
    };
    ScrollObservable.prototype.scrollObservableFor = function (windowElement) {
        if (ScrollObservable_1.isWindow(windowElement)) {
            return ScrollObservable_1._globalObservable;
        }
        if (ScrollObservable_1._elementObservableReferences.has(windowElement)) {
            return ScrollObservable_1._elementObservableReferences.get(windowElement);
        }
        var ref = this._createElementObservable(windowElement);
        ScrollObservable_1._elementObservableReferences.set(windowElement, ref);
        return ref;
    };
    ScrollObservable.prototype._createElementObservable = function (windowElement) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(windowElement, 'scroll').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    };
    ScrollObservable._elementObservableReferences = new Map();
    ScrollObservable = ScrollObservable_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_viewport_ruler__WEBPACK_IMPORTED_MODULE_3__["WindowRuler"]])
    ], ScrollObservable);
    return ScrollObservable;
    var ScrollObservable_1;
}());



/***/ }),

/***/ "./src/lib/utils/viewport-ruler.ts":
/*!*****************************************!*\
  !*** ./src/lib/utils/viewport-ruler.ts ***!
  \*****************************************/
/*! exports provided: WindowRulerStatic, WindowRuler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRulerStatic", function() { return WindowRulerStatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRuler", function() { return WindowRuler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowRulerStatic = /** @class */ (function () {
    function WindowRulerStatic() {
    }
    WindowRulerStatic._createWindowRect = function () {
        var height = window.innerHeight;
        var width = window.innerWidth;
        return {
            top: 0,
            left: 0,
            bottom: height,
            right: width,
            height: height,
            width: width,
        };
    };
    WindowRulerStatic.onChange = function () {
        this._windowRect = this._createWindowRect();
    };
    WindowRulerStatic.getWindowViewPortRuler = function () {
        return this._windowRect;
    };
    return WindowRulerStatic;
}());

var WindowRuler = /** @class */ (function () {
    function WindowRuler() {
        WindowRulerStatic.onChange();
    }
    WindowRuler.prototype.onChange = function () {
        WindowRulerStatic.onChange();
    };
    WindowRuler.prototype.getWindowViewPortRuler = function () {
        return WindowRulerStatic.getWindowViewPortRuler();
    };
    WindowRuler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WindowRuler);
    return WindowRuler;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /private/var/www/html/angular-inport/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map