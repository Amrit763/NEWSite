import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  PageNotFoundComponent,
} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'user/dashboard',
    pathMatch:'full'
  },{
    path:'user',
    loadChildren:()=> import('./user/user.module').then(m=>
      m.UserModule)
  },{
    path:'shared',
    loadChildren:()=> import('./shared/shared.module').then(m=>
      m.SharedModule)
  },{
    path:'A@n$i&l9813++',
    loadChildren:()=> import('./admin/admin.module').then(m=>
      m.AdminModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>
      m.AuthModule)
  },{
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
