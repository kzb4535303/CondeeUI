import { NgModule } from "@angular/core";
import { CdButtonComponent } from './cd-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [CdButtonComponent],
    exports: [CdButtonComponent]
})
export class CdButtonModule{}