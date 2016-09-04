import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FacebookService {

  constructor() {
    if (!window.fbAsyncInit) {
      console.log('define');
      window.fbAsyncInit = function() {
        FB.init({
          appId: "894392657295364",
          xfbml: true,
          version: 'v2.7'
        });
      };
    }
  }

  loadAndInitFBSDK():Observable<FBInitParams>{
    var js,
      id = 'facebook-jssdk',
      ref = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) {
      return;
    }

    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.parentNode.insertBefore(js, ref);
  }

}