import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { Template1Component } from './templates/template1/template1.component';

const routes: Routes = [
  {
    path: '',
    component: Template1Component,
    children: [
      {
        path: '',
        component: IndexComponent
      },
			{
				path: 'login',
				component: LoginComponent
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
