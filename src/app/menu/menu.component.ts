import { Component } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private dialog : MatDialog){
  }
  openNewAppointment(enterAnimationDuration: string, exitAnimationDuration: string, Date:Date|null): void {
   // if(Date){
    this.dialog.open(AppointmentComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    /*}else{
      alert("select a date");
    }*/
  }
  onDateSelected(event:any):void {
    // Your logic with the selected date
    console.log('Selected date:', event);
    // Call your function here with the selected date as a parameter
    this.openNewAppointment('0ms', '0ms',event);
  }
}
