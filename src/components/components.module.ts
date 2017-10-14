import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { ClassPickComponent } from './class-pick/class-pick';
import { CardComponent } from './card/card';
import { StudentListComponent } from './student-list/student-list';
@NgModule({
	declarations: [LoginComponent,
    ClassPickComponent,
    CardComponent,
    StudentListComponent],
	imports: [],
	exports: [LoginComponent,
    ClassPickComponent,
    CardComponent,
    StudentListComponent]
})
export class ComponentsModule {}
