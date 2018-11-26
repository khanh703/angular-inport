"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WindowRulerStatic = (function () {
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
exports.WindowRulerStatic = WindowRulerStatic;
var WindowRuler = (function () {
    function WindowRuler() {
        WindowRulerStatic.onChange();
    }
    WindowRuler.prototype.onChange = function () {
        WindowRulerStatic.onChange();
    };
    WindowRuler.prototype.getWindowViewPortRuler = function () {
        return WindowRulerStatic.getWindowViewPortRuler();
    };
    return WindowRuler;
}());
WindowRuler.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
WindowRuler.ctorParameters = function () { return []; };
exports.WindowRuler = WindowRuler;
//# sourceMappingURL=viewport-ruler.js.map