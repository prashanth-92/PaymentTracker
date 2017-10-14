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
  goToStudentListCallBack : Function;
  
  constructor(public navCtrl:NavController) {
    this.classes.push({ data:'IX'});
    this.classes.push({ data:'X'});
    this.classes.push({ data:'XI'});
    this.classes.push({ data:'XII'});
  }

  public ngOnInit(){
    //The below is done is to maintain context.
    //The below function is passed to the card context so as to execute when the card is clicked
    this.goToStudentListCallBack = this.goToStudentList.bind(this);
  }

  goToStudentList(){
    this.navCtrl.push(StudentListComponent);
  }
}
