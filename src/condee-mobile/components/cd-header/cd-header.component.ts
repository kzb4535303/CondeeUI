import { Component, Input, HostBinding } from "@angular/core";

@Component({
    selector: 'cd-header',
    templateUrl: './cd-header.component.html',
    styleUrls: ['./cd-header.component.scss']
})
export class CdHeaderComponent {
    @Input()
    title: string;
}

@Component({
    selector:'cd-right-option',
    template: `
     <ng-content right>
 
     </ng-content>
    `
 })
 export class CdRightOption{}

@Component({
   selector:'cd-left-option',
   template: `
    <ng-content left>

    </ng-content>
   `
})
export class CdLeftOption{}