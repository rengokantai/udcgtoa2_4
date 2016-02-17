/**
 * Created by Hernan Y.Ke on 2016/2/16.
 */
import {Directive,ElementRef, OnInit,Renderer} from 'angular2/core';


@Directive({
    selector:'[myH]',
    inputs:['hc:myH']
})

export class HDirective implements OnInit{
    private _default = 'blue';
    hc:string;


    constructor(private _elR:ElementRef,private _renderer:Renderer){

    }

    ngOnInit():any{
        this._elR.nativeElement.style.backgroundColor=(this.hc||this._default);
        //this._renderer.setElementStyle(this._elR,'background-color',this._default);
    }
}