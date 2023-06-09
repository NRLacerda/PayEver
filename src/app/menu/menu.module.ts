import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu.routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AppointmentComponent } from './appointment/appointment.component';






@NgModule({
  declarations: [
    MenuComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    CdkDrag,
    MatDialogModule,
    MatButtonModule
  ]
})
export class MenuModule { }