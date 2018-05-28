import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MyApp } from './app.component';

import { MainsPage } from '../pages/mains/mains';
import { TermsPage } from '../pages/terms/terms';
import { AboutPage } from '../pages/about/about';
import { RecommendationPage } from '../pages/recommendation/recommendation';


@NgModule({
  declarations: [
    MyApp,
    MainsPage,
    TermsPage,
    AboutPage,
    RecommendationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, 
    {
      scrollAssist: false
    }),
    TooltipsModule,
    BrowserAnimationsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainsPage,
    TermsPage,
    AboutPage,
    RecommendationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
