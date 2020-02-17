import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileLayoutComponent } from '../_layouts/profile-layout/profile-layout.component';
import { ProfileHomeComponent } from './profile-home/profile-home.component';


const routes: Routes = [
  {path: '', component: ProfileLayoutComponent,
  children: [
    {path: '', component: ProfileHomeComponent, data: {pageName: 'Home'}}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
