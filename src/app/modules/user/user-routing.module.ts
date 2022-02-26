import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { GanioComponent } from './templates/ganio/ganio.component';
import { Template1Component } from './templates/template1/template1.component';

const routes: Routes = [
  {
    path: '',
    component: GanioComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'register',
				component: RegisterComponent
			},
			{
				path: 'teams',
				component: TeamsComponent
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
