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
    var StructDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StructDirectives = (function () {
                function StructDirectives() {
                }
                StructDirectives = __decorate([
                    core_1.Component({
                        selector: 'struct',
                        template: "\n        <section class=\"directive\"><h2>\n        <input type=\"text\" #number (keyup)=\"0\">\n        <div *ngIf=\"number.value>2\">\n        show if greater than 2\n        </div>\n        </h2></section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructDirectives);
                return StructDirectives;
            })();
            exports_1("StructDirectives", StructDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTdHJ1Y3REaXJlY3RpdmVzIiwiU3RydWN0RGlyZWN0aXZlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO2dCQWNBQyxDQUFDQTtnQkFkREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsUUFBUUE7d0JBQ2pCQSxRQUFRQSxFQUFDQSx5TkFPUkE7cUJBQ0pBLENBQUNBOztxQ0FJREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQWRBLEFBY0NBLElBQUE7WUFkRCwrQ0FjQyxDQUFBIiwiZmlsZSI6InN0cnV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xNi5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidzdHJ1Y3QnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+PGgyPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNudW1iZXIgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibnVtYmVyLnZhbHVlPjJcIj5cclxuICAgICAgICBzaG93IGlmIGdyZWF0ZXIgdGhhbiAyXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oMj48L3NlY3Rpb24+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RydWN0RGlyZWN0aXZlc3tcclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
