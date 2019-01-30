import { NgModule } from '@angular/core';
import { CdAlertComponent } from './cd-alert.component';

@NgModule({
    declarations: [CdAlertComponent],
    entryComponents: [CdAlertComponent],
    exports: [CdAlertComponent]
})
export class CdAlertModule {}
