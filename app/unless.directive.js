System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UnlessDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UnlessDirective = (function () {
                function UnlessDirective(_temp, _vref) {
                    this._temp = _temp;
                    this._vref = _vref;
                }
                Object.defineProperty(UnlessDirective.prototype, "mUnless", {
                    set: function (cond) {
                        if (!cond) {
                            this._vref.createEmbeddedView(this._temp);
                        }
                        else {
                            this._vref.clear();
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                UnlessDirective = __decorate([
                    core_1.Directive({
                        selector: '[mUnless]',
                        inputs: ['mUnless']
                    }), 
                    __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
                ], UnlessDirective);
                return UnlessDirective;
            })();
            exports_1("UnlessDirective", UnlessDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubGVzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiVW5sZXNzRGlyZWN0aXZlIiwiVW5sZXNzRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiVW5sZXNzRGlyZWN0aXZlLm1Vbmxlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQU9JQSx5QkFBb0JBLEtBQWlCQSxFQUFVQSxLQUFzQkE7b0JBQWpEQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFZQTtvQkFBVUEsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBaUJBO2dCQUFFQSxDQUFDQTtnQkFDeEVELHNCQUFJQSxvQ0FBT0E7eUJBQVhBLFVBQVlBLElBQVlBO3dCQUNwQkUsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7NEJBQ05BLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQzlDQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQUEsQ0FBQ0E7NEJBQ0hBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO3dCQUN2QkEsQ0FBQ0E7b0JBQ0xBLENBQUNBOzs7bUJBQUFGO2dCQWRMQTtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxXQUFXQTt3QkFDcEJBLE1BQU1BLEVBQUNBLENBQUNBLFNBQVNBLENBQUNBO3FCQUNyQkEsQ0FBQ0E7O29DQVlEQTtnQkFBREEsc0JBQUNBO1lBQURBLENBZkEsQUFlQ0EsSUFBQTtZQWZELDZDQWVDLENBQUEiLCJmaWxlIjoidW5sZXNzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7RGlyZWN0aXZlLFRlbXBsYXRlUmVmLFZpZXdDb250YWluZXJSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjonW21Vbmxlc3NdJyxcclxuICAgIGlucHV0czpbJ21Vbmxlc3MnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVbmxlc3NEaXJlY3RpdmV7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90ZW1wOlRlbXBsYXRlUmVmLCBwcml2YXRlIF92cmVmOlZpZXdDb250YWluZXJSZWYpe31cclxuICAgIHNldCBtVW5sZXNzKGNvbmQ6Ym9vbGVhbil7XHJcbiAgICAgICAgaWYoIWNvbmQpe1xyXG4gICAgICAgICAgICB0aGlzLl92cmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZyZWYuY2xlYXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
