import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

import { IonicStorageModule}  from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite }  from '@ionic-native/sqlite';
import { foodByCatgPage } from '../pages/foodByCatg/foodByCatg'






@NgModule({
  declarations: [
    MyApp,
    ListPage,
    foodByCatgPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    foodByCatgPage,
  ],
  providers: [
    StatusBar,
    SocialSharing,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLitePorter,
    SQLite,
  ]
})
export class AppModule {}
