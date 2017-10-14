import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentDetailsListComponent } from '../payment-details-list/payment-details-list'

/**
 * Generated class for the StudentListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'student-list',
  templateUrl: 'student-list.html'
})
export class StudentListComponent {
  students: Array<any> = [];
  goToPaymentDetailsListCallBack: Function;
  constructor(public navCtrl: NavController) {
    this.students.push({name:'Prashanth', payment:'100'});
    this.students.push({name:'Abhishek', payment:'50'});
    this.students.push({name:'Swami', payment:'150'});
  }

  public ngOnInit(){
    this.goToPaymentDetailsListCallBack = this.goToPaymentDetailsList.bind(this);
  }
  
  goToPaymentDetailsList(){
    this.navCtrl.push(PaymentDetailsListComponent);
  }

}
