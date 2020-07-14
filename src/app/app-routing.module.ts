import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: InfoCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
