/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Directive,TemplateRef,ViewContainerRef} from 'angular2/core';

@Directive({
    selector:'[mUnless]',
    inputs:['mUnless']
})


export class UnlessDirective{
    constructor(private _temp:TemplateRef, private _vref:ViewContainerRef){}
    set mUnless(cond:boolean){
        if(!cond){
            this._vref.createEmbeddedView(this._temp);
        } else{
            this._vref.clear();
        }
    }
}