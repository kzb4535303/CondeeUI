import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RefreshComponent,
    AlertComponent
  ],
  imports: [
  AppRoutingModule,
    ShareModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
