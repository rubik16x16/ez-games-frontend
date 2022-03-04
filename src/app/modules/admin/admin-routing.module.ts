import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { Template1Component } from './templates/template1/template1.component';
import { AuthGuard } from 'src/app/auth.guard';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';

const routes: Routes = [
	{
		path: '',
		component: Template1Component,
		canActivate: [
			AuthGuard
		],
		children: [
			{
				path: '',
				component: IndexComponent
			},
			{
				path: 'tournaments',
				component: TournamentsComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
