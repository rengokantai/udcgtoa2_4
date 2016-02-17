import {Component} from 'angular2/core';
import {AttrComponent} from './attr.component';
import{StructDirectives}from'./strut.component'
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
    <attr>
    place
    </attr>
    <struct></struct>
    `,
    directives:[AttrComponent,StructDirectives]
})
export class AppComponent {

}