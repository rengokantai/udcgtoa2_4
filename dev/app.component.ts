import {Component} from 'angular2/core';
import {AttrComponent} from './attr.component';
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
    <attr>
    place
    </attr>
    `,
    directives:[AttrComponent]
})
export class AppComponent {

}