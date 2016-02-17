/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Component} from 'angular2/core';
import {HDirective} from "./h.directive";

@Component({
    selector:'attr',
    template:`
    <div myH [hc]="'red'">H</div>
    <div myH>L</div>
    `,
    directives:[HDirective]
})

export class AttrComponent{

}