System.register(['angular2/core', './attr.component', './strut.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, attr_component_1, strut_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (attr_component_1_1) {
                attr_component_1 = attr_component_1_1;
            },
            function (strut_component_1_1) {
                strut_component_1 = strut_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <attr>\n    place\n    </attr>\n    <struct></struct>\n    ",
                        directives: [attr_component_1.AttrComponent, strut_component_1.StructDirectives]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO2dCQVlBQyxDQUFDQTtnQkFaREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFDQSxtRUFLUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLDhCQUFhQSxFQUFDQSxrQ0FBZ0JBLENBQUNBO3FCQUM5Q0EsQ0FBQ0E7O2lDQUdEQTtnQkFBREEsbUJBQUNBO1lBQURBLENBWkEsQUFZQ0EsSUFBQTtZQVpELHVDQVlDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtBdHRyQ29tcG9uZW50fSBmcm9tICcuL2F0dHIuY29tcG9uZW50JztcclxuaW1wb3J0e1N0cnVjdERpcmVjdGl2ZXN9ZnJvbScuL3N0cnV0LmNvbXBvbmVudCdcclxuLy9wYXNzIFtteW5hbWVdIGZyb20gcGFyZW50IGNvbXBvbmVudCB0byBjaGlsZCBjb21wb25lbnQuY2hpbGQgY29tcG9uZW50IHJlY2VpdmUgZGF0YSBmcm9tIFtpbnB1dF1cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8YXR0cj5cclxuICAgIHBsYWNlXHJcbiAgICA8L2F0dHI+XHJcbiAgICA8c3RydWN0Pjwvc3RydWN0PlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W0F0dHJDb21wb25lbnQsU3RydWN0RGlyZWN0aXZlc11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
