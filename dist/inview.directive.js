"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs");
var scroll_observable_1 = require("./utils/scroll-observable");
var offset_resolver_1 = require("./utils/offset-resolver");
var position_resolver_1 = require("./utils/position-resolver");
var viewport_ruler_1 = require("./utils/viewport-ruler");
var InviewDirective = (function () {
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
        this.inview = new core_1.EventEmitter();
    }
    Object.defineProperty(InviewDirective.prototype, "offset", {
        set: function (offset) {
            this._offset = offset_resolver_1.OffsetResolverFactory.create(offset).normalizeOffset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewDirective.prototype, "viewPortOffset", {
        set: function (offset) {
            this._viewPortOffset = offset_resolver_1.OffsetResolverFactory.create(offset).normalizeOffset();
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
        this._scrollerSubscription = this._scrollObservable.scrollObservableFor(this._scrollElement || window)[this._throttleType](function () { return Rx_1.Observable.timer(_this._throttle); })
            .filter(function () { return true; })
            .mergeMap(function (event) { return Rx_1.Observable.of(_this._getViewPortRuler()); })
            .subscribe(function (containersBounds) { return _this.handleOnScroll(containersBounds); });
        this.handleOnScroll({bottom: window.innerHeight,height: window.innerHeight,left: 0,right: window.innerWidth,top: 0,width: window.innerWidth});
    };
    InviewDirective.prototype._getViewPortRuler = function () {
        return this._scrollElement ? position_resolver_1.PositionResolver.getBoundingClientRect(this._scrollElement) : this._windowRuler.getWindowViewPortRuler();
    };
    InviewDirective.prototype.ngOnInit = function () { };
    InviewDirective.prototype.ngOnDestroy = function () {
        if (this._scrollerSubscription) {
            this._scrollerSubscription.unsubscribe();
        }
    };
    InviewDirective.prototype.handleOnScroll = function (containersBounds) {
        var _this = this;
        var viewPortOffsetRect = position_resolver_1.PositionResolver.offsetRect(containersBounds, this._viewPortOffset);
        var elementOffsetRect = position_resolver_1.PositionResolver.offsetRect(position_resolver_1.PositionResolver.getBoundingClientRect(this._element.nativeElement), this._offset);
        var isVisible = position_resolver_1.PositionResolver.isVisible(this._element.nativeElement)
            && position_resolver_1.PositionResolver.intersectRect(elementOffsetRect, viewPortOffsetRect);
        if (this._tooLazy && this._previous_state !== undefined && (this._previous_state === isVisible)) {
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
            this._zone.run(function () { return _this.inview.emit(output); });
        }
        if (!isVisible) {
            this._previous_state = isVisible;
            return;
        }
        var _a = position_resolver_1.PositionResolver.clippedStatus(elementOffsetRect, viewPortOffsetRect), isClipped = _a.isClipped, isOutsideView = _a.isOutsideView;
        output.isClipped = isClipped;
        output.isOutsideView = isOutsideView;
        output.parts = position_resolver_1.PositionResolver.inViewParts(viewPortOffsetRect, elementOffsetRect);
        this._zone.run(function () { return _this.inview.emit(output); });
        this._previous_state = isVisible;
    };
    return InviewDirective;
}());
InviewDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[in-view]'
            },] },
];
/** @nocollapse */
InviewDirective.ctorParameters = function () { return [
    { type: scroll_observable_1.ScrollObservable, },
    { type: core_1.ElementRef, },
    { type: core_1.NgZone, },
    { type: viewport_ruler_1.WindowRuler, },
]; };
InviewDirective.propDecorators = {
    'offset': [{ type: core_1.Input },],
    'viewPortOffset': [{ type: core_1.Input },],
    'throttle': [{ type: core_1.Input },],
    'scrollELement': [{ type: core_1.Input },],
    'lazy': [{ type: core_1.Input },],
    'tooLazy': [{ type: core_1.Input },],
    'data': [{ type: core_1.Input },],
    'inview': [{ type: core_1.Output },],
};
exports.InviewDirective = InviewDirective;
//# sourceMappingURL=inview.directive.js.map
