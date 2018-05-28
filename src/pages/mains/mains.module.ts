import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainsPage } from './mains';
import { TooltipsModule } from 'ionic-tooltips';


@NgModule({
  declarations: [
    MainsPage,
  ],
  imports: [
    IonicPageModule.forChild(MainsPage),
    TooltipsModule
  ],
  exports:[
  MainsPage
  ]
})
export class MainsPageModule {}
