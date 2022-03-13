import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
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
   TestComponent
	],
	imports: [
		CommonModule,
		UserRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule,
	]
})
export class UserModule { }
