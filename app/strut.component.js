System.register(['angular2/core', "./unless.directive"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, unless_directive_1;
    var StructDirectives;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (unless_directive_1_1) {
                unless_directive_1 = unless_directive_1_1;
            }],
        execute: function() {
            StructDirectives = (function () {
                function StructDirectives() {
                    this.items = [1, 2, 3];
                }
                StructDirectives = __decorate([
                    core_1.Component({
                        selector: 'struct',
                        template: "\n        <section class=\"directive\"><h2>\n        <input type=\"text\" #number (keyup)=\"0\">\n        <div *ngIf=\"number.value>2\">\n        show if greater than 2\n        </div>\n        </h2></section>\n        <section class=\"directive\">\n        <div>\n        <ul><li *ngFor=\"#item of items, #i = index\">{{item}}{{i}}\n        </li></ul></div>\n        </section>\n        <section class=\"directive\">\n        <input type=\"text\" #color (keyup)=\"0\">\n        <div [ngSwitch]=\"color.value\">\n        <template [ngSwitchWhen]=\"'red'\">red</template>\n        <template [ngSwitchWhen]=\"'blue'\">blue</template>\n        <template ngSwitchDefault>default</template>\n        </div>\n        </section>\n        <section class=\"directive\">\n            <input type=\"text\" #cond (keyup)=\"0\">\n            <div *mUnless=\"cond.value!='false'\">\n            show\n            </div>\n        </section>\n\n    ",
                        directives: [unless_directive_1.UnlessDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], StructDirectives);
                return StructDirectives;
            })();
            exports_1("StructDirectives", StructDirectives);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJTdHJ1Y3REaXJlY3RpdmVzIiwiU3RydWN0RGlyZWN0aXZlcy5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUFBO29CQWtDSUMsVUFBS0EsR0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xCQSxDQUFDQTtnQkFuQ0REO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUNBLFFBQVFBO3dCQUNqQkEsUUFBUUEsRUFBQ0EsdTZCQTJCUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLGtDQUFlQSxDQUFDQTtxQkFDL0JBLENBQUNBOztxQ0FJREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQW5DQSxBQW1DQ0EsSUFBQTtZQW5DRCwrQ0FtQ0MsQ0FBQSIsImZpbGUiOiJzdHJ1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VW5sZXNzRGlyZWN0aXZlfSBmcm9tIFwiLi91bmxlc3MuZGlyZWN0aXZlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvcjonc3RydWN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPjxoMj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbnVtYmVyIChrZXl1cCk9XCIwXCI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm51bWJlci52YWx1ZT4yXCI+XHJcbiAgICAgICAgc2hvdyBpZiBncmVhdGVyIHRoYW4gMlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaDI+PC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiZGlyZWN0aXZlXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8dWw+PGxpICpuZ0Zvcj1cIiNpdGVtIG9mIGl0ZW1zLCAjaSA9IGluZGV4XCI+e3tpdGVtfX17e2l9fVxyXG4gICAgICAgIDwvbGk+PC91bD48L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJkaXJlY3RpdmVcIj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29sb3IgKGtleXVwKT1cIjBcIj5cclxuICAgICAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjb2xvci52YWx1ZVwiPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSBbbmdTd2l0Y2hXaGVuXT1cIidyZWQnXCI+cmVkPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgW25nU3dpdGNoV2hlbl09XCInYmx1ZSdcIj5ibHVlPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgbmdTd2l0Y2hEZWZhdWx0PmRlZmF1bHQ8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImRpcmVjdGl2ZVwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjY29uZCAoa2V5dXApPVwiMFwiPlxyXG4gICAgICAgICAgICA8ZGl2ICptVW5sZXNzPVwiY29uZC52YWx1ZSE9J2ZhbHNlJ1wiPlxyXG4gICAgICAgICAgICBzaG93XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczpbVW5sZXNzRGlyZWN0aXZlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cnVjdERpcmVjdGl2ZXN7XHJcbiAgICBpdGVtcz1bMSwyLDNdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
