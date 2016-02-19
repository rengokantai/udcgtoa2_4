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
                        template: "\n        <section class=\"directive\"><h2>\n        <input type=\"text\" #number (keyup)=\"0\">\n        <div *ngIf=\"number.value>2\">\n        show if greater than 2\n        </div>\n        </h2></section>\n        <section class=\"directive\">\n        <div>\n        <ul><li *ngFor=\"#item of items, #i = index\">{{item}}{{i}}\n        </li></ul></div>\n        </section>\n        <section class=\"directive\">\n        <input type=\"text\" #color (keyup)=\"0\">\n        <div [ngSwitch]=\"color.value\">\n        <template [ngSwitchWhen]=\"'red'\">red</template>\n        <template [ngSwitchWhen]=\"'blue'\">blue</template>\n        <template ngSwitchDefault>default</template>\n        </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructDirectives);
                return StructDirectives;
            })();
            exports_1("StructDirectives", StructDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTdHJ1Y3REaXJlY3RpdmVzIiwiU3RydWN0RGlyZWN0aXZlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUFBO29CQTBCSUMsVUFBS0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkEzQkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUNBLFFBQVFBO3dCQUNqQkEsUUFBUUEsRUFBQ0EseXRCQW9CUkE7cUJBQ0pBLENBQUNBOztxQ0FJREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQTNCQSxBQTJCQ0EsSUFBQTtZQTNCRCwrQ0EyQkMsQ0FBQSIsImZpbGUiOiJzdHJ1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjonc3RydWN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPjxoMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZT4yXCI+XHJcbiAgICAgICAgc2hvdyBpZiBncmVhdGVyIHRoYW4gMlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaDI+PC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+PGxpICpuZ0Zvcj1cIiNpdGVtIG9mIGl0ZW1zLCAjaSA9IGluZGV4XCI+e3tpdGVtfX17e2l9fVxyXG4gICAgICAgIDwvbGk+PC91bD48L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29sb3IgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjb2xvci52YWx1ZVwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidyZWQnXCI+cmVkPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYmx1ZSdcIj5ibHVlPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PmRlZmF1bHQ8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJ1Y3REaXJlY3RpdmVze1xyXG4gICAgaXRlbXM9WzEsMiwzXTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
