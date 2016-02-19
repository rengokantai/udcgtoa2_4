/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component} from 'angular2/core';
import {UnlessDirective} from "./unless.directive";


@Component({
    selector:'struct',
    template:`
        <section class="directive"><h2>
        <input type="text" #number (keyup)="0">
        <div *ngIf="number.value>2">
        show if greater than 2
        </div>
        </h2></section>
        <section class="directive">
        <div>
        <ul><li *ngFor="#item of items, #i = index">{{item}}{{i}}
        </li></ul></div>
        </section>
        <section class="directive">
        <input type="text" #color (keyup)="0">
        <div [ngSwitch]="color.value">
        <template [ngSwitchWhen]="'red'">red</template>
        <template [ngSwitchWhen]="'blue'">blue</template>
        <template ngSwitchDefault>default</template>
        </div>
        </section>
        <section class="directive">
            <input type="text" #cond (keyup)="0">
            <div *mUnless="cond.value!='false'">
            show
            </div>
        </section>

    `,
    directives:[UnlessDirective]
})

export class StructDirectives{
    items=[1,2,3];
}