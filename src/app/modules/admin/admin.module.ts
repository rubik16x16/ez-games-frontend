import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { Template1Component } from './templates/template1/template1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { CreateComponent as CreateTournament } from './pages/tournaments/create/create.component';
import { EditComponent } from './pages/tournaments/edit/edit.component';

@NgModule({
	declarations: [
		IndexComponent,
		Template1Component,
		TournamentsComponent,
		CreateTournament,
	  EditComponent,

	],
	imports: [
		CommonModule,
		AdminRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule
	]
})
export class AdminModule { }
