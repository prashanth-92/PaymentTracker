import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClassPickComponent } from '../class-pick/class-pick';

/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  constructor(public navCtrl: NavController) {
  }

  login(){
    this.navCtrl.push(ClassPickComponent);
  }

  disableLogin(){
    return (this.username.length==0 || this.password.length==0);
  }
}
