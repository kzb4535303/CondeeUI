import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './layout.router';
import { ShareModule } from '../share/share.module';

@NgModule({
    imports: [
        ShareModule,
        CommonModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [HeaderComponent]
})
export class LayoutModule{}