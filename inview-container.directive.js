"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var inview_item_directive_1 = require("./inview-item.directive");
var scroll_observable_1 = require("./utils/scroll-observable");
var viewport_ruler_1 = require("./utils/viewport-ruler");
var offset_resolver_1 = require("./utils/offset-resolver");
var position_resolver_1 = require("./utils/position-resolver");
// allmost same configuration as child
// child will not have inview property? to trigger changes
// will use scroll on this or window
// will check wheather the child is in view port
// will start checking from last inview child and with direction of scroll until a child is not visible
// can return all inview children
// or best match case
// if container is used then first check if container itself is in the viewport of the window.
// then only the futher calculation should take place
var InviewContainerDirective = (function () {
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
        this.inview = new core_1.EventEmitter();
    }
    Object.defineProperty(InviewContainerDirective.prototype, "offset", {
        set: function (offset) {
            this._offset = offset_resolver_1.OffsetResolverFactory.create(offset).normalizeOffset();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviewContainerDirective.prototype, "viewPortOffset", {
        set: function (offset) {
            this._viewPortOffset = offset_resolver_1.OffsetResolverFactory.create(offset).normalizeOffset();
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
        this._scrollSuscription = this._scrollObservable.scrollObservableFor(this._scrollWindow ? window : this._element.nativeElement)[this._throttleType](function () { return Rx_1.Observable.timer(_this._throttle); })
            .filter(function () { return true; })
            .mergeMap(function (event) { return Rx_1.Observable.of(_this._getViewPortRuler()); })
            .do(function () { return _this._checkScrollDirection(); })
            .subscribe(function (containersBounds) { return _this.handleOnScroll(containersBounds); });
    };
    InviewContainerDirective.prototype._checkScrollDirection = function () {
        if (this._scrollWindow) {
            this._scrollDirection = (window.scrollY > this._lastScrollY) ? 'down' : 'up';
            this._lastScrollY = window.scrollY;
        }
        else {
            this._scrollDirection = (this._element.nativeElement.scrollTop > this._lastScrollY) ? 'down' : 'up';
            this._lastScrollY = this._element.nativeElement.scrollTop;
        }
    };
    InviewContainerDirective.prototype._getViewPortRuler = function () {
        return this._scrollWindow ?
            this._windowRuler.getWindowViewPortRuler() :
            position_resolver_1.PositionResolver.getBoundingClientRect(this._element.nativeElement);
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
        var viewPortOffsetRect = position_resolver_1.PositionResolver.offsetRect(containersBounds, this._viewPortOffset);
        var visibleChildren = [];
        if (this._inviewChildren) {
            visibleChildren = this._inviewChildren.toArray().filter(function (child) {
                var elementOffsetRect = position_resolver_1.PositionResolver.offsetRect(child.getELementRect(), _this._offset);
                return child.isVisible() && position_resolver_1.PositionResolver.intersectRect(elementOffsetRect, viewPortOffsetRect);
            });
            if (this._bestMatch) {
                var bestMatchChild_1 = 0;
                if (visibleChildren.length) {
                    visibleChildren.reduce(function (distance, currChild) {
                        var _distance = position_resolver_1.PositionResolver.distance(viewPortOffsetRect, position_resolver_1.PositionResolver.offsetRect(currChild.getELementRect(), _this._offset));
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
                data_2.inview = visibleChildren.map(function (vc) { return vc.getData(); });
                data_2.direction = this._scrollDirection;
                this._zone.run(function () { return _this.inview.emit(data_2); });
            }
        }
    };
    return InviewContainerDirective;
}());
InviewContainerDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[in-view-container]'
            },] },
];
/** @nocollapse */
InviewContainerDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
    { type: scroll_observable_1.ScrollObservable, },
    { type: viewport_ruler_1.WindowRuler, },
    { type: core_1.NgZone, },
]; };
InviewContainerDirective.propDecorators = {
    'offset': [{ type: core_1.Input },],
    'viewPortOffset': [{ type: core_1.Input },],
    'throttle': [{ type: core_1.Input },],
    'scrollWindow': [{ type: core_1.Input },],
    'data': [{ type: core_1.Input },],
    'bestMatch': [{ type: core_1.Input },],
    'inview': [{ type: core_1.Output },],
    '_inviewChildren': [{ type: core_1.ContentChildren, args: [inview_item_directive_1.InviewItemDirective,] },],
};
exports.InviewContainerDirective = InviewContainerDirective;
//# sourceMappingURL=inview-container.directive.js.map