import { NgModule } from "@angular/core";
import { CdHeaderComponent, CdLeftOption, CdRightOption } from './cd-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [CdHeaderComponent, CdLeftOption, CdRightOption],
    exports: [CdHeaderComponent]
})
export class CdHeaderModule{}