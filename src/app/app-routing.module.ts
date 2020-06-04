import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempSignUpComponent } from './temp-sign-up/temp-sign-up.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
const routes: Routes = [
  { path: 'temp-sign-up' , component: TempSignUpComponent},
  { path: 'hero-form' , component: HeroFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
