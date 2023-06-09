import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
constructor(private matDialogRef: MatDialogRef<AppointmentComponent>,
  ){

}

closeApppointment(){
  this.matDialogRef.close(null);
}
}
