/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Directive,ElementRef, OnInit,Renderer} from 'angular2/core';


@Directive({
    selector:'[myH]',
    inputs:['hc:myH'],
    host:{
        '(mouseenter)':'onMouseEnter()',
        '(mouseleave)':'onMouseLeave()'
    }
})

export class HDirective{
    private _default = 'blue';
    hc:string;


    constructor(private _elR:ElementRef,private _renderer:Renderer){

    }

    //ngOnInit():any{
    //    this._elR.nativeElement.style.backgroundColor=(this.hc||this._default);
    //}
    onMouseEnter(){
        this._elR.nativeElement.style.backgroundColor=(this.hc||this._default);
    }
    onMouseLeave(){
        this._elR.nativeElement.style.backgroundColor=null;
    }


}