import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
const routes: Routes = [{
  path: '', component :AdminLayoutComponent,
  children: [
    {
    path: '', component:HomeComponent,
    loadChildren: ()=> import('../app/core/home/home.module').then(m => m.HomeModule)
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
