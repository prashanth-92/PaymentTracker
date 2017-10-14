import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginComponent } from '../components/login/login';
import { HomePage } from '../pages/home/home';
import { ClassPickComponent } from '../components/class-pick/class-pick';
import { CardComponent } from '../components/card/card';
import { StudentListComponent } from '../components/student-list/student-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    ClassPickComponent,
    CardComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginComponent,
    ClassPickComponent,
    CardComponent,
    StudentListComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
