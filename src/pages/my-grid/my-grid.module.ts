import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGridPage } from './my-grid';

@NgModule({
  declarations: [
    MyGridPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGridPage),
  ],
  exports: [
    MyGridPage
  ]
})
export class MyGridPageModule {}
