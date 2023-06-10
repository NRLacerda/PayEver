import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl,FormGroup} from '@angular/forms'
import { NewAppointmentService } from 'src/app/shared/services/new-appointment.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentModalComponent {
  newDate:string;
  newAppointment = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date:new FormControl(''),
  })
constructor(private matDialogRef: MatDialogRef<AppointmentModalComponent>,private AppointmentService:NewAppointmentService,@Inject(MAT_DIALOG_DATA) public date: any ){
  this.newDate=''
}
ngOnInit():void{
  this.newDate = this.date.date
  this.newDate.toString()
}
closeApppointment(){
  this.matDialogRef.close(null);
}
submitAppointment(){
  this.AppointmentService.submitAppointment(1,this.newAppointment.value.title ?? '', this.newAppointment.value.description ?? '', this.newDate ?? '')
}
}