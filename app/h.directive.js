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
    var HDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HDirective = (function () {
                function HDirective(_elR, _renderer) {
                    this._elR = _elR;
                    this._renderer = _renderer;
                    this._default = 'blue';
                }
                HDirective.prototype.ngOnInit = function () {
                    this._elR.nativeElement.style.backgroundColor = (this.hc || this._default);
                    //this._renderer.setElementStyle(this._elR,'background-color',this._default);
                };
                HDirective = __decorate([
                    core_1.Directive({
                        selector: '[myH]',
                        inputs: ['hc:myH']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HDirective);
                return HDirective;
            })();
            exports_1("HDirective", HDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIkhEaXJlY3RpdmUiLCJIRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiSERpcmVjdGl2ZS5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBVUlBLG9CQUFvQkEsSUFBZUEsRUFBU0EsU0FBa0JBO29CQUExQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBV0E7b0JBQVNBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVNBO29CQUp0REEsYUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBTTFCQSxDQUFDQTtnQkFFREQsNkJBQVFBLEdBQVJBO29CQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFFQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtvQkFDdkVBLDZFQUE2RUE7Z0JBQ2pGQSxDQUFDQTtnQkFqQkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUNBLE9BQU9BO3dCQUNoQkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7cUJBQ3BCQSxDQUFDQTs7K0JBZURBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQsbUNBa0JDLENBQUEiLCJmaWxlIjoiaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdGl2ZSxFbGVtZW50UmVmLCBPbkluaXQsUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6J1tteUhdJyxcclxuICAgIGlucHV0czpbJ2hjOm15SCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAgIHByaXZhdGUgX2RlZmF1bHQgPSAnYmx1ZSc7XHJcbiAgICBoYzpzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUjpFbGVtZW50UmVmLHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnl7XHJcbiAgICAgICAgdGhpcy5fZWxSLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yPSh0aGlzLmhjfHx0aGlzLl9kZWZhdWx0KTtcclxuICAgICAgICAvL3RoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLl9lbFIsJ2JhY2tncm91bmQtY29sb3InLHRoaXMuX2RlZmF1bHQpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
