"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var inview_directive_1 = require("./inview.directive");
var inview_container_directive_1 = require("./inview-container.directive");
var inview_item_directive_1 = require("./inview-item.directive");
var scroll_observable_1 = require("./utils/scroll-observable");
var viewport_ruler_1 = require("./utils/viewport-ruler");
var NgInviewModule = (function () {
    function NgInviewModule() {
    }
    return NgInviewModule;
}());
NgInviewModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [],
                declarations: [inview_directive_1.InviewDirective, inview_container_directive_1.InviewContainerDirective, inview_item_directive_1.InviewItemDirective],
                exports: [inview_directive_1.InviewDirective, inview_container_directive_1.InviewContainerDirective, inview_item_directive_1.InviewItemDirective],
                providers: [scroll_observable_1.ScrollObservable, viewport_ruler_1.WindowRuler]
            },] },
];
/** @nocollapse */
NgInviewModule.ctorParameters = function () { return []; };
exports.NgInviewModule = NgInviewModule;
//# sourceMappingURL=inview.module.js.map