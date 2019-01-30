import { NgModule } from "@angular/core";
import { CdHeaderComponent } from './cd-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [CdHeaderComponent],
    exports: [CdHeaderComponent]
})
export class CdHeaderModule{}