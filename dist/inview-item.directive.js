"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var position_resolver_1 = require("./utils/position-resolver");
var InviewItemDirective = (function () {
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
        return position_resolver_1.PositionResolver.getBoundingClientRect(this._element.nativeElement);
    };
    InviewItemDirective.prototype.isVisible = function () {
        return position_resolver_1.PositionResolver.isVisible(this._element.nativeElement);
    };
    InviewItemDirective.prototype.getData = function () {
        return { id: this._id, data: this._data };
    };
    return InviewItemDirective;
}());
InviewItemDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[in-view-item]'
            },] },
];
/** @nocollapse */
InviewItemDirective.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
InviewItemDirective.propDecorators = {
    'data': [{ type: core_1.Input },],
    'id': [{ type: core_1.Input },],
};
exports.InviewItemDirective = InviewItemDirective;
//# sourceMappingURL=inview-item.directive.js.map