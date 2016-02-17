System.register(['angular2/core', './attr.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, attr_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attr_component_1_1) {
                attr_component_1 = attr_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <attr>\n    place\n    </attr>\n    ",
                        directives: [attr_component_1.AttrComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO2dCQVdBQyxDQUFDQTtnQkFYREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFDQSw0Q0FJUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLDhCQUFhQSxDQUFDQTtxQkFDN0JBLENBQUNBOztpQ0FHREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQVhBLEFBV0NBLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7QXR0ckNvbXBvbmVudH0gZnJvbSAnLi9hdHRyLmNvbXBvbmVudCc7XHJcbi8vcGFzcyBbbXluYW1lXSBmcm9tIHBhcmVudCBjb21wb25lbnQgdG8gY2hpbGQgY29tcG9uZW50LmNoaWxkIGNvbXBvbmVudCByZWNlaXZlIGRhdGEgZnJvbSBbaW5wdXRdXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGF0dHI+XHJcbiAgICBwbGFjZVxyXG4gICAgPC9hdHRyPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0F0dHJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
