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
                //ngOnInit():any{
                //    this._elR.nativeElement.style.backgroundColor=(this.hc||this._default);
                //}
                HDirective.prototype.onMouseEnter = function () {
                    this._elR.nativeElement.style.backgroundColor = (this.hc || this._default);
                };
                HDirective.prototype.onMouseLeave = function () {
                    this._elR.nativeElement.style.backgroundColor = null;
                };
                HDirective = __decorate([
                    core_1.Directive({
                        selector: '[myH]',
                        inputs: ['hc:myH'],
                        host: {
                            '(mouseenter)': 'onMouseEnter()',
                            '(mouseleave)': 'onMouseLeave()'
                        }
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], HDirective);
                return HDirective;
            })();
            exports_1("HDirective", HDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImguZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbIkhEaXJlY3RpdmUiLCJIRGlyZWN0aXZlLmNvbnN0cnVjdG9yIiwiSERpcmVjdGl2ZS5vbk1vdXNlRW50ZXIiLCJIRGlyZWN0aXZlLm9uTW91c2VMZWF2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBY0lBLG9CQUFvQkEsSUFBZUEsRUFBU0EsU0FBa0JBO29CQUExQ0MsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBV0E7b0JBQVNBLGNBQVNBLEdBQVRBLFNBQVNBLENBQVNBO29CQUp0REEsYUFBUUEsR0FBR0EsTUFBTUEsQ0FBQ0E7Z0JBTTFCQSxDQUFDQTtnQkFFREQsaUJBQWlCQTtnQkFDakJBLDZFQUE2RUE7Z0JBQzdFQSxHQUFHQTtnQkFDSEEsaUNBQVlBLEdBQVpBO29CQUNJRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxhQUFhQSxDQUFDQSxLQUFLQSxDQUFDQSxlQUFlQSxHQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxJQUFFQSxJQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQTtnQkFDM0VBLENBQUNBO2dCQUNERixpQ0FBWUEsR0FBWkE7b0JBQ0lHLElBQUlBLENBQUNBLElBQUlBLENBQUNBLGFBQWFBLENBQUNBLEtBQUtBLENBQUNBLGVBQWVBLEdBQUNBLElBQUlBLENBQUNBO2dCQUN2REEsQ0FBQ0E7Z0JBMUJMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxPQUFPQTt3QkFDaEJBLE1BQU1BLEVBQUNBLENBQUNBLFFBQVFBLENBQUNBO3dCQUNqQkEsSUFBSUEsRUFBQ0E7NEJBQ0RBLGNBQWNBLEVBQUNBLGdCQUFnQkE7NEJBQy9CQSxjQUFjQSxFQUFDQSxnQkFBZ0JBO3lCQUNsQ0E7cUJBQ0pBLENBQUNBOzsrQkFzQkRBO2dCQUFEQSxpQkFBQ0E7WUFBREEsQ0E3QkEsQUE2QkNBLElBQUE7WUE3QkQsbUNBNkJDLENBQUEiLCJmaWxlIjoiaC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0RpcmVjdGl2ZSxFbGVtZW50UmVmLCBPbkluaXQsUmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6J1tteUhdJyxcclxuICAgIGlucHV0czpbJ2hjOm15SCddLFxyXG4gICAgaG9zdDp7XHJcbiAgICAgICAgJyhtb3VzZWVudGVyKSc6J29uTW91c2VFbnRlcigpJyxcclxuICAgICAgICAnKG1vdXNlbGVhdmUpJzonb25Nb3VzZUxlYXZlKCknXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSERpcmVjdGl2ZXtcclxuICAgIHByaXZhdGUgX2RlZmF1bHQgPSAnYmx1ZSc7XHJcbiAgICBoYzpzdHJpbmc7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUjpFbGVtZW50UmVmLHByaXZhdGUgX3JlbmRlcmVyOlJlbmRlcmVyKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9uZ09uSW5pdCgpOmFueXtcclxuICAgIC8vICAgIHRoaXMuX2VsUi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj0odGhpcy5oY3x8dGhpcy5fZGVmYXVsdCk7XHJcbiAgICAvL31cclxuICAgIG9uTW91c2VFbnRlcigpe1xyXG4gICAgICAgIHRoaXMuX2VsUi5uYXRpdmVFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvcj0odGhpcy5oY3x8dGhpcy5fZGVmYXVsdCk7XHJcbiAgICB9XHJcbiAgICBvbk1vdXNlTGVhdmUoKXtcclxuICAgICAgICB0aGlzLl9lbFIubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9bnVsbDtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
