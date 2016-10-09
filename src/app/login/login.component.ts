import { Component, OnInit, NgZone } from '@angular/core';

import { FacebookService } from './facebook.service';

@Component({
	templateUrl: './login.html',
	styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
	name = ""
	isUser = false
	constructor(
		private _ngZone: NgZone,
		private _facebookService: FacebookService
	) { }

	ngOnInit() {
		this._facebookService.loadAndInitFBSDK();
		//this.login();
	}

	login() {
		let self = this;
		FB.login(function (response: any) {
			if (response && !response.error) {
				console.log(response.authResponse);
				FB.api('/me?fields=id, email,first_name,gender, last_name, link, locale, name, timezone, verified, picture.type(large), about, age_range, birthday, context, cover, currency', "GET", function (response) {
					self._ngZone.run(() => {
						self.name = "Carlos";
						self.isUser = true;
						console.log("USER");
						console.log(response);
					});
				});
				debugger
				FB.api(response.authResponse.userID+"/friendlists", "GET", function (response: any) {
					debugger
					if (response && !response.error) {
						console.log("FRIENDS");
						console.log(response);
					}
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		});


	}

}