import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
	user: User = {
		firstName: '',
		lastName: '',
		email: ''
	};

	users: User[];
	showExtended: boolean = true;
	loaded: boolean = false;
	enableAdd: boolean = false;
	showUserForm: boolean = true;
	@ViewChild('userForm') form: any;
	data: any;

	constructor(private userService: UserService) {}

	ngOnInit() {
		//this.loaded = true;
		this.userService.getUsers().subscribe((users) => {
			this.users = users;
			this.loaded = true;
		});
		this.userService.getData().subscribe((data) => {
			console.log(data);
		});
	}

	onSubmit({ value, valid }: { value: User; valid: boolean }) {
		if (!valid) {
			console.log('form is not valid');
		} else {
			this.userService.addUser(value);
			value.isActive = true;
			value.registered = new Date();
			value.hide = false;
			this.form.reset();
		}
	}
}
