System.register(['angular2/core', "./h.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, h_directive_1;
    var AttrComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (h_directive_1_1) {
                h_directive_1 = h_directive_1_1;
            }],
        execute: function() {
            AttrComponent = (function () {
                function AttrComponent() {
                }
                AttrComponent = __decorate([
                    core_1.Component({
                        selector: 'attr',
                        template: "\n    <div [myH]=\"'red'\">H</div>\n    <div myH>L</div>\n    ",
                        directives: [h_directive_1.HDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AttrComponent);
                return AttrComponent;
            })();
            exports_1("AttrComponent", AttrComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIkF0dHJDb21wb25lbnQiLCJBdHRyQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7Z0JBV0FDLENBQUNBO2dCQVhERDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxNQUFNQTt3QkFDZkEsUUFBUUEsRUFBQ0EsZ0VBR1JBO3dCQUNEQSxVQUFVQSxFQUFDQSxDQUFDQSx3QkFBVUEsQ0FBQ0E7cUJBQzFCQSxDQUFDQTs7a0NBSURBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0FYQSxBQVdDQSxJQUFBO1lBWEQseUNBV0MsQ0FBQSIsImZpbGUiOiJhdHRyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xNi5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtIRGlyZWN0aXZlfSBmcm9tIFwiLi9oLmRpcmVjdGl2ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonYXR0cicsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8ZGl2IFtteUhdPVwiJ3JlZCdcIj5IPC9kaXY+XHJcbiAgICA8ZGl2IG15SD5MPC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczpbSERpcmVjdGl2ZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRyQ29tcG9uZW50e1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
