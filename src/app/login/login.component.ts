import { Component, OnInit, NgZone } from '@angular/core';

import { FacebookService } from './facebook.service';

@Component({
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit{
	name=""
	isUser = false
  	constructor(
  		private _ngZone: NgZone,
		private _facebookService: FacebookService
  	){}

	ngOnInit(){
    		this._facebookService.loadAndInitFBSDK();
			//this.login();
	}

	login(){
		let self = this;
		FB.login(function(response) {
		    if (response) {
		        FB.api('/me?fields=id, email,first_name,gender, last_name, link, locale, name, timezone, verified', "GET", function(response) {
		          	self._ngZone.run(() => {
				        //self.name = response.name;
				        self.isUser = true
						console.log(response);
			        });
		        });
		    }else{
		        console.log('User cancelled login or did not fully authorize.');
		    }
		});
}
}