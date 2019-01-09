import { NgModule } from "@angular/core";
import { CondeMobileModule } from './../../condee-mobile/condeeMobile.module';
@NgModule({
    imports: [CondeMobileModule],
    exports: [CondeMobileModule]
})
export class ShareModule{}
