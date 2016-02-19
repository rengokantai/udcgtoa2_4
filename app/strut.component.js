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
                    this.items = [1, 2, 3];
                }
                StructDirectives = __decorate([
                    core_1.Component({
                        selector: 'struct',
                        template: "\n        <section class=\"directive\"><h2>\n        <input type=\"text\" #number (keyup)=\"0\">\n        <div *ngIf=\"number.value>2\">\n        show if greater than 2\n        </div>\n        </h2></section>\n        <section class=\"directive\">\n        <div>\n        <ul><li *ngFor=\"#item of items\">{{item}}\n        </li></ul></div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructDirectives);
                return StructDirectives;
            })();
            exports_1("StructDirectives", StructDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTdHJ1Y3REaXJlY3RpdmVzIiwiU3RydWN0RGlyZWN0aXZlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO29CQWtCSUMsVUFBS0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFuQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUNBLFFBQVFBO3dCQUNqQkEsUUFBUUEsRUFBQ0EsaVhBWVJBO3FCQUNKQSxDQUFDQTs7cUNBSURBO2dCQUFEQSx1QkFBQ0E7WUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7WUFuQkQsK0NBbUJDLENBQUEiLCJmaWxlIjoic3RydXQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J3N0cnVjdCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj48aDI+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI251bWJlciAoa2V5dXApPVwiMFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJudW1iZXIudmFsdWU+MlwiPlxyXG4gICAgICAgIHNob3cgaWYgZ3JlYXRlciB0aGFuIDJcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2gyPjwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPHVsPjxsaSAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtc1wiPnt7aXRlbX19XHJcbiAgICAgICAgPC9saT48L3VsPjwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3REaXJlY3RpdmVze1xyXG4gICAgaXRlbXM9WzEsMiwzXTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
