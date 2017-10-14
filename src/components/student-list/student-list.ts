import { Component } from '@angular/core';

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
  constructor() {
    this.students.push({name:'Prashanth', payment:'100'});
    this.students.push({name:'Abhishek', payment:'50'});
    this.students.push({name:'Swami', payment:'150'});
  }

}
