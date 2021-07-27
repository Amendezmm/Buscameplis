import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './core/Shared/components/not-found/not-found.component';

const routes: Routes = [
  {path:'', loadChildren: ()=> import('./Public/public.module').then(m=>m.PublicModele)},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
