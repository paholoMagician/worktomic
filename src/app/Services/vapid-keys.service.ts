import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class VapidKeysService {

  public readonly vapidKey_public = 'BGrL4Rr_HxiLmepynQsmukH0yhICWIHSdfYunP8hszw26Bt6HOrKsUu-p_upX3_CpJ9l8x4EsnYOf8gQgmripbs';
  public readonly vapidKey_private = 'Bm8WJLjHiAH1kuYfeFVY3ZBpEjgE4S3WSy0l0u8Hp6Y';
  // private apiRest: ApiRestService
  constructor( private swPush: SwPush )  {
    this.subscribeToNotifications();
  }


//{"publicKey":"BGrL4Rr_HxiLmepynQsmukH0yhICWIHSdfYunP8hszw26Bt6HOrKsUu-p_upX3_CpJ9l8x4EsnYOf8gQgmripbs",
//"privateKey":"Bm8WJLjHiAH1kuYfeFVY3ZBpEjgE4S3WSy0l0u8Hp6Y"}

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.vapidKey_public
    }).then( sub => {
      const token = JSON.parse(JSON.stringify(sub));
    })
  }

}
