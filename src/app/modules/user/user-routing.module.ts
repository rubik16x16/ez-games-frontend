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
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { TournamentResultsComponent } from './pages/tournament-results/tournament-results.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { MyTournamentsComponent } from './pages/my-tournaments/my-tournaments.component';
import { ShowComponent as ShowMyTournament } from './pages/my-tournaments/show/show.component';

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
				component: TournamentsComponent
			},
			{
				path: 'tournaments/:id/results',
				component: TournamentResultsComponent
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
				path: 'forgot-password/:token',
				component: ForgotPasswordComponent
			},
			{
				path: 'test',
				component: TestComponent
			},
			{
				path: 'my-tournaments',
				component: MyTournamentsComponent
			},
			{
				path: 'my-tournaments/:id',
				component: ShowMyTournament
			}
    ]
  },
  {
		path: 'verify-email/:token',
		component: EmailVerificationComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
