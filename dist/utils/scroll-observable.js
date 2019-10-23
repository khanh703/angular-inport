"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
require("rxjs/add/operator/share");
var viewport_ruler_1 = require("./viewport-ruler");
var ScrollObservable = (function () {
    function ScrollObservable(_windowRuler) {
        this._windowRuler = _windowRuler;
        if (!ScrollObservable._globalObservable) {
            ScrollObservable._globalObservable = this._getGlobalObservable();
        }
    }
    ScrollObservable.isWindow = function (windowElement) {
        return Object.prototype.toString.call(windowElement).includes('Window');
    };
    ScrollObservable.prototype._getGlobalObservable = function () {
        var _this = this;
        return Observable_1.Observable.merge(Observable_1.Observable.fromEvent(window.document, 'scroll'), Observable_1.Observable.fromEvent(window, 'resize')
            .map(function (event) {
            _this._windowRuler.onChange();
            return event;
        })).share();
    };
    ScrollObservable.prototype.scrollObservableFor = function (windowElement) {
        if (ScrollObservable.isWindow(windowElement)) {
            return ScrollObservable._globalObservable;
        }
        if (ScrollObservable._elementObservableReferences.has(windowElement)) {
            return ScrollObservable._elementObservableReferences.get(windowElement);
        }
        var ref = this._createElementObservable(windowElement);
        ScrollObservable._elementObservableReferences.set(windowElement, ref);
        return ref;
    };
    ScrollObservable.prototype._createElementObservable = function (windowElement) {
        return Observable_1.Observable.fromEvent(windowElement, 'scroll').share();
    };
    return ScrollObservable;
}());
ScrollObservable._elementObservableReferences = new Map();
ScrollObservable.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
ScrollObservable.ctorParameters = function () { return [
    { type: viewport_ruler_1.WindowRuler, },
]; };
exports.ScrollObservable = ScrollObservable;
//# sourceMappingURL=scroll-observable.js.map
