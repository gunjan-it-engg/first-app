import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './component/display/display.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { NoInternetComponent } from './component/no-internet/no-internet.component';
import { NetworkGuard } from './guard/network.guard';


const routes: Routes = [
  { path: 'dash-board', component: DashboardComponent , canActivate:[AuthGuard]},
  { path: 'noInternet', component: NoInternetComponent, canDeactivate:[NetworkGuard]},
  { path: '', component: DisplayComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
