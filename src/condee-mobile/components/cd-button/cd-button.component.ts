import { Component, Input, OnInit, Renderer2, ElementRef } from "@angular/core";
import { CdButtonInterface } from './interface/cd-button-interface';

@Component({
    selector: 'cd-button',
    templateUrl: './cd-button.component.html',
    styleUrls: ['./cd-button.component.scss']
})
export class CdButtonComponent implements CdButtonInterface,OnInit {
    @Input()
    type: string = 'primary';
    @Input()
    block: boolean = false;
    @Input()
    clear: boolean = false;
    @Input()
    outline: boolean = true;
    @Input()
    round: boolean = false;
    @Input()
    size: string = 'default'
    constructor(private elementRef: ElementRef, private render: Renderer2) {}
    ngOnInit() {
        this.render.addClass(this.elementRef.nativeElement, `cd-button-${ this.type }`)
        if(this.block) {
            this.render.addClass(this.elementRef.nativeElement, 'cd-button-block')
        }
        if(this.round) {
            this.render.addClass(this.elementRef.nativeElement, 'cd-button-round')
        }
    }
}