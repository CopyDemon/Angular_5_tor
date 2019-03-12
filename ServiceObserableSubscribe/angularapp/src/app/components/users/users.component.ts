import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
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

	constructor(private dataService: DataService) {}

	ngOnInit() {
		//this.loaded = true;
		this.dataService.getUsers().subscribe((users) => {
			this.users = users;
			this.loaded = true;
		});
		this.dataService.getData().subscribe((data) => {
			console.log(data);
		});
	}

	onSubmit({ value, valid }: { value: User; valid: boolean }) {
		if (!valid) {
			console.log('form is not valid');
		} else {
			this.dataService.addUser(value);
			value.isActive = true;
			value.registered = new Date();
			value.hide = false;
			this.form.reset();
		}
	}
}
