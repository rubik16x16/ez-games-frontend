import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { GanioComponent } from './templates/ganio/ganio.component';
import { OurCompanyComponent } from './pages/our-company/our-company.component';
import { OurNftComponent } from './pages/our-nft/our-nft.component';
import { MockTournamentsComponent } from './pages/mock-tournaments/mock-tournaments.component';
import { TestComponent } from './pages/test/test.component';

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
				path: 'tournaments',
				component: MockTournamentsComponent
			},
			{
				path: 'profile',
				component: ProfileComponent
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'our-company',
				component: OurCompanyComponent
			},
			{
				path: 'our-nft',
				component: OurNftComponent
			},
			{
				path: 'test',
				component: TestComponent
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
