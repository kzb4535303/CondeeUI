import { NgModule } from '@angular/core';
import { CdHeaderComponent } from './components/layout/cd-header/cd-header.component';
import { CdHeaderModule } from './components/layout/cd-header/cd-header.module';
import { CdButtonModule } from './components/cd-button/cd-button.module';
import { CdRefreshModule } from './components/cd-refresh/cd-refresh.module';
import { CdAppModule } from './components/layout/cd-app/cd-app.module';
import { CdbodyModule } from './components/layout/cd-body/cd-body.module';
import { CdAlertModule } from './components/cd-alert/cd-alert.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      OverlayModule,
      CdHeaderModule,
      CdButtonModule,
      CdRefreshModule,
      CdAppModule,
      CdbodyModule,
      CdAlertModule
   ],
   exports: [
      OverlayModule,
      CdHeaderModule,
      CdButtonModule,
      CdRefreshModule,
      CdAppModule,
      CdbodyModule,
      CdAlertModule
   ]
})
export class CondeMobileModule {}
