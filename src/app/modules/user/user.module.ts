import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaModule } from "ng-recaptcha";
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

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
import { FiltersComponent } from './pages/mock-tournaments/filters/filters.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { ComingSoonModalComponent } from './components/coming-soon-modal/coming-soon-modal.component';
import { CountDownComponent } from './components/count-down/count-down.component';

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
		CountDownComponent
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,
		RecaptchaModule
	]
})
export class UserModule { }
