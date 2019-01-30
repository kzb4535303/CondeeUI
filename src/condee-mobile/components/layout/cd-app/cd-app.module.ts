import { NgModule } from "@angular/core";
import { CdAppComponent } from './cd-app.component';

@NgModule({
    declarations: [CdAppComponent],
    exports: [CdAppComponent]
})
export class CdAppModule {}