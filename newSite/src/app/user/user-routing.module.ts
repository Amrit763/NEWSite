import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'',
    component:UsersComponent,
    children:[
      {
        path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>
          m.DashboardModule)
      },
      {
        path:'categories',
        loadChildren:()=>import('./categories/categories.module').then(m=>
          m.CategoriesModule)
      },{
        path:'about-us',
        loadChildren:()=>import('./about-us/about-us.module').then(m=>
          m.AboutUsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
