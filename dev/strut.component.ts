/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component} from 'angular2/core';


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
    `
})

export class StructDirectives{
    items=[1,2,3];
}