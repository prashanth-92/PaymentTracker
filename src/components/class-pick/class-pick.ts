import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentListComponent } from '../../components/student-list/student-list';
/**
 * Generated class for the ClassPickComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'class-pick',
  templateUrl: 'class-pick.html'
})
export class ClassPickComponent {
  classes = [];
  constructor(public navCtrl:NavController) {
    this.classes.push({ data:'IX'});
    this.classes.push({ data:'X'});
    this.classes.push({ data:'XI'});
    this.classes.push({ data:'XII'});
  }
  goToStudentList(){
    //this.navCtrl.push(StudentListComponent);
    alert('test');
  }
}
