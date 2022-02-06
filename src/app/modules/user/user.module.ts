import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { Template1Component } from './templates/template1/template1.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    Template1Component,
    LoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
		MaterialModule,
		FlexLayoutModule,
		ReactiveFormsModule
  ]
})
export class UserModule { }
