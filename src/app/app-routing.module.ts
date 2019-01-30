import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RefreshComponent } from './refresh/refresh.component';
import { AlertComponent } from './alert/alert.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule' },
  { path: 'refresh', component: RefreshComponent },
  { path: 'alert', component: AlertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
