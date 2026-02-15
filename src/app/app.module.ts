import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentlistComponent } from './component/studentlist/studentlist.component';
import { StudentformComponent } from './component/studentform/studentform.component';
import { StudentdashComponent } from './component/studentdash/studentdash.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule}from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetconformComponent } from './component/getconform/getconform.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentformComponent,
    StudentdashComponent,
    GetconformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
