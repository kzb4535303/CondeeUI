import { NgModule } from "@angular/core";
import { CdHeaderComponent } from './components/cd-header/cd-header.component';
import { CdHeaderModule } from './components/cd-header/cd-header.module';
import { CdButtonModule } from './components/cd-button/cd-button.module';

@NgModule({
   imports: [CdHeaderModule, CdButtonModule],
   exports: [CdHeaderModule, CdButtonModule]
})
export class CondeMobileModule{}