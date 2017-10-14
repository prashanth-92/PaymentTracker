import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { ClassPickComponent } from './class-pick/class-pick';
import { CardComponent } from './card/card';
import { StudentListComponent } from './student-list/student-list';
import { PaymentDetailsListComponent } from './payment-details-list/payment-details-list';
import { TimelineComponent, TimelineItemComponent, TimelineTimeComponent } from './timeline/timeline';
@NgModule({
	declarations: [LoginComponent,
    ClassPickComponent,
    CardComponent,
    StudentListComponent,
    PaymentDetailsListComponent,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent],
	imports: [],
	exports: [LoginComponent,
    ClassPickComponent,
    CardComponent,
    StudentListComponent,
    PaymentDetailsListComponent,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent]
})
export class ComponentsModule {}
