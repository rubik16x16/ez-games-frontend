import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { User } from 'src/app/models/user';
import { CodUser } from 'src/app/models/cod-user';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	user: User;
	codUser: CodUser;

	profileForm = this.fb.group({
		nickname: [{value: '', disabled: true}, [
			Validators.required,
			Validators.minLength(4)
		]],
		email: [{value: '', disabled: true}, []]
	});

	constructor(
		private profileService: ProfileService,
		private fb: FormBuilder,
	) { }

	ngOnInit(): void {

		this.profileService.getProfile().subscribe(res => {

			this.user = res;
			console.log(this.user);
			this.profileForm.patchValue(res);
		});
	}

	get nickname() { return this.profileForm.get('nickname') }

	getCodUser(): void {

		//legendary117s
		this.profileService.getCodUser(this.profileForm.value.nickname).subscribe(res => {

			this.codUser = res;
		});
	}

	save(): void {

		this.profileForm.markAllAsTouched();

		if(this.profileForm.valid){

			this.profileService.updateNickname(this.profileForm.value.nickname).subscribe(res => {

				console.log(res);
				this.user.nickname = this.profileForm.value.nickname;
			});
		}
	}
}
