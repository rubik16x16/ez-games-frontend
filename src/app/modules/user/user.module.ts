import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from "ng-recaptcha";
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';

import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { GanioComponent } from './templates/ganio/ganio.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShowComponent } from './pages/tournaments/show/show.component';
import { OurCompanyComponent } from './pages/our-company/our-company.component';
import { OurNftComponent } from './pages/our-nft/our-nft.component';
import { MockTournamentsComponent } from './pages/mock-tournaments/mock-tournaments.component';
import { TestComponent } from './pages/test/test.component';
import { FiltersComponent } from './pages/tournaments/filters/filters.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { ComingSoonModalComponent } from './components/coming-soon-modal/coming-soon-modal.component';
import { CountDownComponent } from './components/count-down/count-down.component';
import { EmailVerificationModalComponent } from './components/email-verification-modal/email-verification-modal.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { RegisterTournamentModalComponent } from './components/register-tournament-modal/register-tournament-modal.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { ConfirmComponent } from './components/register-tournament-modal/confirm/confirm.component';
import { TournamentResultsComponent } from './pages/tournament-results/tournament-results.component';
import { ForgotPasswordModalComponent } from './components/forgot-password-modal/forgot-password-modal.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ConfirmedComponent } from './pages/forgot-password/confirmed/confirmed.component';
import { MyTournamentsComponent } from './pages/my-tournaments/my-tournaments.component';
import { ShowComponent as ShowMyTournamentComponent } from './pages/my-tournaments/show/show.component';

@NgModule({
	declarations: [
		IndexComponent,
		LoginComponent,
		RegisterComponent,
		TeamsComponent,
		GanioComponent,
		TournamentsComponent,
		LoginModalComponent,
		ProfileComponent,
		ShowComponent,
		OurCompanyComponent,
		OurNftComponent,
		MockTournamentsComponent,
		TestComponent,
		FiltersComponent,
		RegisterModalComponent,
		ComingSoonModalComponent,
		CountDownComponent,
		EmailVerificationModalComponent,
		EmailVerificationComponent,
		RegisterTournamentModalComponent,
	  AuthModalComponent,
	  ConfirmComponent,
	  TournamentResultsComponent,
	  ForgotPasswordModalComponent,
	  ForgotPasswordComponent,
	  ConfirmedComponent,
	  MyTournamentsComponent,
	  ShowMyTournamentComponent
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		RecaptchaModule,
		NgxStripeModule.forRoot(environment.stripe_public_key)
	]
})
export class UserModule { }
